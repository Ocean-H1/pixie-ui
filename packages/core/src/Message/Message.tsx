import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  createContext,
  useContext,
} from 'react';
import ReactDOM from 'react-dom/client';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import { Theme, ThemeProvider, useTheme } from '@pixie-ui/theme';
import { isBrowser } from '@pixie-ui/utils';
import { Icon } from '../Icon';

// 消息类型
export type MessageType = 'success' | 'error' | 'info' | 'warning' | 'loading';

// 消息配置接口
export interface MessageConfig {
  /**
   * 消息内容
   */
  content: React.ReactNode;
  /**
   * 自动关闭的延时，单位秒
   * @default 3
   */
  duration?: number;
  /**
   * 配置渲染节点的输出位置
   * @default () => document.body
   */
  getContainer?: () => HTMLElement;
  /**
   * 消息节点的 className 前缀
   * @default 'pixie-message'
   */
  prefixCls?: string;
  /**
   * 最大显示数，超过限制时，最早的消息会被自动关闭
   */
  maxCount?: number;
  /**
   * 消息距离顶部的位置
   * @default 8
   */
  top?: number | string;
  /**
   * 消息类型
   * @default 'info'
   */
  type?: MessageType;
  /**
   * 自定义图标
   */
  icon?: React.ReactNode;
  /**
   * 消息关闭的回调函数
   */
  onClose?: () => void;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 唯一标识，用于更新消息
   */
  key?: string | number;
}

// 全局配置类型
interface GlobalConfig {
  top?: number | string;
  maxCount?: number;
  getContainer?: () => HTMLElement;
  duration?: number;
}

// 消息实例
export interface MessageInstance {
  success: (content: React.ReactNode, duration?: number, onClose?: () => void) => Promise<void>;
  error: (content: React.ReactNode, duration?: number, onClose?: () => void) => Promise<void>;
  info: (content: React.ReactNode, duration?: number, onClose?: () => void) => Promise<void>;
  warning: (content: React.ReactNode, duration?: number, onClose?: () => void) => Promise<void>;
  loading: (content: React.ReactNode, duration?: number, onClose?: () => void) => Promise<void>;
  open: (config: MessageConfig) => Promise<void>;
  destroy: () => void;
  update: (key: string | number, config: Partial<MessageConfig>) => void;
  config: (options: Partial<GlobalConfig>) => void;
  useMessage: () => [MessageInstance, React.ReactElement];
}

// 消息队列项
interface MessageItem {
  key: string | number;
  config: MessageConfig;
  promise: Promise<void>;
  resolve: () => void;
}

// 消息容器属性
interface MessageContainerProps {
  prefixCls: string;
  maxCount?: number;
  top?: number | string;
  getContainer?: () => HTMLElement;
}

// 消息项属性
interface MessageItemProps {
  theme: Theme;
  $type: MessageType;
  className?: string;
}

// 创建消息上下文
const MessageContext = createContext<MessageInstance | null>(null);

// 获取渲染容器
const getContainer = (getPopupContainer?: () => HTMLElement): HTMLElement => {
  if (!isBrowser()) return document.body;

  if (getPopupContainer) {
    return getPopupContainer();
  }

  return document.body;
};

