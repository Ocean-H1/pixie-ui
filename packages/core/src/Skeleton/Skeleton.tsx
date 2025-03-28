import React from 'react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { Theme, useTheme } from '@pixie-ui/theme';

export interface SkeletonTitleProps {
  /**
   * 标题宽度
   * @default '40%'
   */
  width?: string | number;
  /**
   * 标题高度
   * @default '16px'
   */
  height?: string | number;
}

export interface SkeletonParagraphProps {
  /**
   * 段落行数
   * @default 3
   */
  rows?: number;
  /**
   * 段落宽度，若为数组时则为对应的每行宽度，反之则是最后一行宽度
   * @default ['100%', '100%', '60%']
   */
  width?: string | number | string[] | number[];
  /**
   * 段落高度
   * @default '16px'
   */
  height?: string | number;
}

export interface SkeletonAvatarProps {
  /**
   * 头像形状
   * @default 'circle'
   */
  shape?: 'circle' | 'square';
  /**
   * 头像大小
   * @default '32px'
   */
  size?: string | number;
}

export interface SkeletonProps {
  /**
   * 是否展示动画效果
   * @default false
   */
  active?: boolean;
  /**
   * 是否显示头像占位图
   * @default false
   */
  avatar?: boolean | SkeletonAvatarProps;
  /**
   * 为 true 时，显示占位图。反之则直接展示子组件
   */
  loading?: boolean;
  /**
   * 是否显示段落占位图
   * @default true
   */
  paragraph?: boolean | SkeletonParagraphProps;
  /**
   * 为 true 时，段落和标题显示圆角
   * @default false
   */
  round?: boolean;
  /**
   * 是否显示标题占位图
   * @default true
   */
  title?: boolean | SkeletonTitleProps;
  /**
   * 子组件
   */
  children?: React.ReactNode;
}

const shimmerAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

// 获取尺寸值，如果是数字则转换为px
const getSizeValue = (size: string | number | undefined, defaultValue: string): string => {
  if (size === undefined) return defaultValue;
  return typeof size === 'number' ? `${size}px` : size;
};

// 获取圆角值
const getBorderRadius = (round: boolean, theme: Theme): string => {
  return round ? theme.radii.md : theme.radii.xs;
};

// Skeleton容器
const SkeletonContainer = styled.div`
  display: flex;
`;

// 头像占位
const AvatarWrapper = styled.div<{
  shape: 'circle' | 'square';
  size: string;
  theme: Theme;
  $active: boolean;
}>`
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.spacing.md};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ shape, theme }) => (shape === 'circle' ? theme.radii.round : theme.radii.xs)};
  background-color: ${({ theme }) => theme.colors.skeleton.background};
  
  ${({ $active, theme }) => $active && css`
    background-image: linear-gradient(
      90deg,
      ${theme.colors.skeleton.background} 25%,
      ${theme.colors.background.paper} 37%,
      ${theme.colors.skeleton.background} 63%
    );
    background-size: 400% 100%;
    animation: ${shimmerAnimation} 1.4s ease infinite;
  `}
`;

// 内容区域
const ContentWrapper = styled.div`
  flex: 1;
`;

// 标题占位
const TitleWrapper = styled.div<{
  width: string;
  height: string;
  theme: Theme;
  $round: boolean;
  $active: boolean;
}>`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ $round, theme }) => getBorderRadius($round, theme)};
  background-color: ${({ theme }) => theme.colors.skeleton.background};
  
  ${({ $active, theme }) => $active && css`
    background-image: linear-gradient(
      90deg,
      ${theme.colors.skeleton.background} 25%,
      ${theme.colors.background.paper} 37%,
      ${theme.colors.skeleton.background} 63%
    );
    background-size: 400% 100%;
    animation: ${shimmerAnimation} 1.4s ease infinite;
  `}
`;

// 段落行
const ParagraphRow = styled.div<{
  width: string;
  height: string;
  theme: Theme;
  $round: boolean;
  $active: boolean;
  $last: boolean;
}>`
  margin-bottom: ${({ $last, theme }) => ($last ? '0' : theme.spacing.sm)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ $round, theme }) => getBorderRadius($round, theme)};
  background-color: ${({ theme }) => theme.colors.skeleton.background};
  
  ${({ $active, theme }) => $active && css`
    background-image: linear-gradient(
      90deg,
      ${theme.colors.skeleton.background} 25%,
      ${theme.colors.background.paper} 37%,
      ${theme.colors.skeleton.background} 63%
    );
    background-size: 400% 100%;
    animation: ${shimmerAnimation} 1.4s ease infinite;
  `}
`;

/**
 * 骨架屏组件，用于在内容加载过程中展示一个占位图形
 * @param props 组件属性
 * @returns 骨架屏组件
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  active = false,
  avatar = false,
  loading,
  paragraph = true,
  round = false,
  title = true,
  children,
}) => {
  const theme = useTheme();

  // 如果loading为false且有children，则直接显示children
  if (loading === false && children) {
    return <>{children}</>;
  }

  // 处理头像属性
  const avatarProps: SkeletonAvatarProps = typeof avatar === 'object' ? avatar : {};
  const showAvatar = avatar !== false;
  const avatarShape = avatarProps.shape || 'circle';
  const avatarSize = getSizeValue(avatarProps.size, '32px');

  // 处理标题属性
  const titleProps: SkeletonTitleProps = typeof title === 'object' ? title : {};
  const showTitle = title !== false;
  const titleWidth = getSizeValue(titleProps.width, '40%');
  const titleHeight = getSizeValue(titleProps.height, '16px');

  // 处理段落属性
  const paragraphProps: SkeletonParagraphProps = typeof paragraph === 'object' ? paragraph : {};
  const showParagraph = paragraph !== false;
  const paragraphRows = paragraphProps.rows || 3;
  const paragraphHeight = getSizeValue(paragraphProps.height, '16px');

  // 计算段落宽度
  const getRowWidth = (index: number): string => {
    if (paragraphProps.width === undefined) {
      // 默认宽度设置：前两行100%，最后一行60%
      return index === paragraphRows - 1 ? '60%' : '100%';
    }

    if (Array.isArray(paragraphProps.width)) {
      // 如果是数组，则使用数组中对应的宽度
      const widthItem = paragraphProps.width[index];
      return getSizeValue(widthItem || '100%', '100%');
    }

    // 如果是单个值，则最后一行使用该宽度，其他行使用100%
    return index === paragraphRows - 1
      ? getSizeValue(paragraphProps.width, '60%')
      : '100%';
  };

  return (
    <SkeletonContainer>
      {showAvatar && (
        <AvatarWrapper
          shape={avatarShape}
          size={avatarSize}
          theme={theme}
          $active={active}
        />
      )}
      <ContentWrapper>
        {showTitle && (
          <TitleWrapper
            width={titleWidth}
            height={titleHeight}
            theme={theme}
            $round={round}
            $active={active}
          />
        )}
        {showParagraph && (
          <>
            {Array.from({ length: paragraphRows }).map((_, index) => (
              <ParagraphRow
                key={index}
                width={getRowWidth(index)}
                height={paragraphHeight}
                theme={theme}
                $round={round}
                $active={active}
                $last={index === paragraphRows - 1}
              />
            ))}
          </>
        )}
      </ContentWrapper>
    </SkeletonContainer>
  );
}; 