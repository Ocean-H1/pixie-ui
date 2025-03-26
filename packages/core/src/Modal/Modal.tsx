import React, { CSSProperties, useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { Button } from '../Button';
import { Icon } from '../Icon';

export type ModalSize = 'small' | 'medium' | 'large';
export type BreakpointValue = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Breakpoint = number | BreakpointValue;

export interface ModalProps {
  /**
   * 对话框是否可见
   */
  open: boolean;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 宽度
   * @default 520
   */
  width?: string | number | Breakpoint;
  /**
   * 垂直居中展示 Modal
   * @default false
   */
  centered?: boolean;
  /**
   * 是否显示右上角的关闭按钮
   * @default true
   */
  closable?: boolean | { closeIcon?: React.ReactNode; disabled?: boolean };
  /**
   * 自定义关闭图标
   * @default <Icon icon="mdi:close" />
   */
  closeIcon?: React.ReactNode;
  /**
   * 确定按钮 loading
   * @default false
   */
  confirmLoading?: boolean;
  /**
   * 关闭时销毁 Modal 里的子元素
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * 对话框关闭后是否需要聚焦触发元素
   * @default true
   */
  focusTriggerAfterClose?: boolean;
  /**
   * 底部内容，当不需要默认底部按钮时，可以设为 footer={null}
   */
  footer?: React.ReactNode | ((params: FooterRenderParams) => React.ReactNode);
  /**
   * 强制渲染 Modal
   * @default false
   */
  forceRender?: boolean;
  /**
   * 指定 Modal 挂载的节点，但依旧为全屏展示，false 为挂载在当前位置
   * @default document.body
   */
  getContainer?: HTMLElement | (() => HTMLElement) | string | false;
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
   * 自定义渲染对话框
   */
  modalRender?: (node: React.ReactNode) => React.ReactNode;
  /**
   * ok 按钮 props
   */
  okButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /**
   * 确认按钮文字
   * @default 确定
   */
  okText?: React.ReactNode;
  /**
   * 确认按钮类型
   * @default primary
   */
  okType?: 'primary' | 'secondary' | 'text';
  /**
   * 可用于设置浮层的样式，调整浮层位置等
   */
  style?: CSSProperties;
  /**
   * 显示骨架屏
   * @default false
   */
  loading?: boolean;
  /**
   * 对话框外层容器的类名
   */
  wrapClassName?: string;
  /**
   * 设置 Modal 的 z-index
   * @default 1000
   */
  zIndex?: number;
  /**
   * 取消按钮文字
   * @default 取消
   */
  cancelText?: React.ReactNode;
  /**
   * cancel 按钮 props
   */
  cancelButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /**
   * 配置弹窗内置模块的 className
   */
  classNames?: Record<SemanticDOM, string>;
  /**
   * 配置弹窗内置模块的 style
   */
  styles?: Record<SemanticDOM, CSSProperties>;
  /**
   * 点击遮罩层或右上角叉或取消按钮的回调
   */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * 点击确定回调
   */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * Modal 完全关闭后的回调
   */
  afterClose?: () => void;
  /**
   * 打开和关闭 Modal 时动画结束后的回调
   */
  afterOpenChange?: (open: boolean) => void;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

export type SemanticDOM =
  | 'root'
  | 'body'
  | 'header'
  | 'content'
  | 'footer'
  | 'mask'
  | 'wrapper';

export interface FooterRenderParams {
  /**
   * 确认按钮 props
   */
  originOkBtn: React.ReactElement;
  /**
   * 取消按钮 props
   */
  originCancelBtn: React.ReactElement;
}

// 定义宽度映射表
const sizeWidthMap: Record<BreakpointValue, number> = {
  xs: 320,
  sm: 480,
  md: 620,
  lg: 820,
  xl: 1080,
};

// 获取模态框宽度
const getModalWidth = (width: string | number | Breakpoint | undefined): string | number => {
  if (width === undefined) return 520;
  if (typeof width === 'string') return width;
  if (typeof width === 'number') return width;
  
  // 处理断点值
  return sizeWidthMap[width as BreakpointValue] || 520;
};

// 包装器
const ModalWrapper = styled.div<{
  $zIndex: number;
  theme: Theme;
  $wrapClassName?: string;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ $zIndex }) => $zIndex};
  overflow: auto;
  ${({ $wrapClassName }) => $wrapClassName && `class-name: ${$wrapClassName};`}
`;

// 遮罩层
const ModalMask = styled.div<{
  theme: Theme;
  $visible: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.mask};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: -1;
`;

