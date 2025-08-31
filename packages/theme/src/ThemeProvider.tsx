import React, { ReactNode, createContext, useContext, useState, useCallback, useEffect } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme, Theme, ThemeMode } from './theme';
import { deepMerge } from '@pixie-ui/utils';

interface ThemeContextValue {
  theme: Theme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  /**
   * 自定义主题
   */
  theme?: Partial<Theme>;
  /**
   * 主题模式
   */
  mode?: ThemeMode;
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
  theme: customTheme,
  mode: initialMode = 'light',
  children,
}) => {
  const [mode, setModeState] = useState<ThemeMode>(initialMode);
  
  // 获取当前实际主题模式
  const getActualMode = useCallback((currentMode: ThemeMode): 'light' | 'dark' => {
    if (currentMode === 'auto') {
      // 检查系统主题偏好
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return 'light';
    }
    return currentMode;
  }, []);
  
  const actualMode = getActualMode(mode);
  const isDark = actualMode === 'dark';
  
  // 根据模式选择基础主题
  const baseTheme = isDark ? darkTheme : lightTheme;
  const mergedTheme = customTheme ? deepMerge(baseTheme, customTheme) : baseTheme;
  
  const handleSetMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    // 持久化主题模式
    if (typeof window !== 'undefined') {
      localStorage.setItem('pixie-ui-theme-mode', newMode);
    }
  }, []);
  
  const toggleMode = useCallback(() => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    handleSetMode(newMode);
  }, [mode, handleSetMode]);
  
  // 监听系统主题变化
  useEffect(() => {
    if (mode === 'auto' && typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        // 触发重新渲染
        setModeState(prev => prev);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [mode]);
  
  // 初始化时从localStorage读取主题模式
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('pixie-ui-theme-mode') as ThemeMode;
      if (savedMode && ['light', 'dark', 'auto'].includes(savedMode)) {
        setModeState(savedMode);
      }
    }
  }, []);
  
  const contextValue: ThemeContextValue = {
    theme: mergedTheme,
    mode,
    setMode: handleSetMode,
    toggleMode,
    isDark,
  };
  
  return (
    <ThemeContext.Provider value={contextValue}>
      <EmotionThemeProvider theme={mergedTheme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

/**
 * 使用主题上下文的钩子
 */
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}; 