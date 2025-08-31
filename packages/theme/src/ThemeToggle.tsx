import React from 'react';
import styled from '@emotion/styled';
import { useThemeContext } from './ThemeProvider';

const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }: any) => theme.colors.border};
  border-radius: ${({ theme }: any) => theme.radii.md};
  background: ${({ theme, $active }: any) => 
    $active ? theme.colors.primary : theme.colors.background.paper};
  color: ${({ theme, $active }: any) => 
    $active ? theme.colors.text.primary : theme.colors.text.secondary};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
  
  &:hover {
    background: ${({ theme, $active }: any) => 
      $active ? theme.colors.hover.primary : theme.colors.state?.hover || 'rgba(0, 0, 0, 0.04)'};
    border-color: ${({ theme }: any) => theme.colors.primary};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }: any) => theme.colors.state?.focus || 'rgba(49, 130, 206, 0.2)'};
  }
`;

const ModeButton = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: 1px solid ${({ theme }: any) => theme.colors.border};
  border-radius: ${({ theme }: any) => theme.radii.sm};
  background: ${({ theme, $active }: any) => 
    $active ? theme.colors.primary : theme.colors.background.paper};
  color: ${({ theme, $active }: any) => 
    $active ? theme.colors.text.primary : theme.colors.text.secondary};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: ${({ theme }: any) => theme.typography.fontWeight.medium};
  
  &:hover {
    background: ${({ theme, $active }: any) => 
      $active ? theme.colors.hover.primary : theme.colors.state?.hover || 'rgba(0, 0, 0, 0.04)'};
    border-color: ${({ theme }: any) => theme.colors.primary};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }: any) => theme.colors.state?.focus || 'rgba(49, 130, 206, 0.2)'};
  }
`;

export interface ThemeToggleProps {
  /**
   * 显示模式
   */
  variant?: 'icon' | 'button' | 'both';
  /**
   * 是否显示标签
   */
  showLabels?: boolean;
  /**
   * 自定义类名
   */
  className?: string;
}

/**
 * 主题切换组件
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'icon',
  showLabels = false,
  className,
}) => {
  const { mode, setMode, toggleMode, isDark } = useThemeContext();
  
  const handleModeChange = (newMode: 'light' | 'dark' | 'auto') => {
    setMode(newMode);
  };
  
  if (variant === 'icon') {
    return (
      <ToggleButton
        onClick={toggleMode}
        $active={false}
        title={`切换到${isDark ? '亮色' : '暗色'}主题`}
        className={className}
      >
        {isDark ? '☀️' : '🌙'}
      </ToggleButton>
    );
  }
  
  if (variant === 'button') {
    return (
      <ToggleContainer className={className}>
        <ModeButton
          onClick={() => handleModeChange('light')}
          $active={mode === 'light'}
          title="亮色主题"
        >
          {showLabels ? '亮色' : '☀️'}
        </ModeButton>
        <ModeButton
          onClick={() => handleModeChange('dark')}
          $active={mode === 'dark'}
          title="暗色主题"
        >
          {showLabels ? '暗色' : '🌙'}
        </ModeButton>
        <ModeButton
          onClick={() => handleModeChange('auto')}
          $active={mode === 'auto'}
          title="跟随系统"
        >
          {showLabels ? '自动' : '🔄'}
        </ModeButton>
      </ToggleContainer>
    );
  }
  
  // variant === 'both'
  return (
    <ToggleContainer className={className}>
      <ToggleButton
        onClick={toggleMode}
        $active={false}
        title={`切换到${isDark ? '亮色' : '暗色'}主题`}
      >
        {isDark ? '☀️' : '🌙'}
      </ToggleButton>
      <ModeButton
        onClick={() => handleModeChange('light')}
        $active={mode === 'light'}
        title="亮色主题"
      >
        {showLabels ? '亮色' : '☀️'}
      </ModeButton>
      <ModeButton
        onClick={() => handleModeChange('dark')}
        $active={mode === 'dark'}
        title="暗色主题"
      >
        {showLabels ? '暗色' : '🌙'}
      </ModeButton>
      <ModeButton
        onClick={() => handleModeChange('auto')}
        $active={mode === 'auto'}
        title="跟随系统"
      >
        {showLabels ? '自动' : '🔄'}
      </ModeButton>
    </ToggleContainer>
  );
};
