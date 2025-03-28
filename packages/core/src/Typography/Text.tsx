import React from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { Copyable, CopyableProps } from './Copyable';

export type TextType = 'secondary' | 'success' | 'warning' | 'danger' | undefined;

export interface TextProps {
  /**
   * 添加代码样式
   * @default false
   */
  code?: boolean;
  /**
   * 是否可拷贝，为对象时可进行各种自定义
   * @default false
   */
  copyable?: boolean | CopyableProps;
  /**
   * 添加删除线样式
   * @default false
   */
  delete?: boolean;
  /**
   * 禁用文本
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否可编辑，为对象时可对编辑进行控制
   * @default false
   */
  editable?: boolean | EditableConfig;
  /**
   * 自动溢出省略
   * @default false
   */
  ellipsis?: boolean | Omit<EllipsisConfig, 'expandable' | 'rows' | 'onExpand'>;
  /**
   * 添加键盘样式
   * @default false
   */
  keyboard?: boolean;
  /**
   * 添加标记样式
   * @default false
   */
  mark?: boolean;
  /**
   * 点击 Text 时的回调
   */
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  /**
   * 是否加粗
   * @default false
   */
  strong?: boolean;
  /**
   * 是否斜体
   * @default false
   */
  italic?: boolean;
  /**
   * 文本类型
   */
  type?: TextType;
  /**
   * 添加下划线样式
   * @default false
   */
  underline?: boolean;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

// 可编辑文本的配置接口
interface EditableConfig {
  editing?: boolean;
  onStart?: () => void;
  onChange?: (value: string) => void;
  onCancel?: () => void;
  onEnd?: () => void;
}

// 文本省略的配置接口
interface EllipsisConfig {
  rows?: number;
  expandable?: boolean;
  suffix?: string;
  symbol?: React.ReactNode;
  tooltip?: boolean | React.ReactNode;
  onExpand?: (event: React.MouseEvent<HTMLElement>) => void;
}

// 获取文本颜色
const getTextColor = (type: TextType, theme: Theme) => {
  switch (type) {
    case 'secondary':
      return theme.colors.text.secondary;
    case 'success':
      return theme.colors.success;
    case 'warning':
      return theme.colors.warning;
    case 'danger':
      return theme.colors.error;
    default:
      return 'inherit';
  }
};

const StyledText = styled.span<{
  $type?: TextType;
  $code?: boolean;
  $delete?: boolean;
  $disabled?: boolean;
  $keyboard?: boolean;
  $mark?: boolean;
  $strong?: boolean;
  $italic?: boolean;
  $underline?: boolean;
  $ellipsis?: boolean;
  theme: Theme;
}>`
  color: ${({ $type, theme }) => getTextColor($type, theme)};
  font-family: ${({ $code, $keyboard }) =>
    $code || $keyboard ? 'monospace' : 'inherit'};
  text-decoration: ${({ $delete, $underline }) =>
    $delete
      ? 'line-through'
      : $underline
      ? 'underline'
      : 'none'};
  font-weight: ${({ $strong, theme }) =>
    $strong ? theme.typography.fontWeight.bold : 'inherit'};
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  background-color: ${({ $mark, $keyboard, theme }) =>
    $mark
      ? theme.colors.warning
      : $keyboard
      ? theme.colors.surface
      : 'transparent'};
  padding: ${({ $keyboard, theme }) => ($keyboard ? theme.spacing.xs : '0')};
  border-radius: ${({ $keyboard, theme }) => ($keyboard ? theme.radii.xs : '0')};
  border: ${({ $keyboard, theme }) =>
    $keyboard ? `1px solid ${theme.colors.border}` : 'none'};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'inherit')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  ${({ $ellipsis }) =>
    $ellipsis
      ? `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
      : ''}
`;

/**
 * Typography.Text 组件 - 用于文本内容的展示
 */
export const Text: React.FC<TextProps> = ({
  code = false,
  copyable = false,
  delete: del = false,
  disabled = false,
  editable = false,
  ellipsis = false,
  keyboard = false,
  mark = false,
  onClick,
  strong = false,
  italic = false,
  type,
  underline = false,
  children,
  ...rest
}) => {
  const theme = useTheme();
  const copyConfig = typeof copyable === 'object' ? copyable : { text: children?.toString() };

  // TODO: 实现editable功能

  const content = (
    <StyledText
      $type={type}
      $code={code}
      $delete={del}
      $disabled={disabled}
      $keyboard={keyboard}
      $mark={mark}
      $strong={strong}
      $italic={italic}
      $underline={underline}
      $ellipsis={!!ellipsis}
      theme={theme}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {children}
    </StyledText>
  );

  // 如果启用了复制功能，则包装在Copyable组件中
  if (copyable) {
    return <Copyable {...copyConfig}>{content}</Copyable>;
  }

  return content;
}; 