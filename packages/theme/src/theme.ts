// 新增颜色调色板接口（向后兼容）
export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

// 增强语义化颜色接口
export interface SemanticColors {
  main: string;
  light: string;
  dark: string;
  contrast: string;
}

// 主题模式类型
export type ThemeMode = 'light' | 'dark' | 'auto';

export interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  background: {
    paper: string;
    default: string;
  };
  surface: string;
  gold: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  border: string;
  divider: string;
  mask: string;
  skeleton: {
    background: string;
  };
  hover: {
    primary: string;
    secondary: string;
    text: string;
  };
  disabled: {
    background: string;
    foreground: string;
  };
  menu?: {
    selectedBg: string;
    selectedHoverBg: string;
  };
  
  // 新增增强功能（可选，不影响现有组件）
  palette?: {
    gray: ColorPalette;
    blue: ColorPalette;
    green: ColorPalette;
    red: ColorPalette;
    yellow: ColorPalette;
    purple: ColorPalette;
  };
  
  semantic?: {
    primary: SemanticColors;
    secondary: SemanticColors;
    success: SemanticColors;
    warning: SemanticColors;
    error: SemanticColors;
    info: SemanticColors;
  };
  
  state?: {
    hover: string;
    active: string;
    focus: string;
    selected: string;
  };
}

export interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ThemeBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ThemeFontSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface ThemeTypography {
  fontWeight: {
    regular: number;
    medium: number;
    bold: number;
  };
  lineHeight: {
    normal: number;
    relaxed: number;
    loose: number;
  };
  letterSpacing: {
    normal: string;
    wide: string;
    wider: string;
  };
}

export interface ThemeRadii {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  round: string;
}

export interface ThemeControlSizes {
  height: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface Theme {
  colors: ThemeColors;
  shadows: ThemeShadows;
  spacing: ThemeSpacing;
  breakpoints: ThemeBreakpoints;
  fontSizes: ThemeFontSizes;
  typography: ThemeTypography;
  radii: ThemeRadii;
  controlSizes: ThemeControlSizes;
}

export const lightTheme: Theme = {
  colors: {
    // 主色调 - 使用更现代的蓝色系
    primary: '#1677ff',
    // 次要色调 - 使用优雅的紫色系
    secondary: '#805ad5',
    // 成功色 - 使用清新的绿色
    success: '#38a169',
    // 警告色 - 使用温暖的橙色
    warning: '#dd6b20',
    // 错误色 - 使用鲜明的红色
    error: '#e53e3e',
    // 信息色 - 使用明亮的青色
    info: '#00b5d8',
    // 金色 - 保持原有的金色
    gold: '#fadb14',
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    // 表面色 - 使用更柔和的灰色
    surface: '#f7fafc',
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.25)',
    },
    // 边框色 - 使用更柔和的灰色
    border: 'rgba(0, 0, 0, 0.08)',
    divider: 'rgba(0, 0, 0, 0.08)',
    mask: 'rgba(0, 0, 0, 0.45)',
    skeleton: {
      background: 'rgba(0, 0, 0, 0.06)',
    },
    hover: {
      // 悬停色 - 使用更深的色调
      primary: '#2c5aa0',
      secondary: '#6b46c1',
      text: 'rgba(49, 130, 206, 0.08)',
    },
    disabled: {
      background: 'rgba(0, 0, 0, 0.08)',
      foreground: 'rgba(0, 0, 0, 0.26)',
    },
    menu: {
      selectedBg: 'rgba(49, 130, 206, 0.12)',
      selectedHoverBg: 'rgba(49, 130, 206, 0.18)',
    },
    
    // 新增颜色调色板（可选功能）
    palette: {
      gray: {
        50: '#f7fafc',
        100: '#edf2f7',
        200: '#e2e8f0',
        300: '#cbd5e0',
        400: '#a0aec0',
        500: '#718096',
        600: '#4a5568',
        700: '#2d3748',
        800: '#1a202c',
        900: '#171923',
      },
      blue: {
        50: '#ebf8ff',
        100: '#bee3f8',
        200: '#90cdf4',
        300: '#63b3ed',
        400: '#4299e1',
        500: '#3182ce',
        600: '#2b6cb0',
        700: '#2c5282',
        800: '#2a4365',
        900: '#1a365d',
      },
      green: {
        50: '#f0fff4',
        100: '#c6f6d5',
        200: '#9ae6b4',
        300: '#68d391',
        400: '#48bb78',
        500: '#38a169',
        600: '#2f855a',
        700: '#276749',
        800: '#22543d',
        900: '#1c4532',
      },
      red: {
        50: '#fff5f5',
        100: '#fed7d7',
        200: '#feb2b2',
        300: '#fc8181',
        400: '#f56565',
        500: '#e53e3e',
        600: '#c53030',
        700: '#a0aec0',
        800: '#742a2a',
        900: '#521b1b',
      },
      yellow: {
        50: '#fffff0',
        100: '#fefcbf',
        200: '#faf089',
        300: '#f6e05e',
        400: '#ecc94b',
        500: '#d69e2e',
        600: '#b7791f',
        700: '#975a16',
        800: '#744210',
        900: '#5f370e',
      },
      purple: {
        50: '#faf5ff',
        100: '#e9d8fd',
        200: '#d6bcfa',
        300: '#b794f4',
        400: '#9f7aea',
        500: '#805ad5',
        600: '#6b46c1',
        700: '#553c9a',
        800: '#44337a',
        900: '#322659',
      },
    },
    
