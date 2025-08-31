# Pixie UI 主题系统

Pixie UI 提供了强大而灵活的主题系统，支持亮色/暗色主题切换、自定义主题配置和颜色调色板。

## 特性

- 🎨 **完整的颜色系统**：支持颜色调色板和语义化颜色
- 🌓 **主题模式切换**：支持亮色、暗色和自动模式
- 🔧 **自定义主题**：支持部分或完全自定义主题配置
- 📱 **响应式设计**：自动适配系统主题偏好
- 🎯 **向后兼容**：保持与现有组件的完全兼容

## 基础使用

### 1. 基本主题提供者

```tsx
import React from 'react';
import { ThemeProvider } from '@pixie-ui/theme';
import { Button } from '@pixie-ui/core';

const App = () => (
  <ThemeProvider>
    <Button variant="primary">使用默认主题</Button>
  </ThemeProvider>
);
```

### 2. 自定义主题

```tsx
import React from 'react';
import { ThemeProvider } from '@pixie-ui/theme';
import { Button } from '@pixie-ui/core';

const customTheme = {
  colors: {
    primary: '#1890ff',
    secondary: '#722ed1',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
  },
  radii: {
    sm: '6px',
    md: '8px',
    lg: '12px',
  },
};

const App = () => (
  <ThemeProvider theme={customTheme}>
    <Button variant="primary">自定义主题按钮</Button>
  </ThemeProvider>
);
```

### 3. 主题模式切换

```tsx
import React from 'react';
import { ThemeProvider, ThemeToggle } from '@pixie-ui/theme';
import { Button } from '@pixie-ui/core';

const App = () => (
  <ThemeProvider mode="auto">
    <div>
      <ThemeToggle variant="icon" />
      <ThemeToggle variant="button" showLabels />
      <Button variant="primary">主题切换按钮</Button>
    </div>
  </ThemeProvider>
);
```

## 高级功能

### 1. 使用主题上下文

```tsx
import React from 'react';
import { useThemeContext } from '@pixie-ui/theme';

const ThemeInfo = () => {
  const { theme, mode, isDark, toggleMode } = useThemeContext();
  
  return (
    <div>
      <p>当前模式: {mode}</p>
      <p>是否为暗色主题: {isDark ? '是' : '否'}</p>
      <p>主色调: {theme.colors.primary}</p>
      <button onClick={toggleMode}>切换主题</button>
    </div>
  );
};
```

### 2. 使用颜色调色板

```tsx
import React from 'react';
import { useTheme } from '@pixie-ui/theme';

const ColorPaletteDemo = () => {
  const theme = useTheme();
  
  return (
    <div>
      <h3>蓝色调色板</h3>
      <div style={{ display: 'flex', gap: '8px' }}>
        {theme.colors.palette?.blue && Object.entries(theme.colors.palette.blue).map(([key, color]) => (
          <div
            key={key}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: color,
              border: '1px solid #ccc',
            }}
            title={`blue.${key}: ${color}`}
          />
        ))}
      </div>
    </div>
  );
};
```

### 3. 使用语义化颜色

```tsx
import React from 'react';
import { useTheme } from '@pixie-ui/theme';

const SemanticColorsDemo = () => {
  const theme = useTheme();
  
  return (
    <div>
      <h3>语义化颜色</h3>
      <div style={{ display: 'flex', gap: '16px' }}>
        {theme.colors.semantic && Object.entries(theme.colors.semantic).map(([key, colors]) => (
          <div key={key}>
            <h4>{key}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ backgroundColor: colors.main, color: colors.contrast, padding: '8px' }}>
                Main
              </div>
              <div style={{ backgroundColor: colors.light, color: colors.contrast, padding: '8px' }}>
                Light
              </div>
              <div style={{ backgroundColor: colors.dark, color: colors.contrast, padding: '8px' }}>
                Dark
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
```

## 主题工具函数

### 1. 生成颜色调色板

```tsx
import { generateColorPalette } from '@pixie-ui/theme';

const bluePalette = generateColorPalette('#3182ce');
console.log(bluePalette);
// 输出: { 50: '#3182ce0a', 100: '#3182ce1a', ... }
```

### 2. 生成语义化颜色

```tsx
import { generateSemanticColors } from '@pixie-ui/theme';

const primaryColors = generateSemanticColors('#3182ce', false);
console.log(primaryColors);
// 输出: { main: '#3182ce', light: '#3182ce80', dark: '#3182cecc', contrast: '#ffffff' }
```

### 3. 获取主题颜色

```tsx
import { getThemeColor, useTheme } from '@pixie-ui/theme';

const ColorDemo = () => {
  const theme = useTheme();
  
  const primaryColor = getThemeColor(theme, 'primary');
  const semanticPrimary = getThemeColor(theme, 'semantic.primary.main');
  
  return (
    <div>
      <p>主色调: {primaryColor}</p>
      <p>语义化主色调: {semanticPrimary}</p>
    </div>
  );
};
```

### 4. 验证主题配置

```tsx
import { validateTheme } from '@pixie-ui/theme';

const customTheme = {
  colors: {
    primary: '#1890ff',
    // 缺少其他必需颜色
  },
};

const validation = validateTheme(customTheme);
console.log(validation);
// 输出: { isValid: false, errors: ['Missing required color: secondary', ...] }
```

## 主题配置参考

### 完整的主题接口

```typescript
interface Theme {
  colors: {
    // 基础颜色
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    
    // 背景和表面
    background: {
      default: string;
      paper: string;
    };
    surface: string;
    
    // 文本颜色
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    
    // 边框和分割线
    border: string;
    divider: string;
    mask: string;
    
    // 状态颜色
    hover: {
      primary: string;
      secondary: string;
      text: string;
    };
    disabled: {
      background: string;
      foreground: string;
    };
    
    // 可选：颜色调色板
    palette?: {
      gray: ColorPalette;
      blue: ColorPalette;
      green: ColorPalette;
      red: ColorPalette;
      yellow: ColorPalette;
      purple: ColorPalette;
    };
    
    // 可选：语义化颜色
    semantic?: {
      primary: SemanticColors;
      secondary: SemanticColors;
      success: SemanticColors;
      warning: SemanticColors;
      error: SemanticColors;
      info: SemanticColors;
    };
    
    // 可选：状态颜色
    state?: {
      hover: string;
      active: string;
      focus: string;
      selected: string;
    };
  };
  
  // 其他设计令牌
  shadows: ThemeShadows;
  spacing: ThemeSpacing;
  breakpoints: ThemeBreakpoints;
  fontSizes: ThemeFontSizes;
  typography: ThemeTypography;
  radii: ThemeRadii;
  controlSizes: ThemeControlSizes;
}
```

## 最佳实践

1. **渐进式采用**：新功能都是可选的，可以逐步采用
2. **语义化命名**：使用语义化颜色名称而不是具体的颜色值
3. **一致性**：在整个应用中保持颜色使用的一致性
4. **可访问性**：确保颜色对比度符合可访问性标准
5. **性能优化**：避免在渲染过程中动态生成主题

## 迁移指南

现有的组件代码无需修改，新功能完全向后兼容：

```tsx
// 现有代码继续工作
const theme = useTheme();
const primaryColor = theme.colors.primary; // ✅ 正常工作

// 新功能可选使用
const semanticPrimary = theme.colors.semantic?.primary.main; // ✅ 新功能
const bluePalette = theme.colors.palette?.blue; // ✅ 新功能
```
