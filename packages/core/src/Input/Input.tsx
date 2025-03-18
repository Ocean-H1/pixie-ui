import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 输入框大小
   * @default 'medium'
   */
  size?: InputSize;
  /**
   * 是否为错误状态
   * @default false
   */
  error?: boolean;
  /**
   * 错误提示信息
   */
  errorMessage?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
}

// 获取输入框高度
const getHeight = (size: InputSize) => {
  switch (size) {
    case 'small':
      return '32px';
    case 'medium':
      return '40px';
    case 'large':
      return '48px';
    default:
      return '40px';
  }
};

// 获取输入框内边距
const getPadding = (size: InputSize) => {
  switch (size) {
    case 'small':
      return '0 8px';
    case 'medium':
      return '0 12px';
    case 'large':
      return '0 16px';
    default:
      return '0 12px';
  }
};

// 获取输入框字体大小
const getFontSize = (size: InputSize, theme: Theme) => {
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

// 样式化输入框容器
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// 样式化输入框
const StyledInput = styled.input<{
  $size: InputSize;
  $error: boolean;
  theme: Theme;
}>`
  box-sizing: border-box;
  width: 100%;
  height: ${({ $size }) => getHeight($size)};
  padding: ${({ $size }) => getPadding($size)};
  font-size: ${({ $size, theme }) => getFontSize($size, theme)};
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ $error, theme }) => ($error ? theme.colors.error : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radii.sm};
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  
  &:focus {
    border-color: ${({ $error, theme }) => ($error ? theme.colors.error : theme.colors.primary)};
    box-shadow: 0 0 0 2px ${({ $error, theme }) => 
      $error 
        ? `${theme.colors.error}33` // 添加20%透明度
        : `${theme.colors.primary}33`
    };
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text.disabled};
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.border};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

// 样式化错误信息
const ErrorMessage = styled.div<{ theme: Theme }>`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

/**
 * 输入框组件
 * @param props 组件属性
 * @returns 输入框组件
 */
export const Input: React.FC<InputProps> = ({
  size = 'medium',
  error = false,
  errorMessage,
  disabled = false,
  ...rest
}) => {
  const theme = useTheme();
  
  return (
    <InputContainer>
      <StyledInput
        $size={size}
        $error={error}
        disabled={disabled}
        theme={theme}
        {...rest}
      />
      {error && errorMessage && <ErrorMessage theme={theme}>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
}; 