    // 新增语义化颜色（可选功能）
    semantic: {
      primary: {
        main: '#3182ce',
        light: '#63b3ed',
        dark: '#2c5aa0',
        contrast: '#ffffff',
      },
      secondary: {
        main: '#805ad5',
        light: '#9f7aea',
        dark: '#6b46c1',
        contrast: '#ffffff',
      },
      success: {
        main: '#38a169',
        light: '#68d391',
        dark: '#2f855a',
        contrast: '#ffffff',
      },
      warning: {
        main: '#dd6b20',
        light: '#ed8936',
        dark: '#c05621',
        contrast: '#ffffff',
      },
      error: {
        main: '#e53e3e',
        light: '#fc8181',
        dark: '#c53030',
        contrast: '#ffffff',
      },
      info: {
        main: '#00b5d8',
        light: '#4fd1c7',
        dark: '#319795',
        contrast: '#ffffff',
      },
    },
    
    // 新增状态颜色（可选功能）
    state: {
      hover: 'rgba(0, 0, 0, 0.04)',
      active: 'rgba(0, 0, 0, 0.08)',
      focus: 'rgba(49, 130, 206, 0.2)',
      selected: 'rgba(49, 130, 206, 0.12)',
    },
  },
  shadows: {
    // 优化阴影效果，使其更自然
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
  typography: {
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
    letterSpacing: {
      normal: '0.01em',
      wide: '0.02em',
      wider: '0.03em',
    },
  },
  radii: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    round: '50%',
  },
  controlSizes: {
    height: {
      small: '24px',
      medium: '32px',
      large: '40px'
    }
  }
};

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    gold: '#fadb14',
    background: {
      // 暗色主题背景 - 使用更深的灰色
      default: '#1a202c',
      paper: '#2d3748',
    },
    // 暗色主题表面色
    surface: '#2d3748',
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.6)',
      disabled: 'rgba(255, 255, 255, 0.38)',
    },
    // 暗色主题边框色
    border: 'rgba(255, 255, 255, 0.08)',
    divider: 'rgba(255, 255, 255, 0.08)',
    mask: 'rgba(0, 0, 0, 0.65)',
    skeleton: {
      background: 'rgba(255, 255, 255, 0.06)',
    },
    hover: {
      // 暗色主题悬停色
      primary: '#63b3ed',
      secondary: '#9f7aea',
      text: 'rgba(99, 179, 237, 0.12)',
    },
    disabled: {
      background: 'rgba(255, 255, 255, 0.08)',
      foreground: 'rgba(255, 255, 255, 0.3)',
    },
    menu: {
      selectedBg: 'rgba(99, 179, 237, 0.24)',
      selectedHoverBg: 'rgba(99, 179, 237, 0.32)',
    },
    
    // 暗色主题调色板
    palette: {
      gray: {
        50: '#171923',
        100: '#1a202c',
        200: '#2d3748',
        300: '#4a5568',
        400: '#718096',
        500: '#a0aec0',
        600: '#cbd5e0',
        700: '#e2e8f0',
        800: '#edf2f7',
        900: '#f7fafc',
      },
      blue: {
        50: '#1a365d',
        100: '#2a4365',
        200: '#2c5282',
        300: '#2b6cb0',
        400: '#3182ce',
        500: '#4299e1',
        600: '#63b3ed',
        700: '#90cdf4',
        800: '#bee3f8',
        900: '#ebf8ff',
      },
      green: {
        50: '#1c4532',
        100: '#22543d',
        200: '#276749',
        300: '#2f855a',
        400: '#38a169',
        500: '#48bb78',
        600: '#68d391',
        700: '#9ae6b4',
        800: '#c6f6d5',
        900: '#f0fff4',
      },
      red: {
        50: '#521b1b',
        100: '#742a2a',
        200: '#a0aec0',
        300: '#c53030',
        400: '#e53e3e',
        500: '#f56565',
        600: '#fc8181',
        700: '#feb2b2',
        800: '#fed7d7',
        900: '#fff5f5',
      },
      yellow: {
        50: '#5f370e',
        100: '#744210',
        200: '#975a16',
        300: '#b7791f',
        400: '#d69e2e',
        500: '#ecc94b',
        600: '#f6e05e',
        700: '#faf089',
        800: '#fefcbf',
        900: '#fffff0',
      },
      purple: {
        50: '#322659',
        100: '#44337a',
        200: '#553c9a',
        300: '#6b46c1',
        400: '#805ad5',
        500: '#9f7aea',
        600: '#b794f4',
        700: '#d6bcfa',
        800: '#e9d8fd',
        900: '#faf5ff',
      },
    },
    
    // 暗色主题语义化颜色
    semantic: {
      primary: {
        main: '#63b3ed',
        light: '#90cdf4',
        dark: '#3182ce',
        contrast: '#1a202c',
      },
      secondary: {
        main: '#9f7aea',
        light: '#b794f4',
        dark: '#805ad5',
        contrast: '#1a202c',
      },
      success: {
        main: '#68d391',
        light: '#9ae6b4',
        dark: '#38a169',
        contrast: '#1a202c',
      },
      warning: {
        main: '#ed8936',
        light: '#f6ad55',
        dark: '#dd6b20',
        contrast: '#1a202c',
      },
      error: {
        main: '#fc8181',
        light: '#feb2b2',
        dark: '#e53e3e',
        contrast: '#1a202c',
      },
      info: {
        main: '#4fd1c7',
        light: '#81e6d9',
        dark: '#00b5d8',
        contrast: '#1a202c',
      },
    },
    
    // 暗色主题状态颜色
    state: {
      hover: 'rgba(255, 255, 255, 0.08)',
      active: 'rgba(255, 255, 255, 0.12)',
      focus: 'rgba(99, 179, 237, 0.3)',
      selected: 'rgba(99, 179, 237, 0.2)',
    },
  },
  controlSizes: {
    ...lightTheme.controlSizes
  }
}; 