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
    // 主色调 - 使用更现代的蓝色系，参考 Chakra UI 的 blue.500
    primary: '#3182ce',
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
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgb(255, 255, 255)',
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
  },
  controlSizes: {
    ...lightTheme.controlSizes
  }
}; 