// 创建唯一键
const createUniqueKey = (): string => {
  return `message-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

// 图标类型映射
const iconMap: Record<MessageType, string> = {
  success: 'mdi:check-circle',
  error: 'mdi:alert-circle',
  info: 'mdi:information',
  warning: 'mdi:alert',
  loading: 'mdi:loading',
};

// 获取图标颜色
const getIconColor = (type: MessageType, theme: Theme): string => {
  switch (type) {
    case 'success':
      return theme.colors.success;
    case 'error':
      return theme.colors.error;
    case 'warning':
      return theme.colors.warning;
    case 'info':
      return theme.colors.info;
    case 'loading':
      return theme.colors.primary;
    default:
      return theme.colors.info;
  }
};

// 样式化的消息容器
const MessageContainer = styled.div<{ $top?: string | number }>`
  position: fixed;
  top: ${({ $top }) => (typeof $top === 'number' ? `${$top}px` : $top || '8px')};
  left: 0;
  z-index: 1010;
  width: 100%;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 样式化的消息项
const MessageItemStyled = styled.div<MessageItemProps>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  pointer-events: all;
  display: flex;
  align-items: center;
  max-width: 80%;
  min-width: 150px;
  animation: messageShow 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  @keyframes messageShow {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .pixie-message-icon {
    margin-right: ${({ theme }) => theme.spacing.xs};
    color: ${({ $type, theme }) => getIconColor($type, theme)};
  }

  .pixie-message-content {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &.pixie-message-closing {
    animation: messageHide 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    animation-fill-mode: forwards;
  }

  @keyframes messageHide {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }

  ${({ $type }) =>
    $type === 'loading' &&
    `
    .pixie-message-icon {
      animation: loadingRotate 1s linear infinite;
    }
    
    @keyframes loadingRotate {
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;

// 消息项组件
const MessageItem: React.FC<{
  config: MessageConfig;
  onClose: () => void;
}> = ({ config, onClose }) => {
  const theme = useTheme();
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout>();

  const handleClose = useCallback(() => {
    if (closing) return;

    setClosing(true);
    setTimeout(() => {
      onClose();
      config.onClose?.();
    }, 300); // 动画持续时间
  }, [closing, onClose, config]);

  // 设置自动关闭定时器
  useEffect(() => {
    const { duration = 3 } = config;

    // loading类型或duration为0时不自动关闭
    if (config.type !== 'loading' && duration !== 0) {
      closeTimer.current = setTimeout(() => {
        handleClose();
      }, duration * 1000);
    }

    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, [config, handleClose]);

  // 获取显示的图标
  const icon = useMemo(() => {
    if (config.icon !== undefined) {
      return config.icon;
    }
    return <Icon className="pixie-message-icon" icon={iconMap[config.type || 'info']} />;
  }, [config.icon, config.type]);

  const prefixCls = config.prefixCls || 'pixie-message';

  return (
    <MessageItemStyled
      theme={theme}
      $type={config.type || 'info'}
      style={config.style}
      className={`${prefixCls}-item ${closing ? `${prefixCls}-closing` : ''} ${config.className || ''}`}
    >
      {icon}
      <span className={`${prefixCls}-content`}>{config.content}</span>
    </MessageItemStyled>
  );
};

// 消息容器组件
const MessageContainerComponent: React.FC<
  MessageContainerProps & {
    messages?: MessageItem[];
    onRemove?: (key: string | number) => void;
    onUpdate?: (key: string | number, config: Partial<MessageConfig>) => void;
  }
> = ({
  prefixCls,
  top,
  getContainer: customGetContainer,
  messages: externalMessages,
  onRemove: externalRemove,
  onUpdate: externalUpdate,
}) => {
  const [messages, setMessages] = useState<MessageItem[]>([]);

  // 使用外部消息队列或内部状态
  const actualMessages = externalMessages || messages;

  // 移除消息
  const remove = useCallback(
    (key: string | number) => {
      if (externalRemove) {
        externalRemove(key);
        return;
      }

      setMessages((prevMessages) => {
        const targetIndex = prevMessages.findIndex((item) => item.key === key);
        if (targetIndex === -1) return prevMessages;

        const targetItem = prevMessages[targetIndex];
        targetItem.resolve(); // 解决promise

        const newMessages = [...prevMessages];
        newMessages.splice(targetIndex, 1);
        return newMessages;
      });
    },
    [externalRemove],
  );

  if (actualMessages.length === 0) {
    return null;
  }

  return createPortal(
    <MessageContainer $top={top} className={`${prefixCls}-container`}>
      {actualMessages.map((item) => (
        <MessageItem key={item.key} config={item.config} onClose={() => remove(item.key)} />
      ))}
    </MessageContainer>,
    getContainer(customGetContainer),
  );
};

// 创建一个全局单例
let globalInstance: MessageInstance | null = null;
let globalConfig: GlobalConfig = {
  top: 8,
  maxCount: undefined,
  getContainer: undefined,
  duration: 3,
};

// 获取全局配置
const getGlobalConfig = () => {
  return {
    prefixCls: 'pixie-message',
    ...globalConfig,
  };
};

// 创建单例
const getInstance = (): MessageInstance => {
  if (globalInstance) {
    return globalInstance;
  }

  const container = document.createElement('div');
  document.body.appendChild(container);

  // React 18 的 root 实例
  const root = ReactDOM.createRoot(container);

  const unmount = () => {
    if (container && container.parentNode) {
      root.unmount();
      container.parentNode.removeChild(container);
    }
  };

  // 消息队列
  let messages: MessageItem[] = [];

  // 渲染消息
  const renderMessages = () => {
    const config = getGlobalConfig();
    root.render(
      // 避免 Portal 渲染导致的主题上下文丢失
      <ThemeProvider>
        <MessageContainerComponent
          {...config}
          messages={messages}
          onRemove={removeMessage}
          onUpdate={updateMessage}
        />
        ,
      </ThemeProvider>,
    );
  };

  // 添加消息
  const addMessage = (cfg: MessageConfig): Promise<void> => {
    const key = cfg.key || createUniqueKey();
    let resolvePromise: () => void = () => {};

    const promise = new Promise<void>((resolve) => {
      resolvePromise = resolve;
    });

    // 配置最大数量限制
    if (globalConfig.maxCount && messages.length >= globalConfig.maxCount) {
      messages = messages.slice(-globalConfig.maxCount + 1);
    }

    messages.push({
      key,
      config: { ...cfg, key },
      promise,
      resolve: resolvePromise,
    });

    renderMessages();
    return promise;
  };

  // 移除消息
  const removeMessage = (key: string | number) => {
    const index = messages.findIndex((msg) => msg.key === key);
    if (index !== -1) {
      // 解析Promise，表示消息已关闭
      messages[index].resolve();
      messages.splice(index, 1);
      renderMessages();
    }
  };

  // 更新消息
  const updateMessage = (key: string | number, cfg: Partial<MessageConfig>) => {
    const index = messages.findIndex((msg) => msg.key === key);
    if (index !== -1) {
      messages[index].config = { ...messages[index].config, ...cfg };
      renderMessages();
    }
  };

  // 基础消息方法
  const baseMessage = {
    open: (cfg: MessageConfig): Promise<void> => {
      return addMessage(cfg);
    },
    destroy: () => {
      // 解析所有Promise
      messages.forEach((msg) => msg.resolve());
      messages = [];
      unmount();
      globalInstance = null;
    },
    update: (key: string | number, cfg: Partial<MessageConfig>) => {
      updateMessage(key, cfg);
    },
  };

  // 完整的消息实例
  const messageInstance: MessageInstance = {
    ...baseMessage,
    success: (content, duration, onClose) =>
      baseMessage.open({ content, type: 'success', duration, onClose }),
    error: (content, duration, onClose) =>
      baseMessage.open({ content, type: 'error', duration, onClose }),
    info: (content, duration, onClose) =>
      baseMessage.open({ content, type: 'info', duration, onClose }),
    warning: (content, duration, onClose) =>
      baseMessage.open({ content, type: 'warning', duration, onClose }),
    loading: (content, duration, onClose) =>
      baseMessage.open({ content, type: 'loading', duration, onClose }),
    config: () => {}, // 将在后面重新赋值
    useMessage: () => [messageInstance, <React.Fragment />], // 将在后面重新赋值
  };

  globalInstance = messageInstance;

  return messageInstance;
};

// 统一消息API
const Message = getInstance();

// 配置方法
Message.config = (options: Partial<GlobalConfig>) => {
  if (options.maxCount !== undefined) {
    globalConfig.maxCount = options.maxCount;
  }
  if (options.top !== undefined) {
    globalConfig.top = options.top;
  }
  if (options.getContainer !== undefined) {
    globalConfig.getContainer = options.getContainer;
  }
  if (options.duration !== undefined) {
    globalConfig.duration = options.duration;
  }
};

// 创建useMessage Hook
const useMessage = (): [MessageInstance, React.ReactElement] => {
  const [messageContextHolder, setMessageContextHolder] = useState<React.ReactElement | null>(null);
  const messageContext = useContext(MessageContext);

  // 消息实例
  const [instance] = useState<MessageInstance>(() => {
    if (messageContext) {
      return messageContext;
    }

    // 创建holder
    const holderRef = React.createRef<HTMLDivElement>();

    // 创建holder元素
    setMessageContextHolder(<div ref={holderRef} />);

    // 返回消息实例
    return {
      ...Message,
      open: (cfg: MessageConfig) => {
        if (!holderRef.current) return Promise.resolve();

        const mergedConfig = { ...cfg };
        if (!mergedConfig.getContainer && holderRef.current) {
          mergedConfig.getContainer = () => holderRef.current as HTMLElement;
        }

        return Message.open(mergedConfig);
      },
    };
  });

  if (!messageContextHolder) {
    return [instance, <React.Fragment />];
  }

  return [instance, messageContextHolder];
};

// 添加 useMessage 到 message 对象上
Message.useMessage = useMessage;

export { Message, useMessage, MessageContext };
