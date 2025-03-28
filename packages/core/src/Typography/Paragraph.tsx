import React from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { Copyable, CopyableProps } from './Copyable';

export interface ParagraphProps {
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
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否可编辑，为对象时可对编辑进行控制
   * @default false
   */
  editable?: boolean | EditableConfig;
  /**
   * 自动溢出省略，可以设置省略行数、是否可展开、添加后缀等
   * @default false
   */
  ellipsis?: boolean | EllipsisConfig;
  /**
   * 添加标记样式
   * @default false
   */
  mark?: boolean;
  /**
   * 点击段落时的回调
   */
  onClick?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
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
   * 添加下划线样式
   * @default false
   */
  underline?: boolean;
  /**
   * 段落子元素
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

const StyledParagraph = styled.p<{
  $delete?: boolean;
  $disabled?: boolean;
  $mark?: boolean;
  $strong?: boolean;
  $italic?: boolean;
  $underline?: boolean;
  $ellipsis?: boolean | EllipsisConfig;
  theme: Theme;
}>`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ $disabled, theme }) => ($disabled ? theme.colors.text.disabled : theme.colors.text.primary)};
  text-decoration: ${({ $delete, $underline }) =>
    $delete ? 'line-through' : $underline ? 'underline' : 'none'};
  font-weight: ${({ $strong, theme }) =>
    $strong ? theme.typography.fontWeight.bold : theme.typography.fontWeight.regular};
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'inherit')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  
  ${({ $mark, theme }) =>
    $mark
      ? `
        background-color: ${theme.colors.warning};
        padding: 0 ${theme.spacing.xs};
        border-radius: ${theme.radii.xs};
      `
      : ''}
  
  ${({ $ellipsis }) =>
    typeof $ellipsis === 'boolean' && $ellipsis
      ? `
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `
      : ''}
  
  ${({ $ellipsis }) =>
    typeof $ellipsis === 'object' && $ellipsis && $ellipsis.rows
      ? `
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${$ellipsis.rows};
        overflow: hidden;
      `
      : ''}
`;

/**
 * Typography.Paragraph 组件 - 用于段落文本的展示
 */
export const Paragraph: React.FC<ParagraphProps> = ({
  copyable = false,
  delete: del = false,
  disabled = false,
  editable = false,
  ellipsis = false,
  mark = false,
  onClick,
  strong = false,
  italic = false,
  underline = false,
  children,
  ...rest
}) => {
  const theme = useTheme();
  const copyConfig = typeof copyable === 'object' ? copyable : { text: children?.toString() };

  // TODO: 实现editable功能
  // TODO: 实现高级ellipsis功能，例如可展开、tooltip等

  const content = (
    <StyledParagraph
      $delete={del}
      $disabled={disabled}
      $mark={mark}
      $strong={strong}
      $italic={italic}
      $underline={underline}
      $ellipsis={ellipsis}
      theme={theme}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {children}
    </StyledParagraph>
  );

  // 如果启用了复制功能，则包装在Copyable组件中
  if (copyable) {
    return <Copyable {...copyConfig}>{content}</Copyable>;
  }

  return content;
}; 