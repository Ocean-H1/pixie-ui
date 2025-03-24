import React, { CSSProperties, HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

export type CardVariant = 'outlined' | 'borderless';
export type CardSize = 'default' | 'small';
export type CardSemanticDOM = 'head' | 'body' | 'actions' | 'cover' | 'extra';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * 卡片操作组，位置在卡片底部
   */
  actions?: React.ReactNode[];
  /**
   * 卡片标题
   */
  title?: React.ReactNode;
  /**
   * 卡片形态变体
   * @default 'outlined'
   */
  variant?: CardVariant;
  /**
   * 卡片封面
   */
  cover?: React.ReactNode;
  /**
   * 卡片右上角的操作区域
   */
  extra?: React.ReactNode;
  /**
   * 鼠标移过时可浮起
   * @default false
   */
  hoverable?: boolean;
  /**
   * 当卡片内容还在加载中时，可以用 loading 展示一个占位
   * @default false
   */
  loading?: boolean;
  /**
   * card 的尺寸
   * @default 'default'
   */
  size?: CardSize;
  /**
   * 卡片类型，可设置为 inner 或 不设置
   */
  type?: string;
  /**
   * 配置卡片内置模块的 className
   */
  classNames?: Record<CardSemanticDOM, string>;
  /**
   * 配置卡片内置模块的 style
   */
  styles?: Record<CardSemanticDOM, CSSProperties>;
  /**
   * 页签切换的回调
   */
  onTabChange?: (key: string) => void;
  /**
   * 卡片内容
   */
  children?: React.ReactNode;
}

// 获取卡片背景色
const getBackgroundColor = (variant: CardVariant, theme: Theme) => {
  switch (variant) {
    case 'outlined':
      return theme.colors.background;
    case 'borderless':
      return 'transparent';
    default:
      return theme.colors.background;
  }
};

// 获取卡片边框
const getBorder = (variant: CardVariant, theme: Theme) => {
  switch (variant) {
    case 'outlined':
      return `1px solid ${theme.colors.border}`;
    case 'borderless':
      return 'none';
    default:
      return `1px solid ${theme.colors.border}`;
  }
};

// 获取卡片内边距
const getPadding = (size: CardSize, theme: Theme) => {
  switch (size) {
    case 'small':
      return theme.spacing.md;
    case 'default':
      return theme.spacing.lg;
    default:
      return theme.spacing.lg;
  }
};

// 获取卡片阴影
const getShadow = (hoverable: boolean, theme: Theme) => {
  return hoverable ? theme.shadows.md : 'none';
};

// 获取卡片hover时的阴影
const getHoverShadow = (hoverable: boolean, theme: Theme) => {
  return hoverable ? theme.shadows.lg : 'none';
};

interface StyledProps {
  theme: Theme;
}

const StyledCard = styled.div<{
  $variant: CardVariant;
  $size: CardSize;
  $hoverable: boolean;
} & StyledProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: ${({ $variant, theme }) => getBackgroundColor($variant, theme)};
  border: ${({ $variant, theme }) => getBorder($variant, theme)};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: ${({ $hoverable, theme }) => getShadow($hoverable, theme)};
  transition: all 0.3s;
  
  &:hover {
    box-shadow: ${({ $hoverable, theme }) => getHoverShadow($hoverable, theme)};
  }
`;

const CardHead = styled.div<{
  $size: CardSize;
} & StyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ $size, theme }) => `${getPadding($size, theme)} ${getPadding($size, theme)} 0`};
  border-bottom: 0;
  min-height: 48px;
`;

const CardTitle = styled.div<{
  $size: CardSize;
} & StyledProps>`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme, $size }) => $size === 'small' ? theme.fontSizes.md : theme.fontSizes.lg};
`;

const CardExtra = styled.div<StyledProps>`
  margin-left: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

const CardCover = styled.div<StyledProps>`
  position: relative;
  margin-top: -1px;
  margin-right: -1px;
  margin-left: -1px;
  overflow: hidden;
  
  & > * {
    display: block;
    width: 100%;
  }
  
  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.radii.sm};
    border-top-right-radius: ${({ theme }) => theme.radii.sm};
  }
`;

const CardBody = styled.div<{
  $size: CardSize;
} & StyledProps>`
  padding: ${({ $size, theme }) => getPadding($size, theme)};
  flex: 1;
`;

const CardActions = styled.div<{
  $size: CardSize;
} & StyledProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ $size, theme }) => `0 ${getPadding($size, theme)} ${getPadding($size, theme)}`};
`;

// 加载态 Skeleton 组件
const SkeletonLine = styled.div<{
  width?: string;
  height?: string;
} & StyledProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '16px'};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  animation: pulse 1.5s ease-in-out infinite;
  
  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

const CardSkeleton = () => {
  const theme = useTheme();
  
  return (
    <div>
      <SkeletonLine width="50%" height="24px" theme={theme} />
      <SkeletonLine theme={theme} />
      <SkeletonLine theme={theme} />
      <SkeletonLine width="80%" theme={theme} />
    </div>
  );
};

/**
 * Card 卡片组件
 * 最基础的卡片容器，可承载文字、列表、图片、段落
 */
export const Card: React.FC<CardProps> = ({
  variant = 'outlined',
  size = 'default',
  title,
  extra,
  cover,
  actions,
  hoverable = false,
  loading = false,
  classNames,
  styles,
  type,
  children,
  ...rest
}) => {
  const theme = useTheme();
  
  const renderTitle = () => {
    if (!title && !extra) return null;
    
    return (
      <CardHead 
        $size={size} 
        theme={theme}
        className={classNames?.head}
        style={styles?.head}
      >
        {title && (
          <CardTitle theme={theme} $size={size}>
            {title}
          </CardTitle>
        )}
        {extra && (
          <CardExtra theme={theme}>
            {extra}
          </CardExtra>
        )}
      </CardHead>
    );
  };
  
  const renderCover = () => {
    if (!cover) return null;
    
    return (
      <CardCover 
        theme={theme}
        className={classNames?.cover}
        style={styles?.cover}
      >
        {cover}
      </CardCover>
    );
  };
  
  const renderActions = () => {
    if (!actions || actions.length === 0) return null;
    
    return (
      <CardActions 
        $size={size} 
        theme={theme}
        className={classNames?.actions}
        style={styles?.actions}
      >
        {actions.map((action, index) => (
          <div key={`action-${index}`}>{action}</div>
        ))}
      </CardActions>
    );
  };
  
  return (
    <StyledCard
      $variant={variant}
      $size={size}
      $hoverable={hoverable}
      theme={theme}
      {...rest}
    >
      {renderTitle()}
      {renderCover()}
      <CardBody 
        $size={size} 
        theme={theme}
        className={classNames?.body}
        style={styles?.body}
      >
        {loading ? <CardSkeleton /> : children}
      </CardBody>
      {renderActions()}
    </StyledCard>
  );
}; 