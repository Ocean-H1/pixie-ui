import React, { useState, useRef, useEffect, CSSProperties, ReactElement, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { isBrowser, addEvent, removeEvent } from '@pixie-ui/utils';

export type TooltipPlacement = 
  | 'top' 
  | 'left' 
  | 'right' 
  | 'bottom' 
  | 'topLeft' 
  | 'topRight' 
  | 'bottomLeft' 
  | 'bottomRight' 
  | 'leftTop' 
  | 'leftBottom' 
  | 'rightTop' 
  | 'rightBottom';

export interface TooltipProps {
  /**
   * 提示文字
   */
  title: React.ReactNode;
  /**
   * 子元素
   */
  children: ReactElement;
  /**
   * 气泡框位置
   * @default 'top'
   */
  placement?: TooltipPlacement;
  /**
   * 背景颜色
   */
  color?: string;
  /**
   * 触发行为
   * @default 'hover'
   */
  trigger?: 'hover' | 'focus' | 'click' | 'contextMenu' | ('hover' | 'focus' | 'click' | 'contextMenu')[];
  /**
   * 默认是否显示
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * 用于手动控制浮层显隐
   */
  open?: boolean;
  /**
   * 显示隐藏的回调
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * 鼠标移入后延时多少才显示，单位：秒
   * @default 0.1
   */
  mouseEnterDelay?: number;
  /**
   * 鼠标移出后延时多少才隐藏，单位：秒
   * @default 0.1
   */
  mouseLeaveDelay?: number;
  /**
   * 浮层渲染父节点
   * @default () => document.body
   */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  /**
   * 气泡被遮挡时自动调整位置
   * @default true
   */
  autoAdjustOverflow?: boolean;
  /**
   * 自定义箭头
   * @default true
   */
  arrow?: boolean | { pointAtCenter: boolean };
  /**
   * z-index
   */
  zIndex?: number;
  /**
   * 该值将合并到 placement 的配置中
   */
  align?: object;
  /**
   * 关闭后是否销毁Tooltip
   * @default false
   */
  destroyTooltipOnHide?: boolean;
  /**
   * 默认情况下，Tooltip 在关闭时会缓存内容。设置该属性后会始终保持更新
   * @default false
   */
  fresh?: boolean;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  /**
   * 自定义类名
   */
  className?: string;
}

interface TooltipContentProps {
  theme: Theme;
  $zIndex?: number;
  $placement: TooltipPlacement;
  $color?: string;
  $arrow: boolean | { pointAtCenter: boolean };
  $visible: boolean;
  $style?: CSSProperties;
  className?: string;
}

interface AlignOffset {
  offsetX?: number;
  offsetY?: number;
  targetOffset?: number;
  points?: [string, string];
}

const TooltipContentWrapper = styled.div<TooltipContentProps>`
  position: fixed;
  z-index: ${({ $zIndex }) => $zIndex || 1000};
  max-width: 250px;
  min-height: 32px;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s, visibility 0.3s;
  pointer-events: none;
`;

const TooltipContent = styled.div<TooltipContentProps>`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  background-color: ${({ $color, theme }) => $color || theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  word-wrap: break-word;
  box-sizing: border-box;
  ${({ $style }) => $style && Object.entries($style).map(([key, value]) => `${key}: ${value};`).join(' ')}
`;

const TooltipArrow = styled.div<TooltipContentProps>`
  width: 8px;
  height: 8px;
  background-color: ${({ $color, theme }) => $color || theme.colors.background.paper};
  position: absolute;
  transform: rotate(45deg);
  
  // 根据不同的placement设置箭头位置
  ${({ $placement }) => {
    if ($placement.startsWith('top')) {
      return `
        bottom: -4px;
        ${$placement === 'top' ? 'left: calc(50% - 4px);' : 
          $placement === 'topLeft' ? 'left: 12px;' : 
          'right: 12px;'}
      `;
    } else if ($placement.startsWith('bottom')) {
      return `
        top: -4px;
        ${$placement === 'bottom' ? 'left: calc(50% - 4px);' : 
          $placement === 'bottomLeft' ? 'left: 12px;' : 
          'right: 12px;'}
      `;
    } else if ($placement.startsWith('left')) {
      return `
        right: -4px;
        ${$placement === 'left' ? 'top: calc(50% - 4px);' : 
          $placement === 'leftTop' ? 'top: 12px;' : 
          'bottom: 12px;'}
      `;
    } else if ($placement.startsWith('right')) {
      return `
        left: -4px;
        ${$placement === 'right' ? 'top: calc(50% - 4px);' : 
          $placement === 'rightTop' ? 'top: 12px;' : 
          'bottom: 12px;'}
      `;
    }
    return '';
  }}
`;

// 获取容器元素
const getContainer = (getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement, triggerNode?: HTMLElement): HTMLElement => {
  if (!isBrowser()) return document.body;
  
  if (getPopupContainer && triggerNode) {
    return getPopupContainer(triggerNode);
  }
  
  return document.body;
};

// 包装子元素以处理ref
const WrapperComponent: React.FC<{
  children: ReactElement;
  onRefChange?: (node: HTMLElement | null) => void;
  [key: string]: any;
}> = ({ children, onRefChange, ...restProps }) => {
  const setRef = useCallback((node: HTMLElement | null) => {
    if (onRefChange && node) {
      onRefChange(node);
    }
  }, [onRefChange]);

  // 提取事件处理器，不要将所有属性传递给子组件
  const {
    onMouseEnter,
    onMouseLeave,
    onClick,
    onContextMenu,
    onFocus,
    onBlur,
  } = restProps;

  // 使用span包装，确保能获取到ref
  return (
    <span 
      ref={setRef} 
      style={{ display: 'inline-block', cursor: 'inherit' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onContextMenu={onContextMenu}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {/* 不传递任何额外props给子元素，保留原样 */}
      {children}
    </span>
  );
};

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  placement = 'top',
  color,
  trigger = 'hover',
  defaultOpen = false,
  open,
  onOpenChange,
  mouseEnterDelay = 0.1,
  mouseLeaveDelay = 0.1,
  getPopupContainer,
  autoAdjustOverflow = true,
  arrow = true,
  zIndex,
  align,
  destroyTooltipOnHide = false,
  fresh = false,
  style,
  className,
}) => {
  const theme = useTheme();
  const [visible, setVisible] = useState(open !== undefined ? open : defaultOpen);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const enterTimer = useRef<NodeJS.Timeout | null>(null);
  const leaveTimer = useRef<NodeJS.Timeout | null>(null);
  
  const triggers = Array.isArray(trigger) ? trigger : [trigger];
  
  // 处理显示状态改变
  const handleVisibleChange = (nextVisible: boolean) => {
    if (open === undefined) {
      setVisible(nextVisible);
    }
    
    onOpenChange?.(nextVisible);
  };
  
  // 清除定时器
  const clearTimers = () => {
    if (enterTimer.current) {
      clearTimeout(enterTimer.current);
      enterTimer.current = null;
    }
    
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  };
  
  // 处理鼠标移入
  const handleMouseEnter = () => {
    if (!triggers.includes('hover')) return;
    
    clearTimers();
    
    enterTimer.current = setTimeout(() => {
      handleVisibleChange(true);
    }, mouseEnterDelay * 1000);
  };
  
  // 处理鼠标移出
  const handleMouseLeave = () => {
    if (!triggers.includes('hover')) return;
    
    clearTimers();
    
    leaveTimer.current = setTimeout(() => {
      handleVisibleChange(false);
    }, mouseLeaveDelay * 1000);
  };
  
  // 处理点击
  const handleClick = (e: React.MouseEvent) => {
    if (!triggers.includes('click')) return;
    
    handleVisibleChange(!visible);
    e.stopPropagation();
  };
  
  // 处理右键点击
  const handleContextMenu = (e: React.MouseEvent) => {
    if (!triggers.includes('contextMenu')) return;
    
    e.preventDefault();
    handleVisibleChange(true);
  };
  
  // 处理获取焦点
  const handleFocus = () => {
    if (!triggers.includes('focus')) return;
    
    handleVisibleChange(true);
  };
  
  // 处理失去焦点
  const handleBlur = () => {
    if (!triggers.includes('focus')) return;
    
    handleVisibleChange(false);
  };
  
  // 监听窗口点击事件，点击外部关闭提示
  useEffect(() => {
    if (!isBrowser() || !visible || !triggers.includes('click')) return;
    
    const handleWindowClick = (e: Event) => {
      if (
        triggerRef.current && 
        !triggerRef.current.contains(e.target as Node) &&
        tooltipRef.current && 
        !tooltipRef.current.contains(e.target as Node)
      ) {
        handleVisibleChange(false);
      }
    };
    
    addEvent(window, 'click', handleWindowClick);
    
    return () => {
      removeEvent(window, 'click', handleWindowClick);
    };
  }, [visible, triggers]);
  
  // 监听窗口滚动和大小改变事件，重新定位提示
  useEffect(() => {
    if (!isBrowser() || !visible) return;
    
    const updatePosition = () => {
      if (triggerRef.current && tooltipRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        
        // 根据placement计算tooltip的位置
        let top = 0;
        let left = 0;
        
        switch (placement) {
          case 'top':
            top = triggerRect.top - tooltipRef.current.offsetHeight - 10;
            left = triggerRect.left + (triggerRect.width / 2) - (tooltipRef.current.offsetWidth / 2);
            break;
          case 'topLeft':
            top = triggerRect.top - tooltipRef.current.offsetHeight - 10;
            left = triggerRect.left;
            break;
          case 'topRight':
            top = triggerRect.top - tooltipRef.current.offsetHeight - 10;
            left = triggerRect.right - tooltipRef.current.offsetWidth;
            break;
          case 'bottom':
            top = triggerRect.bottom + 10;
            left = triggerRect.left + (triggerRect.width / 2) - (tooltipRef.current.offsetWidth / 2);
            break;
          case 'bottomLeft':
            top = triggerRect.bottom + 10;
            left = triggerRect.left;
            break;
          case 'bottomRight':
            top = triggerRect.bottom + 10;
            left = triggerRect.right - tooltipRef.current.offsetWidth;
            break;
          case 'left':
            top = triggerRect.top + (triggerRect.height / 2) - (tooltipRef.current.offsetHeight / 2);
            left = triggerRect.left - tooltipRef.current.offsetWidth - 10;
            break;
          case 'leftTop':
            top = triggerRect.top;
            left = triggerRect.left - tooltipRef.current.offsetWidth - 10;
            break;
          case 'leftBottom':
            top = triggerRect.bottom - tooltipRef.current.offsetHeight;
            left = triggerRect.left - tooltipRef.current.offsetWidth - 10;
            break;
          case 'right':
            top = triggerRect.top + (triggerRect.height / 2) - (tooltipRef.current.offsetHeight / 2);
            left = triggerRect.right + 10;
            break;
          case 'rightTop':
            top = triggerRect.top;
            left = triggerRect.right + 10;
            break;
          case 'rightBottom':
            top = triggerRect.bottom - tooltipRef.current.offsetHeight;
            left = triggerRect.right + 10;
            break;
          default:
            break;
        }
        
        // 应用自定义对齐配置
        if (align) {
          const alignOffset = align as AlignOffset;
          if (alignOffset.offsetX !== undefined) {
            left += alignOffset.offsetX;
          }
          if (alignOffset.offsetY !== undefined) {
            top += alignOffset.offsetY;
          }
        }
        
        // 自动调整溢出
        if (autoAdjustOverflow) {
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          
          // 检查水平方向溢出
          if (left < 0) {
            left = 0;
          } else if (left + tooltipRef.current.offsetWidth > windowWidth) {
            left = windowWidth - tooltipRef.current.offsetWidth;
          }
          
          // 检查垂直方向溢出
          if (top < 0) {
            // 如果顶部溢出，切换到底部
            if (placement.startsWith('top')) {
              top = triggerRect.bottom + 10;
            } else {
              top = 0;
            }
          } else if (top + tooltipRef.current.offsetHeight > windowHeight) {
            // 如果底部溢出，切换到顶部
            if (placement.startsWith('bottom')) {
              top = triggerRect.top - tooltipRef.current.offsetHeight - 10;
            } else {
              top = windowHeight - tooltipRef.current.offsetHeight;
            }
          }
        }
        
        // 直接设置样式，而不是使用position状态
        tooltipRef.current.style.top = `${top}px`;
        tooltipRef.current.style.left = `${left}px`;
      }
    };
    
    // 初始渲染后延迟执行一次，确保正确计算尺寸
    const timer = setTimeout(updatePosition, 0);
    
    addEvent(window, 'scroll', updatePosition);
    addEvent(window, 'resize', updatePosition);
    
    return () => {
      clearTimeout(timer);
      removeEvent(window, 'scroll', updatePosition);
      removeEvent(window, 'resize', updatePosition);
    };
  }, [visible, placement, autoAdjustOverflow, align]);
  
  // 监听 open 属性变化
  useEffect(() => {
    if (open !== undefined) {
      setVisible(open);
    }
  }, [open]);
  
  // 组件挂载后设置状态
  useEffect(() => {
    setMounted(true);
    
    return () => {
      clearTimers();
    };
  }, []);
  
  // 构建事件处理器
  const eventHandlers = {
    onMouseEnter: (e: React.MouseEvent) => {
      handleMouseEnter();
      // 调用原始事件处理器
      if (children.props.onMouseEnter) {
        children.props.onMouseEnter(e);
      }
    },
    onMouseLeave: (e: React.MouseEvent) => {
      handleMouseLeave();
      if (children.props.onMouseLeave) {
        children.props.onMouseLeave(e);
      }
    },
    onClick: (e: React.MouseEvent) => {
      handleClick(e);
      if (children.props.onClick) {
        children.props.onClick(e);
      }
    },
    onContextMenu: (e: React.MouseEvent) => {
      handleContextMenu(e);
      if (children.props.onContextMenu) {
        children.props.onContextMenu(e);
      }
    },
    onFocus: (e: React.FocusEvent) => {
      handleFocus();
      if (children.props.onFocus) {
        children.props.onFocus(e);
      }
    },
    onBlur: (e: React.FocusEvent) => {
      handleBlur();
      if (children.props.onBlur) {
        children.props.onBlur(e);
      }
    },
  };
  
  // 设置ref的回调
  const handleRefChange = useCallback((node: HTMLElement | null) => {
    triggerRef.current = node;
  }, []);
  
  // 生成触发元素
  const triggerElement = (
    <WrapperComponent
      onRefChange={handleRefChange}
      {...eventHandlers}
    >
      {children}
    </WrapperComponent>
  );
  
  // 生成tooltip内容
  const tooltipContent = (
    <TooltipContentWrapper
      ref={tooltipRef}
      theme={theme}
      $zIndex={zIndex}
      $placement={placement}
      $color={color}
      $arrow={arrow}
      $visible={visible}
      style={style}
      className={className}
    >
      <TooltipContent
        theme={theme}
        $zIndex={zIndex}
        $placement={placement}
        $color={color}
        $arrow={arrow}
        $visible={visible}
      >
        {title}
        {arrow && (
          <TooltipArrow
            theme={theme}
            $zIndex={zIndex}
            $placement={placement}
            $color={color}
            $arrow={arrow}
            $visible={visible}
          />
        )}
      </TooltipContent>
    </TooltipContentWrapper>
  );
  
  // 渲染内容
  const renderTooltip = () => {
    if ((!mounted && !visible) || (destroyTooltipOnHide && !visible)) {
      return null;
    }
    
    // 当fresh为true或可见状态时，都需要渲染内容
    if (fresh || visible) {
      const container = getContainer(getPopupContainer, triggerRef.current as HTMLElement);
      
      return ReactDOM.createPortal(tooltipContent, container);
    }
    
    return null;
  };
  
  return (
    <>
      {triggerElement}
      {renderTooltip()}
    </>
  );
}; 