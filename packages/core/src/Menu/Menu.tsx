import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { MenuContext, MenuMode } from './MenuContext';

export interface MenuProps {
  /**
   * 菜单模式，支持垂直和水平
   * @default 'vertical'
   */
  mode?: MenuMode;
  /**
   * 默认选中的菜单项 key
   */
  defaultSelectedKey?: string;
  /**
   * 当前选中的菜单项 key，受控模式
   */
  selectedKey?: string;
  /**
   * 默认展开的 SubMenu 的 keys
   */
  defaultOpenKeys?: string[];
  /**
   * 当前展开的 SubMenu 的 keys，受控模式
   */
  openKeys?: string[];
  /**
   * 选择菜单项时触发的回调
   */
  onSelect?: (key: string) => void;
  /**
   * 展开/收起子菜单时触发的回调
   */
  onOpenChange?: (keys: string[]) => void;
  /**
   * 菜单内容
   */
  children: React.ReactNode;
}

const StyledMenu = styled.ul<{
  mode: MenuMode;
  theme: Theme;
}>`
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  background-color: ${({ theme }) => theme.colors.background};
  
  // 水平布局
  ${({ mode }) =>
    mode === 'horizontal' &&
    `
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid;
    border-color: inherit;
  `}
  
  // 垂直布局
  ${({ mode }) =>
    mode === 'vertical' &&
    `
    width: 100%;
  `}
`;

/**
 * 菜单组件，支持垂直和水平布局，可包含菜单项和子菜单
 * @param props 组件属性
 * @returns 菜单组件
 */
export const Menu: React.FC<MenuProps> = ({
  mode = 'vertical',
  defaultSelectedKey,
  selectedKey: propSelectedKey,
  defaultOpenKeys = [],
  openKeys: propOpenKeys,
  onSelect,
  onOpenChange,
  children,
}) => {
  // 内部状态管理
  const [selectedKeyState, setSelectedKeyState] = useState<string | null>(defaultSelectedKey || null);
  const [openKeysState, setOpenKeysState] = useState<string[]>(defaultOpenKeys);
  
  // 判断是否为受控组件
  const isSelectedControlled = propSelectedKey !== undefined;
  const isOpenControlled = propOpenKeys !== undefined;
  
  // 获取当前值（受控或非受控）
  const selectedKey = isSelectedControlled ? propSelectedKey : selectedKeyState;
  const openKeys = isOpenControlled ? propOpenKeys : openKeysState;
  
  const theme = useTheme();
  
  // 选择菜单项的处理函数
  const handleSelect = useCallback((key: string) => {
    if (!isSelectedControlled) {
      setSelectedKeyState(key);
    }
    onSelect?.(key);
  }, [isSelectedControlled, onSelect]);
  
  // 切换子菜单展开状态的处理函数
  const toggleOpen = useCallback((key: string) => {
    const newOpenKeys = openKeys?.includes(key)
      ? openKeys.filter((k) => k !== key)
      : [...(openKeys || []), key];
      
    if (!isOpenControlled) {
      setOpenKeysState(newOpenKeys);
    }
    
    onOpenChange?.(newOpenKeys);
  }, [isOpenControlled, openKeys, onOpenChange]);
  
  return (
    <MenuContext.Provider
      value={{
        mode,
        selectedKey,
        openKeys: openKeys || [],
        onSelect: handleSelect,
        toggleOpen,
      }}
    >
      <StyledMenu mode={mode} theme={theme} role="menu">
        {children}
      </StyledMenu>
    </MenuContext.Provider>
  );
}; 