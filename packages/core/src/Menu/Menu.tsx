import React, { createContext, useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { useMediaQuery } from '@pixie-ui/hooks';

// 菜单模式
export type MenuMode = 'horizontal' | 'vertical';

// 菜单上下文类型
export interface MenuContextType {
  mode: MenuMode;
  collapsed: boolean;
  selectedKeys: string[];
  openKeys: string[];
  onSelect: (key: string) => void;
  onOpenChange: (key: string) => void;
}

// 创建菜单上下文
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// 使用菜单上下文的钩子函数
export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu必须在Menu组件内使用');
  }
  return context;
};

// 菜单容器样式
const MenuContainer = styled.ul<{
  theme: Theme;
  $mode: MenuMode;
  $collapsed: boolean;
}>`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  border-right: ${({ theme, $mode }) =>
    $mode === 'vertical' ? `1px solid ${theme.colors.border}` : 'none'};
  display: flex;
  flex-direction: ${({ $mode }) => ($mode === 'horizontal' ? 'row' : 'column')};
  width: ${({ $mode, $collapsed }) =>
    $mode === 'vertical' && $collapsed ? '80px' : '100%'};
  transition: width 0.3s ease;
  overflow: ${({ $collapsed }) => ($collapsed ? 'visible' : 'visible')};
  
  ${({ $mode, theme }) =>
    $mode === 'horizontal' &&
    `
    border-bottom: 1px solid ${theme.colors.border};
    height: 56px;
    align-items: center;
    flex-wrap: wrap;
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    ${({ $mode }) =>
      $mode === 'horizontal' &&
      `
      height: auto;
      border-bottom: none;
      border-right: 1px solid;
    `}
  }
`;

// 菜单组件属性
export interface MenuProps {
  /**
   * 菜单模式
   * @default 'vertical'
   */
  mode?: MenuMode;
  /**
   * 默认选中的菜单项key
   */
  defaultSelectedKeys?: string[];
  /**
   * 选中的菜单项key
   */
  selectedKeys?: string[];
  /**
   * 默认展开的子菜单key
   */
  defaultOpenKeys?: string[];
  /**
   * 展开的子菜单key
   */
  openKeys?: string[];
  /**
   * 是否收起
   * @default false
   */
  collapsed?: boolean;
  /**
   * 收起状态改变回调
   */
  onCollapse?: (collapsed: boolean) => void;
  /**
   * 选择菜单项回调
   */
  onSelect?: (key: string) => void;
  /**
   * 子菜单展开/关闭回调
   */
  onOpenChange?: (key: string) => void;
  /**
   * 自动响应式收起的断点，传入数字或断点值
   */
  breakpoint?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * 子元素
   */
  children: React.ReactNode;
}

/**
 * 菜单组件
 */
export const Menu: React.FC<MenuProps> = ({
  mode = 'vertical',
  defaultSelectedKeys = [],
  selectedKeys: propSelectedKeys,
  defaultOpenKeys = [],
  openKeys: propOpenKeys,
  collapsed = false,
  onCollapse,
  onSelect,
  onOpenChange,
  breakpoint,
  children,
}) => {
  const theme = useTheme();
  
  // 内部状态管理
  const [internalSelectedKeys, setInternalSelectedKeys] = useState<string[]>(
    propSelectedKeys || defaultSelectedKeys
  );
  const [internalOpenKeys, setInternalOpenKeys] = useState<string[]>(
    propOpenKeys || defaultOpenKeys
  );
  const [internalCollapsed, setInternalCollapsed] = useState<boolean>(collapsed);
  
  // 处理外部selectedKeys属性变化
  useEffect(() => {
    if (propSelectedKeys) {
      setInternalSelectedKeys(propSelectedKeys);
    }
  }, [propSelectedKeys]);
  
  // 处理外部openKeys属性变化
  useEffect(() => {
    if (propOpenKeys) {
      setInternalOpenKeys(propOpenKeys);
    }
  }, [propOpenKeys]);
  
  // 处理外部collapsed属性变化
  useEffect(() => {
    setInternalCollapsed(collapsed);
  }, [collapsed]);
  
  // 处理响应式收起
  const getBreakpointValue = (bp: number | string): string => {
    if (typeof bp === 'number') {
      return `${bp}px`;
    }
    return theme.breakpoints[bp as keyof typeof theme.breakpoints] || theme.breakpoints.md;
  };
  
  const breakpointValue = breakpoint ? getBreakpointValue(breakpoint) : null;
  const isBreakpoint = useMediaQuery(
    breakpointValue ? `(max-width: ${breakpointValue})` : ''
  );
  
  useEffect(() => {
    if (breakpoint && isBreakpoint !== internalCollapsed) {
      setInternalCollapsed(isBreakpoint);
      onCollapse?.(isBreakpoint);
    }
  }, [isBreakpoint, breakpoint]);
  
  // 选择菜单项
  const handleSelect = (key: string) => {
    if (!propSelectedKeys) {
      setInternalSelectedKeys([key]);
    }
    onSelect?.(key);
  };
  
  // 切换子菜单
  const handleOpenChange = (key: string) => {
    if (!propOpenKeys) {
      const newOpenKeys = [...internalOpenKeys];
      const keyIndex = newOpenKeys.indexOf(key);
      
      if (keyIndex >= 0) {
        newOpenKeys.splice(keyIndex, 1);
      } else {
        newOpenKeys.push(key);
      }
      
      setInternalOpenKeys(newOpenKeys);
    }
    
    onOpenChange?.(key);
  };
  
  // 菜单上下文值
  const menuContextValue: MenuContextType = {
    mode,
    collapsed: internalCollapsed,
    selectedKeys: internalSelectedKeys,
    openKeys: internalOpenKeys,
    onSelect: handleSelect,
    onOpenChange: handleOpenChange,
  };
  
  return (
    <MenuContext.Provider value={menuContextValue}>
      <MenuContainer theme={theme} $mode={mode} $collapsed={internalCollapsed}>
        {children}
      </MenuContainer>
    </MenuContext.Provider>
  );
}; 