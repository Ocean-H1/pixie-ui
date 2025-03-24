import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

export type FlexJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'normal';
export type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'normal';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type GapSize = 'small' | 'middle' | 'large' | string | number;

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * flex 主轴的方向是否垂直，使用 flex-direction: column
   * @default false
   */
  vertical?: boolean;
  /**
   * 设置元素在主轴方向上的对齐方式
   * @default 'normal'
   */
  justify?: FlexJustify;
  /**
   * 设置元素在交叉轴方向上的对齐方式
   * @default 'normal'
   */
  align?: FlexAlign;
  /**
   * 设置元素单行显示还是多行显示
   * @default false
   */
  wrap?: FlexWrap | boolean;
  /**
   * 设置网格之间的间隙
   */
  gap?: GapSize;
  /**
   * flex CSS 简写属性
   * @default 'normal'
   */
  flex?: string | number;
  /**
   * 自定义元素类型
   * @default 'div'
   */
  component?: React.ElementType;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

// 获取间隙大小
const getGapSize = (gap: GapSize, theme: Theme): string => {
  if (typeof gap === 'number') {
    return `${gap}px`;
  }

  if (typeof gap === 'string') {
    if (gap === 'small') return theme.spacing.sm;
    if (gap === 'middle') return theme.spacing.md;
    if (gap === 'large') return theme.spacing.lg;
    return gap; // 如果是自定义值，直接返回
  }

  return '0';
};

// 获取Flex换行属性
const getFlexWrap = (wrap: FlexWrap | boolean): string => {
  if (typeof wrap === 'boolean') {
    return wrap ? 'wrap' : 'nowrap';
  }
  return wrap;
};

const StyledFlex = styled.div<{
  $vertical: boolean;
  $justify: FlexJustify;
  $align: FlexAlign;
  $wrap: FlexWrap | boolean;
  $gap: GapSize | undefined;
  $flex: string | number | undefined;
  theme: Theme;
}>`
  display: flex;
  flex-direction: ${({ $vertical }) => ($vertical ? 'column' : 'row')};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
  flex-wrap: ${({ $wrap }) => getFlexWrap($wrap)};
  gap: ${({ $gap, theme }) => ($gap ? getGapSize($gap, theme) : '0')};
  ${({ $flex }) => $flex !== undefined && `flex: ${$flex};`}
`;

/**
 * Flex布局组件
 * @param props 组件属性
 * @returns Flex组件
 */
export const Flex: React.FC<FlexProps> = ({
  vertical = false,
  justify = 'normal',
  align = 'normal',
  wrap = false,
  gap,
  flex,
  component = 'div',
  style,
  children,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <StyledFlex
      as={component}
      $vertical={vertical}
      $justify={justify}
      $align={align}
      $wrap={wrap}
      $gap={gap}
      $flex={flex}
      theme={theme}
      style={style}
      {...rest}
    >
      {children}
    </StyledFlex>
  );
}; 