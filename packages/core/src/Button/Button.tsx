import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'danger' | 'warning' | 'success' | 'info' | string;

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
   * 自定义背景颜色
   * 可以是预定义的颜色名称（'danger', 'warning', 'success', 'info'）或自定义颜色值
   */
  color?: ButtonColor;
  /**
   * 按钮内容
   */
  children: React.ReactNode;
}

// 获取预定义颜色值
const getPredefinedColor = (color: ButtonColor, theme: Theme): string => {
  switch (color) {
    case 'danger':
      return theme.colors.error;
    case 'warning':
      return theme.colors.warning;
    case 'success':
      return theme.colors.success;
    case 'info':
      return theme.colors.info;
    default:
      return color; // 如果是自定义颜色值，直接返回
  }
};

// 获取按钮背景色
const getBackgroundColor = (variant: ButtonVariant, theme: Theme, customColor?: ButtonColor) => {
  // 如果提供了自定义颜色，优先使用自定义颜色
  if (customColor) {
    return getPredefinedColor(customColor, theme);
  }
  
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
const getColor = (variant: ButtonVariant, theme: Theme, customColor?: ButtonColor) => {
  switch (variant) {
    case 'primary':
    case 'secondary':
      return theme.colors.text.primary;
    case 'text':
      return customColor ? getPredefinedColor(customColor, theme) : theme.colors.primary;
    default:
      return theme.colors.text.primary;
  }
};

// 获取按钮边框
const getBorder = (variant: ButtonVariant) => {
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
const getHoverBackgroundColor = (variant: ButtonVariant, theme: Theme, customColor?: ButtonColor) => {
  // 如果提供了自定义颜色，生成悬停色（稍微变暗）
  if (customColor) {
    const colorValue = getPredefinedColor(customColor, theme);
    // 简单的颜色变暗逻辑，可以通过 CSS 变量或更复杂的颜色处理库来实现
    return colorValue;
  }
  
  switch (variant) {
    case 'primary':
      return theme.colors.hover.primary;
    case 'secondary':
      return theme.colors.hover.secondary;
    case 'text':
      return theme.colors.hover.text;
    default:
      return theme.colors.hover.primary;
  }
};

// 获取按钮内边距
const getPadding = (size: ButtonSize, theme: Theme) => {
  switch (size) {
    case 'small':
      return `${theme.spacing.xs} ${theme.spacing.sm}`;
    case 'medium':
      return `${theme.spacing.xs} ${theme.spacing.md}`;
    case 'large':
      return `${theme.spacing.sm} ${theme.spacing.lg}`;
    default:
      return `${theme.spacing.xs} ${theme.spacing.md}`;
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
  $customColor?: ButtonColor;
  theme: Theme;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0;
  border: ${({ $variant }) => getBorder($variant)};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ $size, theme }) => getPadding($size, theme)};
  background-color: ${({ $variant, theme, $customColor }) => getBackgroundColor($variant, theme, $customColor)};
  color: ${({ $variant, theme, $customColor }) => getColor($variant, theme, $customColor)};
  font-family: inherit;
  font-size: ${({ $size, theme }) => getFontSize($size, theme)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacing.wide};
  min-width: 64px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  
  &:hover {
    background-color: ${({ $variant, theme, $customColor }) => getHoverBackgroundColor($variant, theme, $customColor)};
    ${({ $customColor }) => $customColor && `
      filter: brightness(0.9);
    `}
  }
  
  &:disabled {
    color: ${({ theme }) => theme.colors.text.disabled};
    background-color: ${({ $variant, theme }) => $variant === 'text' ? 'transparent' : theme.colors.disabled.background};
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
  color,
  children,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $customColor={color}
      disabled={disabled}
      theme={theme}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}; 