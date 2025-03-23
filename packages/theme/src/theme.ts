export interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  background: string;
  surface: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  border: string;
  hover: {
    primary: string;
    secondary: string;
    text: string;
  };
  disabled: {
    background: string;
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

export interface Theme {
  colors: ThemeColors;
  shadows: ThemeShadows;
  spacing: ThemeSpacing;
  breakpoints: ThemeBreakpoints;
  fontSizes: ThemeFontSizes;
  typography: ThemeTypography;
  radii: ThemeRadii;
}

export const lightTheme: Theme = {
  colors: {
    primary: '#1976d2',
    secondary: '#9c27b0',
    success: '#2e7d32',
    warning: '#ed6c02',
    error: '#d32f2f',
    info: '#0288d1',
    background: '#ffffff',
    surface: '#f5f5f5',
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    border: 'rgba(0, 0, 0, 0.12)',
    hover: {
      primary: '#1565c0',
      secondary: '#7b1fa2',
      text: 'rgba(25, 118, 210, 0.08)',
    },
    disabled: {
      background: 'rgba(0, 0, 0, 0.12)',
    },
    menu: {
      selectedBg: 'rgba(25, 118, 210, 0.12)',
      selectedHoverBg: 'rgba(25, 118, 210, 0.18)',
    },
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
    lg: '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)',
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
};

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#121212',
    surface: '#1e1e1e',
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.6)',
      disabled: 'rgba(255, 255, 255, 0.38)',
    },
    border: 'rgba(255, 255, 255, 0.12)',
    hover: {
      ...lightTheme.colors.hover,
    },
    disabled: {
      background: 'rgba(255, 255, 255, 0.12)',
    },
    menu: {
      selectedBg: 'rgba(25, 118, 210, 0.24)',
      selectedHoverBg: 'rgba(25, 118, 210, 0.32)',
    },
  },
}; 