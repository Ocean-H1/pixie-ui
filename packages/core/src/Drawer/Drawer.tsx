import React, { CSSProperties, useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { Icon } from '../Icon';
import { isBrowser, addEvent, removeEvent } from '@pixie-ui/utils';

export type DrawerPlacement = 'top' | 'right' | 'bottom' | 'left';
export type DrawerSize = 'default' | 'large';

export type SemanticDOM = 
  | 'root'
  | 'body'
  | 'header'
  | 'content'
  | 'footer'
  | 'mask'
  | 'wrapper';

export interface DrawerProps {
  /**
   * 抽屉是否可见
   */
  open: boolean;
  /**
   * 抽屉展开后是否将焦点切换至其 DOM 节点
   * @default true
   */
  autoFocus?: boolean;
  /**
   * 切换抽屉时动画结束后的回调
   */
  afterOpenChange?: (open: boolean) => void;
  /**
   * Drawer 容器外层 className 设置
   */
  className?: string;
  /**
   * 语义化结构 className
   */
  classNames?: Record<SemanticDOM, string>;
  /**
   * 自定义关闭图标
   * @default <Icon icon="mdi:close" />
   */
  closeIcon?: React.ReactNode;
  /**
   * 关闭时销毁 Drawer 里的子元素
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * 抽屉右上角的操作区域
   */
  extra?: React.ReactNode;
  /**
   * 抽屉的页脚
   */
  footer?: React.ReactNode;
  /**
   * 预渲染 Drawer 内元素
   * @default false
   */
  forceRender?: boolean;
  /**
   * 指定 Drawer 挂载的节点，并在容器内展现，false 为挂载在当前位置
   * @default body
   */
  getContainer?: HTMLElement | (() => HTMLElement) | string | false;
  /**
   * 高度，在 placement 为 top 或 bottom 时使用
   * @default 378
   */
  height?: string | number;
  /**
   * 是否支持键盘 esc 关闭
   * @default true
   */
  keyboard?: boolean;
  /**
   * 是否展示遮罩
   * @default true
   */
  mask?: boolean;
  /**
   * 点击蒙层是否允许关闭
   * @default true
   */
  maskClosable?: boolean;
  /**
   * 抽屉的方向
   * @default right
   */
  placement?: DrawerPlacement;
  /**
   * 用于设置多层 Drawer 的推动行为
   * @default { distance: 180 }
   */
  push?: boolean | { distance: string | number };
  /**
   * 可用于设置 Drawer 最外层容器的样式
   */
  rootStyle?: CSSProperties;
  /**
   * 预设抽屉宽度（或高度）
   * @default 'default'
   */
  size?: DrawerSize;
  /**
   * 设计 Drawer 容器样式
   */
  style?: CSSProperties;
  /**
   * 语义化结构 style
   */
  styles?: Record<SemanticDOM, CSSProperties>;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 显示骨架屏
   * @default false
   */
  loading?: boolean;
  /**
   * 宽度，在 placement 为 left 或 right 时使用
   * @default 378
   */
  width?: string | number;
  /**
   * 设置 Drawer 的 z-index
   * @default 1000
   */
  zIndex?: number;
  /**
   * 点击遮罩层或左上角叉或取消按钮的回调
   */
  onClose?: (e: React.SyntheticEvent) => void;
  /**
   * 自定义渲染抽屉
   */
  drawerRender?: (node: React.ReactNode) => React.ReactNode;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

// 默认宽度/高度
const DEFAULT_SIZE = 378;
const LARGE_SIZE = 736;

// 根据size属性获取宽度或高度
const getSizeValue = (size: DrawerSize, customSize?: string | number): string | number => {
  if (customSize !== undefined) return customSize;
  return size === 'large' ? LARGE_SIZE : DEFAULT_SIZE;
};

// 获取抽屉容器
const getDrawerContainer = (container: HTMLElement | (() => HTMLElement) | string | false | undefined): HTMLElement | null => {
  if (!isBrowser()) return null;
  
  if (container === false) return null;
  
  if (container === undefined) return document.body;
  
  if (typeof container === 'string') {
    const domContainer = document.querySelector(container);
    return domContainer as HTMLElement;
  }
  
  if (typeof container === 'function') {
    return container();
  }
  
  return container;
};

// Drawer容器
const DrawerWrapper = styled.div<{
  $zIndex: number;
  $open: boolean;
  $placement: DrawerPlacement;
  $push: boolean | { distance: string | number };
  $width: string | number;
  $height: string | number;
  theme: Theme;
}>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${(props) => props.$zIndex};
  pointer-events: ${(props) => (props.$open ? 'auto' : 'none')};
  
  /* 抽屉推动效果 */
  ${(props) => {
    if (!props.$push) return '';
    
    const distance = typeof props.$push === 'object' ? props.$push.distance : 180;
    const dir = props.$placement;
    
    if (dir === 'left') {
      return `
        &.pushed {
          left: ${distance}px;
        }
      `;
    }
    if (dir === 'right') {
      return `
        &.pushed {
          right: ${distance}px;
        }
      `;
    }
    if (dir === 'top') {
      return `
        &.pushed {
          top: ${distance}px;
        }
      `;
    }
    if (dir === 'bottom') {
      return `
        &.pushed {
          bottom: ${distance}px;
        }
      `;
    }
    return '';
  }}
`;

// 遮罩层
const Mask = styled.div<{
  $open: boolean;
  theme: Theme;
}>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.mask};
  opacity: ${(props) => (props.$open ? 1 : 0)};
  transition: opacity 0.3s;
  pointer-events: ${(props) => (props.$open ? 'auto' : 'none')};
`;

// 抽屉内容容器
const DrawerContent = styled.div<{
  $placement: DrawerPlacement;
  $width: string | number;
  $height: string | number;
  $open: boolean;
  theme: Theme;
}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background.paper};
  box-shadow: ${(props) => props.theme.shadows.lg};
  transition: transform 0.3s;
  
  /* 位置与尺寸 */
  ${(props) => {
    const { $placement, $width, $height, $open } = props;
    
    if ($placement === 'right') {
      return `
        top: 0;
        right: 0;
        bottom: 0;
        width: ${$width}px;
        transform: translateX(${$open ? 0 : '100%'});
      `;
    }
    
    if ($placement === 'left') {
      return `
        top: 0;
        left: 0;
        bottom: 0;
        width: ${$width}px;
        transform: translateX(${$open ? 0 : '-100%'});
      `;
    }
    
    if ($placement === 'top') {
      return `
        top: 0;
        left: 0;
        right: 0;
        height: ${$height}px;
        transform: translateY(${$open ? 0 : '-100%'});
      `;
    }
    
    if ($placement === 'bottom') {
      return `
        bottom: 0;
        left: 0;
        right: 0;
        height: ${$height}px;
        transform: translateY(${$open ? 0 : '100%'});
      `;
    }
  }}
`;

// 抽屉头部
const DrawerHeader = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.md};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  
  .drawer-title {
    margin: 0;
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.typography.fontWeight.medium};
    color: ${(props) => props.theme.colors.text.primary};
  }
  
  .drawer-header-actions {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing.sm};
  }
  
  .drawer-close {
    cursor: pointer;
    color: ${(props) => props.theme.colors.text.secondary};
    
    &:hover {
      color: ${(props) => props.theme.colors.text.primary};
    }
  }
`;

// 抽屉主体
const DrawerBody = styled.div<{ theme: Theme }>`
  flex: 1;
  padding: ${(props) => props.theme.spacing.md};
  overflow-y: auto;
`;

// 抽屉底部
const DrawerFooter = styled.div<{ theme: Theme }>`
  padding: ${(props) => props.theme.spacing.md};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// 骨架屏
const Skeleton = styled.div<{ theme: Theme }>`
  margin-bottom: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.skeleton.background};
  border-radius: ${(props) => props.theme.radii.sm};
  height: 16px;
  animation: pulse 1.5s ease-in-out 0.5s infinite;
  
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Drawer: React.FC<DrawerProps> = ({
  open = false,
  autoFocus = true,
  afterOpenChange,
  className,
  classNames,
  closeIcon,
  destroyOnClose = false,
  extra,
  footer,
  forceRender = false,
  getContainer = document.body,
  height,
  keyboard = true,
  mask = true,
  maskClosable = true,
  placement = 'right',
  push = { distance: 180 },
  rootStyle,
  size = 'default',
  style,
  styles,
  title,
  loading = false,
  width,
  zIndex = 1000,
  onClose,
  drawerRender,
  children,
}) => {
  const theme = useTheme();
  const [isContentVisible, setIsContentVisible] = useState(open);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // 处理宽度/高度
  const sizeValue = ['left', 'right'].includes(placement)
    ? getSizeValue(size, width)
    : getSizeValue(size, height);
  
  // 当open状态变化时触发afterOpenChange回调
  useEffect(() => {
    // 当抽屉打开时，立即显示内容
    if (open) {
      setIsContentVisible(true);
    }
    
    // 动画结束后触发回调
    const timer = setTimeout(() => {
      if (!open) {
        setIsContentVisible(false);
      }
      
      afterOpenChange?.(open);
    }, 300); // 与CSS过渡时间匹配
    
    return () => clearTimeout(timer);
  }, [open, afterOpenChange]);
  
  // 自动聚焦
  useEffect(() => {
    if (open && autoFocus && contentRef.current) {
      contentRef.current.focus();
    }
  }, [open, autoFocus]);
  
  // 处理ESC键关闭
  useEffect(() => {
    if (!keyboard || !open) return;
    
    const handleKeyDown = (e: Event) => {
      if ((e as KeyboardEvent).key === 'Escape') {
        onClose?.(e as unknown as React.SyntheticEvent);
      }
    };
    
    addEvent(document, 'keydown', handleKeyDown);
    
    return () => {
      removeEvent(document, 'keydown', handleKeyDown);
    };
  }, [keyboard, open, onClose]);
  
  // 处理遮罩点击
  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (maskClosable) {
      onClose?.(e);
    }
  };
  
  // 渲染关闭图标
  const renderCloseIcon = () => {
    // 如果没有提供关闭图标，使用默认图标
    if (closeIcon === undefined) {
      return (
        <div className="drawer-close" onClick={onClose}>
          <Icon icon="mdi:close" />
        </div>
      );
    }
    
    // 如果设置为null或false，不显示关闭图标
    if (closeIcon === null || closeIcon === false) {
      return null;
    }
    
    // 使用自定义关闭图标
    return (
      <div className="drawer-close" onClick={onClose}>
        {closeIcon}
      </div>
    );
  };
  
  // 渲染骨架屏
  const renderSkeleton = () => {
    return (
      <>
        <Skeleton theme={theme} style={{ width: '100%', height: '24px', marginBottom: '16px' }} />
        <Skeleton theme={theme} style={{ width: '90%' }} />
        <Skeleton theme={theme} style={{ width: '80%' }} />
        <Skeleton theme={theme} style={{ width: '85%' }} />
        <Skeleton theme={theme} style={{ width: '70%' }} />
        <Skeleton theme={theme} style={{ width: '75%' }} />
      </>
    );
  };
  
  // 判断是否渲染内容
  if (!open && !isContentVisible && !forceRender) {
    return null;
  }
  
  // 如果关闭时销毁内容且抽屉已关闭，则不渲染子元素
  const shouldRenderChildren = !(destroyOnClose && !open);
  
  // 创建抽屉内容
  const drawerContent = (
    <DrawerContent
      ref={contentRef}
      tabIndex={-1}
      $placement={placement}
      $width={sizeValue}
      $height={sizeValue}
      $open={open}
      theme={theme}
      style={style}
      className={classNames?.content}
      data-testid="drawer-content"
    >
      {/* 头部 */}
      {(title || extra) && (
        <DrawerHeader theme={theme} className={classNames?.header} style={styles?.header}>
          <div className="drawer-title">{title}</div>
          <div className="drawer-header-actions">
            {extra}
            {renderCloseIcon()}
          </div>
        </DrawerHeader>
      )}
      
      {/* 主体 */}
      <DrawerBody theme={theme} className={classNames?.body} style={styles?.body}>
        {loading ? renderSkeleton() : shouldRenderChildren ? children : null}
      </DrawerBody>
      
      {/* 底部 */}
      {footer && (
        <DrawerFooter theme={theme} className={classNames?.footer} style={styles?.footer}>
          {footer}
        </DrawerFooter>
      )}
    </DrawerContent>
  );
  
  // 处理自定义渲染
  const finalDrawerContent = drawerRender ? drawerRender(drawerContent) : drawerContent;
  
  // 获取容器元素
  const container = getDrawerContainer(getContainer);
  
  // 如果指定了容器为false或容器不可用，直接渲染在当前位置
  if (!container) {
    return (
      <DrawerWrapper
        $zIndex={zIndex}
        $open={open}
        $placement={placement}
        $push={push}
        $width={sizeValue}
        $height={sizeValue}
        theme={theme}
        style={rootStyle}
        className={`${className || ''} ${classNames?.root || ''}`}
        data-testid="drawer-wrapper"
      >
        {mask && (
          <Mask
            $open={open}
            theme={theme}
            onClick={handleMaskClick}
            className={classNames?.mask}
            style={styles?.mask}
            data-testid="drawer-mask"
          />
        )}
        {finalDrawerContent}
      </DrawerWrapper>
    );
  }
  
  // 渲染到指定容器
  return (
    <>
      {ReactDOM.createPortal(
        <DrawerWrapper
          $zIndex={zIndex}
          $open={open}
          $placement={placement}
          $push={push}
          $width={sizeValue}
          $height={sizeValue}
          theme={theme}
          style={rootStyle}
          className={`${className || ''} ${classNames?.root || ''}`}
          data-testid="drawer-wrapper"
        >
          {mask && (
            <Mask
              $open={open}
              theme={theme}
              onClick={handleMaskClick}
              className={classNames?.mask}
              style={styles?.mask}
              data-testid="drawer-mask"
            />
          )}
          {finalDrawerContent}
        </DrawerWrapper>,
        container
      )}
    </>
  );
}; 