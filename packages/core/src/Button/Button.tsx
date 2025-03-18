import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按钮类型
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * 按钮大小
   * @default 'medium'
   */
  size?: ButtonSize;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 按钮内容
   */
  children: React.ReactNode;
}

// 获取按钮背景色
const getBackgroundColor = (variant: ButtonVariant, theme: Theme) => {
  switch (variant) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    case 'text':
      return 'transparent';
    default:
      return theme.colors.primary;
  }
};

// 获取按钮文字颜色
const getColor = (variant: ButtonVariant, theme: Theme) => {
  switch (variant) {
    case 'primary':
    case 'secondary':
      return theme.colors.text.primary;
    case 'text':
      return theme.colors.primary;
    default:
      return theme.colors.text.primary;
  }
};

// 获取按钮边框
const getBorder = (variant: ButtonVariant, theme: Theme) => {
  switch (variant) {
    case 'primary':
    case 'secondary':
      return 'none';
    case 'text':
      return 'none';
    default:
      return 'none';
  }
};

// 获取按钮悬停背景色
const getHoverBackgroundColor = (variant: ButtonVariant, theme: Theme) => {
  switch (variant) {
    case 'primary':
      return '#1565c0'; // 深一点的主色
    case 'secondary':
      return '#7b1fa2'; // 深一点的次色
    case 'text':
      return 'rgba(25, 118, 210, 0.08)'; // 带透明度的主色
    default:
      return '#1565c0';
  }
};

// 获取按钮内边距
const getPadding = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return '4px 8px';
    case 'medium':
      return '6px 16px';
    case 'large':
      return '8px 22px';
    default:
      return '6px 16px';
  }
};

// 获取按钮字体大小
const getFontSize = (size: ButtonSize, theme: Theme) => {
  switch (size) {
    case 'small':
      return theme.fontSizes.xs;
    case 'medium':
      return theme.fontSizes.sm;
    case 'large':
      return theme.fontSizes.md;
    default:
      return theme.fontSizes.sm;
  }
};

// 样式化按钮组件
const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  theme: Theme;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0;
  border: ${({ $variant, theme }) => getBorder($variant, theme)};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ $size }) => getPadding($size)};
  background-color: ${({ $variant, theme }) => getBackgroundColor($variant, theme)};
  color: ${({ $variant, theme }) => getColor($variant, theme)};
  font-family: inherit;
  font-size: ${({ $size, theme }) => getFontSize($size, theme)};
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02em;
  min-width: 64px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  
  &:hover {
    background-color: ${({ $variant, theme }) => getHoverBackgroundColor($variant, theme)};
  }
  
  &:disabled {
    color: ${({ theme }) => theme.colors.text.disabled};
    background-color: ${({ $variant }) => $variant === 'text' ? 'transparent' : 'rgba(0, 0, 0, 0.12)'};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

/**
 * 按钮组件
 * @param props 组件属性
 * @returns 按钮组件
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <StyledButton
      $variant={variant}
      $size={size}
      disabled={disabled}
      theme={theme}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}; 