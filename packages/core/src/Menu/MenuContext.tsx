import { createContext, useContext } from 'react';

export type MenuMode = 'vertical' | 'horizontal';

export interface MenuContextProps {
  /**
   * 菜单模式
   */
  mode: MenuMode;
  /**
   * 当前选中的菜单项 key
   */
  selectedKey: string | null;
  /**
   * 展开的 SubMenu 的 keys
   */
  openKeys: string[];
  /**
   * 是否为子菜单的子项
   */
  isInSubMenu?: boolean;
  /**
   * 设置当前选中的菜单项
   */
  onSelect: (key: string) => void;
  /**
   * 切换子菜单展开状态
   */
  toggleOpen: (key: string) => void;
}

export const MenuContext = createContext<MenuContextProps | undefined>(undefined);

/**
 * 使用菜单上下文的自定义钩子
 * @returns 菜单上下文
 */
export const useMenuContext = (): MenuContextProps => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuProvider');
  }
  return context;
}; 