// 弹窗容器
const ModalContainer = styled.div<{
  theme: Theme;
  $width: string | number;
  $centered: boolean;
  $customStyle?: CSSProperties;
  $closing: boolean;
  $opening: boolean;
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  margin: ${({ $centered }) => ($centered ? '0 auto' : '100px auto')};
  padding: 0;
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width)};
  max-width: calc(100vw - 32px);
  pointer-events: auto;
  transform: translateY(${({ $closing, $opening }) => {
    if ($closing) return '20px'; 
    if ($opening) return '-20px'; 
    return '0';
  }});
  opacity: ${({ $closing, $opening }) => ($closing || $opening) ? 0 : 1};
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  ${({ $customStyle }) => $customStyle && Object.entries($customStyle).map(([key, value]) => `${key}: ${value};`).join(' ')}
`;

// 头部
const ModalHeader = styled.div<{ theme: Theme }>`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// 标题
const ModalTitle = styled.div<{ theme: Theme }>`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.5;
  word-wrap: break-word;
`;

// 关闭按钮
const CloseButton = styled.button<{ theme: Theme }>`
  position: absolute;
  right: ${({ theme }) => theme.spacing.md};
  top: ${({ theme }) => theme.spacing.md};
  padding: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: color 0.3s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

// 内容区域
const ModalContent = styled.div<{ theme: Theme }>`
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.primary};
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  word-wrap: break-word;
`;

// 骨架屏
const ModalSkeleton = styled.div<{ theme: Theme }>`
  width: 100%;
  
  & > div {
    background-color: ${({ theme }) => theme.colors.skeleton.background};
    border-radius: ${({ theme }) => theme.radii.sm};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    height: 16px;
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

// 页脚
const ModalFooter = styled.div<{ theme: Theme }>`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  & > button + button {
    margin-left: ${({ theme }) => theme.spacing.sm};
  }
`;

/**
 * Modal组件
 * @param props 组件属性
 * @returns Modal组件
 */
export const Modal: React.FC<ModalProps> = ({
  open = false,
  title,
  width = 520,
  centered = false,
  closable = true,
  closeIcon,
  confirmLoading = false,
  destroyOnClose = false,
  focusTriggerAfterClose = true,
  footer,
  forceRender = false,
  getContainer = document.body,
  keyboard = true,
  mask = true,
  maskClosable = true,
  modalRender,
  okButtonProps,
  okText = '确定',
  okType = 'primary',
  style,
  loading = false,
  wrapClassName,
  zIndex = 1000,
  cancelText = '取消',
  cancelButtonProps,
  classNames,
  styles,
  onCancel,
  onOk,
  afterClose,
  afterOpenChange,
  children,
}) => {
  const theme = useTheme();
  const [visible, setVisible] = useState(open);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(true);
  const [mountModal, setMountModal] = useState(forceRender || open);
  const previouslyFocusedElementRef = useRef<Element | null>(null);

  // 处理打开关闭变化
  useEffect(() => {
    if (open) {
      setVisible(true);
      setMountModal(true);
      setIsOpening(true);
      
      // 延迟设置isOpening为false，以确保有入场动画
      const openTimer = setTimeout(() => {
        setIsOpening(false);
        clearTimeout(openTimer);
      }, 20);
      
      // 设置isClosing为false
      setIsClosing(false);
      afterOpenChange?.(true);
      
      // 记录当前焦点元素
      if (focusTriggerAfterClose) {
        previouslyFocusedElementRef.current = document.activeElement;
      }
    } else if (visible) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setVisible(false);
        afterOpenChange?.(false);
        clearTimeout(timer);
        
        // 恢复焦点
        if (focusTriggerAfterClose && previouslyFocusedElementRef.current instanceof HTMLElement) {
          previouslyFocusedElementRef.current.focus();
        }
        
        if (destroyOnClose) {
          const destroyTimer = setTimeout(() => {
            setMountModal(false);
            afterClose?.();
            clearTimeout(destroyTimer);
          }, 100);
        } else {
          afterClose?.();
        }
      }, 300); // 与过渡动画时长保持一致
    }
  }, [open, visible, destroyOnClose, afterOpenChange, afterClose, focusTriggerAfterClose]);

  // 处理ESC关闭
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (keyboard && e.key === 'Escape' && visible) {
        onCancel?.(e as unknown as React.MouseEvent<HTMLElement>);
      }
    };

    if (visible) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyboard, visible, onCancel]);

  // 点击蒙层关闭
  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (maskClosable && onCancel) {
      onCancel(e);
    }
  };

  // 处理确认
  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    onOk?.(e);
  };

  // 处理取消
  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    onCancel?.(e);
  };

  // 渲染页脚
  const renderFooter = () => {
    // 默认页脚按钮
    const defaultFooterButtons = (
      <>
        <Button
          variant="secondary"
          onClick={handleCancel}
          {...cancelButtonProps}
        >
          {cancelText}
        </Button>
        <Button
          variant={okType}
          onClick={handleOk}
          disabled={confirmLoading}
          {...okButtonProps}
        >
          {okText}
        </Button>
      </>
    );

    // 如果页脚为null，不显示
    if (footer === null) return null;

    // 如果页脚是一个函数，使用渲染函数
    if (typeof footer === 'function') {
      const originCancelBtn = (
        <Button
          variant="secondary"
          onClick={handleCancel}
          {...cancelButtonProps}
        >
          {cancelText}
        </Button>
      );
      
      const originOkBtn = (
        <Button
          variant={okType}
          onClick={handleOk}
          disabled={confirmLoading}
          {...okButtonProps}
        >
          {okText}
        </Button>
      );

      return footer({ originOkBtn, originCancelBtn });
    }

    // 如果页脚是自定义内容，直接返回
    if (footer !== undefined) return footer;

    // 默认页脚
    return defaultFooterButtons;
  };

  // 如果组件未挂载且不强制渲染，则不渲染任何内容
  if (!mountModal && !forceRender) {
    return null;
  }

  // 获取挂载容器
  const getModalContainer = (): HTMLElement | null => {
    if (getContainer === false) return null;
    if (typeof getContainer === 'string') {
      return document.querySelector(getContainer) as HTMLElement;
    }
    if (typeof getContainer === 'function') {
      return getContainer();
    }
    return getContainer || document.body;
  };

  // 渲染关闭按钮
  const renderCloseIcon = () => {
    // 如果closable是对象并且disabled为true，则不渲染关闭按钮
    if (typeof closable === 'object' && closable.disabled) {
      return null;
    }

    // 如果closable是false，则不渲染关闭按钮
    if (closable === false) {
      return null;
    }

    // 获取自定义关闭图标
    const icon = (typeof closable === 'object' && closable.closeIcon) || 
                 closeIcon || 
                 <Icon icon="mdi:close" />;

    return (
      <CloseButton onClick={handleCancel} theme={theme}>
        {icon}
      </CloseButton>
    );
  };

  // 渲染骨架屏
  const renderSkeleton = () => {
    return (
      <ModalSkeleton theme={theme}>
        <div style={{ width: '100%' }}></div>
        <div style={{ width: '80%' }}></div>
        <div style={{ width: '90%' }}></div>
        <div style={{ width: '70%' }}></div>
        <div style={{ width: '60%' }}></div>
      </ModalSkeleton>
    );
  };

  // 渲染模态框内容
  const renderModalContent = () => {
    const modalNode = (
      <ModalContainer
        theme={theme}
        $width={getModalWidth(width)}
        $centered={centered}
        $customStyle={style}
        $closing={isClosing}
        $opening={isOpening}
        className={classNames?.root}
        style={styles?.root}
      >
        {/* 标题 */}
        {title && (
          <ModalHeader theme={theme} className={classNames?.header} style={styles?.header}>
            <ModalTitle theme={theme}>{title}</ModalTitle>
          </ModalHeader>
        )}

        {/* 关闭按钮 */}
        {renderCloseIcon()}

        {/* 内容 */}
        <ModalContent theme={theme} className={classNames?.content} style={styles?.content}>
          {loading ? renderSkeleton() : children}
        </ModalContent>

        {/* 页脚 */}
        {renderFooter() && (
          <ModalFooter theme={theme} className={classNames?.footer} style={styles?.footer}>
            {renderFooter()}
          </ModalFooter>
        )}
      </ModalContainer>
    );

    // 使用自定义渲染函数
    if (modalRender) {
      return modalRender(modalNode);
    }

    return modalNode;
  };

  const container = getModalContainer();
  if (!container) {
    return null;
  }

  // 完整的模态框渲染
  return visible ? (
    <ModalWrapper
      $zIndex={zIndex}
      theme={theme}
      $wrapClassName={wrapClassName}
      className={classNames?.wrapper}
      style={styles?.wrapper}
    >
      {/* 遮罩层 */}
      {mask && (
        <ModalMask
          theme={theme}
          $visible={!isClosing}
          onClick={handleMaskClick}
          className={classNames?.mask}
          style={styles?.mask}
        />
      )}
      {/* 模态框内容 */}
      {renderModalContent()}
    </ModalWrapper>
  ) : null;
}; 