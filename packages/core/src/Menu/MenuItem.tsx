import React from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { useMenuContext } from './MenuContext';

export interface MenuItemProps {
  /**
   * 菜单项唯一标识符
   */
  id: string;
  /**
   * 菜单项是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 自定义 className
   */
  className?: string;
  /**
   * 菜单项内容
   */
  children: React.ReactNode;
}

const StyledMenuItem = styled.li<{
  selected: boolean;
  disabled: boolean;
  isInSubMenu: boolean;
  mode: 'vertical' | 'horizontal';
  theme: Theme;
}>`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  margin: ${({ isInSubMenu, theme }) => isInSubMenu ? `${theme.spacing.xs} 0` : '0'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.radii.xs};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.text.disabled : theme.colors.text.primary};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.menu?.selectedBg : 'transparent'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  
  // 水平模式
  ${({ mode }) =>
    mode === 'horizontal' &&
    `
    display: inline-flex;
  `}

  // 垂直模式下，子菜单中的项
  ${({ isInSubMenu, mode }) =>
    isInSubMenu && mode === 'vertical' &&
    `
    padding-left: 24px;
  `}

  &:hover {
    background-color: ${({ selected, disabled, theme }) =>
      disabled
        ? 'transparent'
        : selected
        ? theme.colors.menu?.selectedHoverBg
        : theme.colors.hover.text};
  }
`;

/**
 * 菜单项组件
 * @param props 组件属性
 * @returns 菜单项组件
 */
export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ id, disabled = false, style, className, children }, ref) => {
    const theme = useTheme();
    const { selectedKey, onSelect, mode, isInSubMenu = false } = useMenuContext();
    const selected = selectedKey === id;

    const handleClick = (e: React.MouseEvent) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onSelect(id);
    };

    return (
      <StyledMenuItem
        ref={ref}
        selected={selected}
        disabled={disabled}
        isInSubMenu={isInSubMenu}
        mode={mode}
        theme={theme}
        onClick={handleClick}
        style={style}
        className={className}
        role="menuitem"
        aria-disabled={disabled}
        aria-selected={selected}
      >
        {children}
      </StyledMenuItem>
    );
  }
);

MenuItem.displayName = 'MenuItem'; 