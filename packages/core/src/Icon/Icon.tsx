import React from 'react';
import styled from '@emotion/styled';
import { Icon as IconifyIcon } from '@iconify/react';
import { Theme, useTheme } from '@pixie-ui/theme';

export type IconSize = 'small' | 'medium' | 'large' | number;

export interface IconProps {
  /**
   * 图标名称，来自 Iconify 图标库，例如 'mdi:home'
   */
  icon: string;
  /**
   * 图标大小
   * @default 'medium'
   */
  size?: IconSize;
  /**
   * 图标颜色
   */
  color?: string;
  /**
   * 旋转角度
   */
  rotate?: number;
  /**
   * 水平翻转
   * @default false
   */
  horizontalFlip?: boolean;
  /**
   * 垂直翻转
   * @default false
   */
  verticalFlip?: boolean;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 内联模式，兼容文本
   * @default false
   */
  inline?: boolean;
  /**
   * 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

// 获取图标大小
const getIconSize = (size: IconSize, theme: Theme): string | number => {
  if (typeof size === 'number') {
    return size;
  }

  switch (size) {
    case 'small':
      return theme.fontSizes.sm;
    case 'large':
      return theme.fontSizes.lg;
    case 'medium':
    default:
      return theme.fontSizes.md;
  }
};

const StyledIconWrapper = styled.div<{
  $size: IconSize;
  $color?: string;
  $inline?: boolean;
  theme: Theme;
}>`
  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  align-items: center;
  justify-content: center;
  vertical-align: ${({ $inline }) => ($inline ? '-0.125em' : 'middle')};
  font-size: ${({ $size, theme }) => getIconSize($size, theme)}px;
  color: ${({ $color }) => $color || 'inherit'};
  line-height: 1;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};
`;

/**
 * 图标组件，基于 Iconify 实现
 * @param props 组件属性
 * @returns 图标组件
 */
export const Icon: React.FC<IconProps> = ({
  icon,
  size = 'medium',
  color,
  rotate,
  horizontalFlip = false,
  verticalFlip = false,
  className,
  style,
  inline = false,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <StyledIconWrapper
      $size={size}
      $color={color}
      $inline={inline}
      className={className}
      style={style}
      onClick={onClick}
      theme={theme}
    >
      <IconifyIcon
        icon={icon}
        rotate={rotate}
        hFlip={horizontalFlip}
        vFlip={verticalFlip}
        style={{ width: '1em', height: '1em' }}
      />
    </StyledIconWrapper>
  );
}; 