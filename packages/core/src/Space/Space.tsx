import React, { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

export type SpaceSize = 'small' | 'middle' | 'large' | number;
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
export type SpaceDirection = 'vertical' | 'horizontal';

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 对齐方式
   */
  align?: SpaceAlign;
  /**
   * 间距方向
   * @default horizontal
   */
  direction?: SpaceDirection;
  /**
   * 间距大小
   * @default small
   */
  size?: SpaceSize | [SpaceSize, SpaceSize];
  /**
   * 设置分隔符
   */
  split?: ReactNode;
  /**
   * 是否自动换行，仅在 horizontal 时有效
   * @default false
   */
  wrap?: boolean;
  /**
   * 语义化 className
   */
  classNames?: Record<SemanticDOM, string>;
  /**
   * 语义化 style
   */
  styles?: Record<SemanticDOM, CSSProperties>;
  /**
   * 子元素
   */
  children?: ReactNode;
}

export type SemanticDOM = 'item';

// 获取间距大小
const getSpaceSize = (size: SpaceSize, theme: Theme): string => {
  if (typeof size === 'number') {
    return `${size}px`;
  }

  switch (size) {
    case 'small':
      return theme.spacing.sm;
    case 'middle':
      return theme.spacing.md;
    case 'large':
      return theme.spacing.lg;
    default:
      return theme.spacing.sm;
  }
};

// 分析子元素，处理分隔符
const toArray = (children: ReactNode): ReactNode[] => {
  return React.Children.toArray(children);
};

const StyledSpace = styled.div<{
  $align?: SpaceAlign;
  $direction: SpaceDirection;
  $horizontalSize: string;
  $verticalSize: string;
  $wrap: boolean;
  theme: Theme;
}>`
  display: inline-flex;
  flex-direction: ${({ $direction }) => ($direction === 'vertical' ? 'column' : 'row')};
  ${({ $align }) => {
    switch ($align) {
      case 'start':
        return 'align-items: flex-start;';
      case 'end':
        return 'align-items: flex-end;';
      case 'center':
        return 'align-items: center;';
      case 'baseline':
        return 'align-items: baseline;';
      default:
        return '';
    }
  }}
  row-gap: ${({ $verticalSize }) => $verticalSize};
  column-gap: ${({ $horizontalSize }) => $horizontalSize};
  flex-wrap: ${({ $wrap, $direction }) => ($wrap && $direction === 'horizontal' ? 'wrap' : 'nowrap')};
`;

const SpaceItem = styled.div<{
  $isSplit?: boolean;
}>`
  ${({ $isSplit }) => $isSplit && `
    display: flex;
    align-items: center;
  `}
`;

/**
 * Space 间距组件
 * @param props 组件属性
 * @returns Space组件
 */
export const Space: React.FC<SpaceProps> = ({
  align,
  direction = 'horizontal',
  size = 'small',
  split,
  wrap = false,
  classNames,
  styles,
  children,
  ...rest
}) => {
  const theme = useTheme();
  const childNodes = toArray(children);
  const mergedAlign = direction === 'horizontal' && align === undefined ? 'center' : align;
  
  // 处理size
  let horizontalSize: string;
  let verticalSize: string;
  
  if (Array.isArray(size)) {
    [horizontalSize, verticalSize] = size.map(item => getSpaceSize(item, theme));
  } else {
    horizontalSize = verticalSize = getSpaceSize(size, theme);
  }
  
  // 如果没有子元素或只有一个子元素，直接返回
  if (!childNodes || childNodes.length === 0) {
    return null;
  }
  
  if (childNodes.length === 1) {
    return <>{childNodes}</>;
  }
  
  // 处理子元素，添加分隔符
  const items = childNodes.map((child, index) => {
    const key = (child as React.ReactElement)?.key || `space-item-${index}`;
    
    return (
      <React.Fragment key={key}>
        <SpaceItem 
          className={classNames?.item}
          style={styles?.item}
          $isSplit={split !== undefined && index < childNodes.length - 1}
        >
          {child}
        </SpaceItem>
        {split && index < childNodes.length - 1 && (
          <SpaceItem $isSplit={true}>
            {split}
          </SpaceItem>
        )}
      </React.Fragment>
    );
  });
  
  return (
    <StyledSpace
      $align={mergedAlign}
      $direction={direction}
      $horizontalSize={horizontalSize}
      $verticalSize={verticalSize}
      $wrap={wrap}
      theme={theme}
      {...rest}
    >
      {items}
    </StyledSpace>
  );
}; 