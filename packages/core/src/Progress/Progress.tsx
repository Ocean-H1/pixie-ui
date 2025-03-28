import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

export type ProgressSize = 'small' | 'default' | number | [number | string, number] | { width: number, height: number };
export type ProgressType = 'line' | 'circle' | 'dashboard';
export type ProgressStatus = 'success' | 'exception' | 'normal' | 'active';
export type ProgressStrokeLinecap = 'round' | 'butt' | 'square';

export interface ProgressProps {
  /**
   * 内容的模板函数
   * @default (percent) => percent + '%'
   */
  format?: (percent: number, successPercent?: number) => React.ReactNode;
  /**
   * 百分比
   * @default 0
   */
  percent?: number;
  /**
   * 是否显示进度数值或状态图标
   * @default true
   */
  showInfo?: boolean;
  /**
   * 状态，可选：success exception normal active(仅限 line)
   */
  status?: ProgressStatus;
  /**
   * 进度条的色彩
   */
  strokeColor?: string;
  /**
   * 进度条的样式
   * @default 'round'
   */
  strokeLinecap?: ProgressStrokeLinecap;
  /**
   * 成功进度条相关配置
   */
  success?: {
    percent: number;
    strokeColor: string;
  };
  /**
   * 未完成的分段的颜色
   */
  trailColor?: string;
  /**
   * 类型，可选 line circle dashboard
   * @default 'line'
   */
  type?: ProgressType;
  /**
   * 进度条的尺寸
   * @default 'default'
   */
  size?: ProgressSize;
}

// 获取进度条的高度
const getLineHeight = (size: ProgressSize): string => {
  if (size === 'small') {
    return '6px';
  }
  if (size === 'default') {
    return '8px';
  }
  if (typeof size === 'number') {
    return `${size}px`;
  }
  if (Array.isArray(size)) {
    return `${size[1]}px`;
  }
  if (typeof size === 'object' && size.height) {
    return `${size.height}px`;
  }
  return '8px';
};

// 获取进度条的宽度
const getLineWidth = (size: ProgressSize): string => {
  if (Array.isArray(size)) {
    return typeof size[0] === 'number' ? `${size[0]}px` : size[0].toString();
  }
  if (typeof size === 'object' && size.width) {
    return `${size.width}px`;
  }
  return '100%';
};

// 获取进度条的状态颜色
const getStatusColor = (status: ProgressStatus, theme: Theme): string => {
  switch (status) {
    case 'success':
      return theme.colors.success;
    case 'exception':
      return theme.colors.error;
    case 'active':
    case 'normal':
    default:
      return theme.colors.primary;
  }
};

// 进度条外层容器
const ProgressContainer = styled.div<{
  $type: ProgressType;
  $width: string;
}>`
  display: inline-flex;
  align-items: center;
  width: ${({ $width }) => $width};
  position: relative;
`;

// 线性进度条容器
const LineProgressWrapper = styled.div<{
  $height: string;
  theme: Theme;
}>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.disabled.background};
  border-radius: ${({ theme }) => theme.radii.round};
  height: ${({ $height }) => $height};
  position: relative;
  overflow: hidden;
`;

// 线性进度条(主要)
const LineProgress = styled.div<{
  $percent: number;
  $color: string;
  $strokeLinecap: ProgressStrokeLinecap;
  $active: boolean;
  theme: Theme;
}>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${({ $percent }) => `${$percent}%`};
  background-color: ${({ $color }) => $color};
  border-radius: ${({ $strokeLinecap, theme }) =>
    $strokeLinecap === 'round' ? theme.radii.round : '0'};
  transition: width 0.3s ease;
  ${({ $active }) =>
    $active &&
    `
    position: relative;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 75%
      );
      animation: progressActiveAnimation 2s ease infinite;
      background-size: 200% 100%;
    }
    @keyframes progressActiveAnimation {
      0% {
        background-position: 0% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
  `}
`;

// 线性进度条(成功部分)
const SuccessProgress = styled.div<{
  $percent: number;
  $color: string;
  $strokeLinecap: ProgressStrokeLinecap;
  theme: Theme;
}>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${({ $percent }) => `${$percent}%`};
  background-color: ${({ $color }) => $color};
  border-radius: ${({ $strokeLinecap, theme }) =>
    $strokeLinecap === 'round' ? theme.radii.round : '0'};
  transition: width 0.3s ease;
  z-index: 1;
`;

// 信息显示
const InfoDisplay = styled.span<{
  theme: Theme;
  $status?: ProgressStatus;
}>`
  margin-left: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme, $status }) => 
    $status ? getStatusColor($status, theme) : theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  white-space: nowrap;
