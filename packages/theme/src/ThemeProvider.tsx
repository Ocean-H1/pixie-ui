import React, { ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { lightTheme, Theme } from './theme';
import { deepMerge } from '@pixie-ui/utils';

export interface ThemeProviderProps {
  /**
   * 自定义主题
   */
  theme?: Partial<Theme>;
  /**
   * 子元素
   */
  children: ReactNode;
}

/**
 * 主题提供者组件
 * @param props 组件属性
 * @returns 主题提供者组件
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const mergedTheme = theme ? deepMerge(lightTheme, theme) : lightTheme;

  return (
    <EmotionThemeProvider theme={mergedTheme}>
      {children}
    </EmotionThemeProvider>
  );
}; 