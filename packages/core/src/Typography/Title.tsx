import React from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { Copyable, CopyableProps } from './Copyable';

export type TitleLevel = 1 | 2 | 3 | 4 | 5;

export interface TitleProps {
  /**
   * 标题级别
   * @default 1
   */
  level?: TitleLevel;
  /**
   * 是否可拷贝，为对象时可进行各种自定义
   * @default false
   */
  copyable?: boolean | CopyableProps;
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
  ellipsis?: boolean;
  /**
   * 添加标记样式
   * @default false
   */
  mark?: boolean;
  /**
   * 点击 Title 时的回调
   */
  onClick?: (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void;
  /**
   * 是否加粗
   * @default true
   */
  strong?: boolean;
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

// 获取标题元素
const getTitleElement = (level: TitleLevel) => `h${level}`;

// 获取标题字体大小
const getTitleFontSize = (level: TitleLevel, theme: Theme) => {
  switch (level) {
    case 1:
      return theme.fontSizes.xxl;
    case 2:
      return theme.fontSizes.xl;
    case 3:
      return theme.fontSizes.lg;
    case 4:
      return theme.fontSizes.md;
    case 5:
      return theme.fontSizes.sm;
    default:
      return theme.fontSizes.xxl;
  }
};

// 获取标题行高
const getTitleLineHeight = (level: TitleLevel, theme: Theme) => {
  return level <= 2 ? theme.typography.lineHeight.loose : theme.typography.lineHeight.relaxed;
};

// 获取标题下边距
const getTitleMarginBottom = (level: TitleLevel, theme: Theme) => {
  switch (level) {
    case 1:
      return theme.spacing.lg;
    case 2:
      return theme.spacing.md;
    case 3:
    case 4:
    case 5:
      return theme.spacing.sm;
    default:
      return theme.spacing.lg;
  }
};

interface StyledTitleProps {
  $level: TitleLevel;
  $mark?: boolean;
  $disabled?: boolean;
  $underline?: boolean;
  $ellipsis?: boolean;
  theme: Theme;
}

const StyledTitle = styled(
  ({ $level, $mark, $disabled, $underline, $ellipsis, theme, ...props }: StyledTitleProps & React.HTMLAttributes<HTMLHeadingElement>) => {
    const Component = getTitleElement($level);
    return <Component {...props} />;
  }
)<StyledTitleProps>`
  margin: 0 0 ${({ $level, theme }) => getTitleMarginBottom($level, theme)};
  color: ${({ $disabled, theme }) => ($disabled ? theme.colors.text.disabled : theme.colors.text.primary)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ $level, theme }) => getTitleFontSize($level, theme)};
  line-height: ${({ $level, theme }) => getTitleLineHeight($level, theme)};
  text-decoration: ${({ $underline }) => ($underline ? 'underline' : 'none')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
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
    $ellipsis
      ? `
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `
      : ''}
`;

/**
 * Typography.Title 组件 - 用于标题文本的展示
 */
export const Title: React.FC<TitleProps> = ({
  level = 1,
  copyable = false,
  disabled = false,
  editable = false,
  ellipsis = false,
  mark = false,
  onClick,
  strong = true,
  underline = false,
  children,
  ...rest
}) => {
  const theme = useTheme();
  const copyConfig = typeof copyable === 'object' ? copyable : { text: children?.toString() };

  // TODO: 实现editable功能

  const content = (
    <StyledTitle
      $level={level}
      $mark={mark}
      $disabled={disabled}
      $underline={underline}
      $ellipsis={ellipsis}
      theme={theme}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {children}
    </StyledTitle>
  );

  // 如果启用了复制功能，则包装在Copyable组件中
  if (copyable) {
    return <Copyable {...copyConfig}>{content}</Copyable>;
  }

  return content;
}; 