`;

// 圆形进度条SVG容器
const CircleContainer = styled.div<{
  $size: number;
}>`
  position: relative;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

// 圆形进度文本
const CircleText = styled.div<{
  theme: Theme;
  $status?: ProgressStatus;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme, $status }) => 
    $status ? getStatusColor($status, theme) : theme.colors.text.primary};
  text-align: center;
`;

/**
 * Progress 进度条组件
 * 展示操作的当前进度。
 */
export const Progress: React.FC<ProgressProps> = ({
  format = (percent) => `${percent}%`,
  percent = 0,
  showInfo = true,
  status,
  strokeColor,
  strokeLinecap = 'round',
  success,
  trailColor,
  type = 'line',
  size = 'default',
}) => {
  const theme = useTheme();
  
  // 计算状态
  const finalStatus = useMemo(() => {
    if (status) return status;
    if (percent >= 100) return 'success';
    return 'normal';
  }, [status, percent]);

  // 计算线性进度条高度
  const lineHeight = useMemo(() => 
    getLineHeight(size), [size]);
    
  // 计算容器宽度
  const containerWidth = useMemo(() => 
    getLineWidth(size), [size]);
  
  // 计算进度条颜色
  const progressColor = useMemo(() => 
    strokeColor || getStatusColor(finalStatus, theme), [strokeColor, finalStatus, theme]);
  
  // 计算圆形尺寸
  const circleSize = useMemo(() => {
    if (size === 'small') return 80;
    if (size === 'default') return 120;
    if (typeof size === 'number') return size;
    return 120;
  }, [size]);
  
  // 圆形进度条参数
  const radius = circleSize / 2 - 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;
  const successStrokeDashoffset = success?.percent 
    ? circumference - (success.percent / 100) * circumference 
    : circumference;

  // 渲染进度信息
  const renderInfo = () => {
    if (!showInfo) return null;
    return (
      <InfoDisplay theme={theme} $status={finalStatus}>
        {format(percent, success?.percent)}
      </InfoDisplay>
    );
  };

  // 渲染线性进度条
  const renderLineProgress = () => {
    return (
      <>
        <LineProgressWrapper $height={lineHeight} theme={theme}>
          <LineProgress
            $percent={percent}
            $color={progressColor}
            $strokeLinecap={strokeLinecap}
            $active={finalStatus === 'active'}
            theme={theme}
          />
          {success && (
            <SuccessProgress
              $percent={success.percent}
              $color={success.strokeColor || theme.colors.success}
              $strokeLinecap={strokeLinecap}
              theme={theme}
            />
          )}
        </LineProgressWrapper>
        {renderInfo()}
      </>
    );
  };

  // 渲染圆形/仪表盘进度条
  const renderCircleProgress = () => {
    const dashboardGap = type === 'dashboard' ? 75 : 0;
    const startAngle = -90;
    const dashboardStartAngle = startAngle + dashboardGap / 2;
    const endAngle = type === 'dashboard' ? 270 - dashboardGap : 270;
    
    return (
      <CircleContainer $size={circleSize}>
        <svg width={circleSize} height={circleSize} viewBox={`0 0 ${circleSize} ${circleSize}`}>
          {/* 背景圆环 */}
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            fill="none"
            stroke={trailColor || theme.colors.disabled.background}
            strokeWidth="8"
            transform={type === 'dashboard' ? `rotate(${dashboardStartAngle} ${circleSize / 2} ${circleSize / 2})` : ''}
            strokeDasharray={type === 'dashboard' ? `${(endAngle / 360) * circumference} ${circumference}` : circumference}
          />
          
          {/* 进度圆环 */}
          <circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            fill="none"
            stroke={progressColor}
            strokeWidth="8"
            strokeLinecap={strokeLinecap}
            transform={`rotate(${startAngle} ${circleSize / 2} ${circleSize / 2})`}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 0.3s ease' }}
          />
          
          {/* 成功进度圆环 */}
          {success && (
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="none"
              stroke={success.strokeColor || theme.colors.success}
              strokeWidth="8"
              strokeLinecap={strokeLinecap}
              transform={`rotate(${startAngle} ${circleSize / 2} ${circleSize / 2})`}
              strokeDasharray={circumference}
              strokeDashoffset={successStrokeDashoffset}
              style={{ transition: 'stroke-dashoffset 0.3s ease' }}
            />
          )}
        </svg>
        
        {showInfo && (
          <CircleText theme={theme} $status={finalStatus}>
            {format(percent, success?.percent)}
          </CircleText>
        )}
      </CircleContainer>
    );
  };

  return (
    <ProgressContainer $type={type} $width={containerWidth}>
      {type === 'line' ? renderLineProgress() : renderCircleProgress()}
    </ProgressContainer>
  );
}; 