import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

export interface CopyableProps {
  /**
   * 复制的文本
   */
  text?: string;
  /**
   * 复制成功的回调函数
   */
  onCopy?: () => void;
  /**
   * 自定义复制图标
   */
  icon?: React.ReactNode;
  /**
   * 自定义复制图标与文字的间距
   * @default '4px'
   */
  iconMarginLeft?: string;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

const CopyableWrapper = styled.span<{ theme: Theme }>`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

const CopyButton = styled.span<{ theme: Theme }>`
  margin-left: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: color 0.3s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// 简单的复制图标组件
const CopyIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="1em" 
    height="1em" 
    fill="currentColor"
  >
    <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" />
  </svg>
);

// 复制成功图标组件
const CopySuccessIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="1em" 
    height="1em" 
    fill="currentColor"
  >
    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" />
  </svg>
);

/**
 * Copyable 组件 - 为文本提供复制功能
 */
export const Copyable: React.FC<CopyableProps> = ({
  text,
  onCopy,
  icon,
  iconMarginLeft = '4px',
  children,
}) => {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (text) {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        if (onCopy) {
          onCopy();
        }
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      } catch (error) {
        console.error('复制失败:', error);
      }
    }
  };

  return (
    <CopyableWrapper theme={theme}>
      {children}
      <CopyButton 
        theme={theme} 
        onClick={handleCopy}
        style={{ marginLeft: iconMarginLeft }}
      >
        {icon ? icon : copied ? <CopySuccessIcon /> : <CopyIcon />}
      </CopyButton>
    </CopyableWrapper>
  );
}; 