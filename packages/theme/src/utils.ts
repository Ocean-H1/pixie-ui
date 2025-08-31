import { Theme, ColorPalette, SemanticColors } from './theme';

/**
 * 生成颜色调色板
 * @param baseColor 基础颜色
 * @returns 颜色调色板
 */
export const generateColorPalette = (baseColor: string): ColorPalette => {
  // 简单的颜色调色板生成逻辑
  // 在实际项目中，建议使用专业的颜色处理库如 chroma-js
  const colors: ColorPalette = {
    50: `${baseColor}0a`, // 10% 透明度
    100: `${baseColor}1a`, // 20% 透明度
    200: `${baseColor}33`, // 30% 透明度
    300: `${baseColor}4d`, // 40% 透明度
    400: `${baseColor}66`, // 50% 透明度
    500: baseColor,
    600: `${baseColor}99`, // 60% 透明度
    700: `${baseColor}b3`, // 70% 透明度
    800: `${baseColor}cc`, // 80% 透明度
    900: `${baseColor}e6`, // 90% 透明度
  };
  
  return colors;
};

/**
 * 生成语义化颜色
 * @param mainColor 主颜色
 * @param isDark 是否为暗色主题
 * @returns 语义化颜色对象
 */
export const generateSemanticColors = (
  mainColor: string, 
  isDark: boolean = false
): SemanticColors => {
  // 简单的语义化颜色生成逻辑
  const contrast = isDark ? '#1a202c' : '#ffffff';
  
  return {
    main: mainColor,
    light: `${mainColor}80`, // 50% 透明度
    dark: `${mainColor}cc`, // 80% 透明度
    contrast,
  };
};

/**
 * 检查颜色对比度（简化版本）
 * @param color1 颜色1
 * @param color2 颜色2
 * @returns 对比度值
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  // 这是一个简化的对比度计算
  // 在实际项目中，建议使用专业的颜色对比度计算库
  return 4.5; // 示例返回值
};

/**
 * 创建主题变体
 * @param baseTheme 基础主题
 * @param variant 变体类型
 * @returns 主题变体
 */
export const createThemeVariant = (
  baseTheme: Theme,
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
): Theme => {
  const variantColors = baseTheme.colors[variant as keyof typeof baseTheme.colors] as string;
  
  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: variantColors,
    },
  };
};

/**
 * 合并主题配置
 * @param baseTheme 基础主题
 * @param customTheme 自定义主题
 * @returns 合并后的主题
 */
export const mergeTheme = (baseTheme: Theme, customTheme: Partial<Theme>): Theme => {
  return {
    ...baseTheme,
    ...customTheme,
    colors: {
      ...baseTheme.colors,
      ...customTheme.colors,
    },
    shadows: {
      ...baseTheme.shadows,
      ...customTheme.shadows,
    },
    spacing: {
      ...baseTheme.spacing,
      ...customTheme.spacing,
    },
    breakpoints: {
      ...baseTheme.breakpoints,
      ...customTheme.breakpoints,
    },
    fontSizes: {
      ...baseTheme.fontSizes,
      ...customTheme.fontSizes,
    },
    typography: {
      ...baseTheme.typography,
      ...customTheme.typography,
    },
    radii: {
      ...baseTheme.radii,
      ...customTheme.radii,
    },
    controlSizes: {
      ...baseTheme.controlSizes,
      ...customTheme.controlSizes,
    },
  };
};

/**
 * 获取主题中的颜色值
 * @param theme 主题对象
 * @param colorPath 颜色路径，如 'primary' 或 'semantic.primary.main'
 * @returns 颜色值
 */
export const getThemeColor = (theme: Theme, colorPath: string): string => {
  const paths = colorPath.split('.');
  let current: any = theme.colors;
  
  for (const path of paths) {
    if (current && typeof current === 'object' && path in current) {
      current = current[path];
    } else {
      return '#000000'; // 默认颜色
    }
  }
  
  return typeof current === 'string' ? current : '#000000';
};

/**
 * 验证主题配置
 * @param theme 主题对象
 * @returns 验证结果
 */
export const validateTheme = (theme: Partial<Theme>): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // 检查必需的颜色属性
  const requiredColors = ['primary', 'secondary', 'success', 'warning', 'error', 'info'] as const;
  for (const color of requiredColors) {
    if (!theme.colors?.[color]) {
      errors.push(`Missing required color: ${color}`);
    }
  }
  
  // 检查文本颜色
  if (!theme.colors?.text?.primary) {
    errors.push('Missing text.primary color');
  }
  
  // 检查背景颜色
  if (!theme.colors?.background?.default) {
    errors.push('Missing background.default color');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};
