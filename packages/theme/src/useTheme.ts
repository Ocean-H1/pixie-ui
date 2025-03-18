import { useTheme as useEmotionTheme } from '@emotion/react';
import { Theme } from './theme';

/**
 * 获取当前主题的钩子函数
 * @returns 当前主题
 */
export const useTheme = (): Theme => {
  return useEmotionTheme() as Theme;
}; 