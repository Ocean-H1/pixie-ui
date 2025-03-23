import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { MenuContext, useMenuContext } from './MenuContext';

export interface SubMenuProps {
  /**
   * 子菜单唯一标识符
   */
  id: string;
  /**
   * 子菜单标题
   */
  title: React.ReactNode;
  /**
   * 子菜单是否禁用
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
   * 子菜单内容
   */
  children: React.ReactNode;
}

const StyledSubMenu = styled.li<{
  theme: Theme;
}>`
  position: relative;
  list-style: none;
`;

const SubMenuTitle = styled.div<{
  open: boolean;
  disabled: boolean;
  mode: 'vertical' | 'horizontal';
  theme: Theme;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.text.disabled : theme.colors.text.primary};
  background-color: ${({ open, theme }) =>
    open ? theme.colors.menu?.selectedBg : 'transparent'};
  
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${({ open, disabled, theme }) =>
      disabled
        ? 'transparent'
        : open
        ? theme.colors.menu?.selectedHoverBg
        : theme.colors.hover.text};
  }
`;

const IconWrapper = styled.span<{
  open: boolean;
  mode: 'vertical' | 'horizontal';
}>`
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  font-size: 0.75rem;
  transform: ${({ open, mode }) =>
    mode === 'vertical'
      ? open
        ? 'rotate(90deg)'
        : 'rotate(0deg)'
      : open
      ? 'rotate(180deg)'
      : 'rotate(0deg)'};
  transition: transform 0.3s;
`;

const SubMenuContent = styled.ul<{
  open: boolean;
  mode: 'vertical' | 'horizontal';
  theme: Theme;
}>`
  margin: 0;
  padding: 0;
  list-style: none;
  transition: all 0.3s ease-in-out;
  
  // 垂直模式
  ${({ mode, open }) =>
    mode === 'vertical' &&
    `
    max-height: ${open ? '1000px' : '0'};
    overflow: hidden;
  `}
  
  // 水平模式
  ${({ mode, open, theme }) =>
    mode === 'horizontal' &&
    `
    position: absolute;
    min-width: 160px;
    left: 0;
    top: 100%;
    background-color: ${theme.colors.background};
    box-shadow: ${theme.shadows.md};
    border-radius: ${theme.radii.sm};
    z-index: 1000;
    visibility: ${open ? 'visible' : 'hidden'};
    opacity: ${open ? 1 : 0};
    transform: ${open ? 'translateY(0)' : 'translateY(-10px)'};
  `}
`;

/**
 * 子菜单组件
 * @param props 组件属性
 * @returns 子菜单组件
 */
export const SubMenu = React.forwardRef<HTMLLIElement, SubMenuProps>(
  ({ id, disabled = false, title, style, className, children }, ref) => {
    const theme = useTheme();
    const { mode, openKeys, toggleOpen } = useMenuContext();
    
    // 判断当前子菜单是否展开
    const isOpen = openKeys.includes(id);
    
    // 鼠标进入/离开事件的处理（仅用于水平模式）
    const [isHovered, setIsHovered] = useState(false);
    
    // 在水平模式下使用hover控制子菜单展开
    const open = mode === 'horizontal' ? isHovered : isOpen;
    
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled || mode === 'horizontal') return;
      toggleOpen(id);
    };
    
    // 向子组件传递菜单上下文
    const subMenuContextValue = {
      ...useMenuContext(),
      isInSubMenu: true,
    };
    
    return (
      <StyledSubMenu
        ref={ref}
        theme={theme}
        style={style}
        className={className}
        role="none"
        onMouseEnter={mode === 'horizontal' ? () => setIsHovered(true) : undefined}
        onMouseLeave={mode === 'horizontal' ? () => setIsHovered(false) : undefined}
      >
        <SubMenuTitle
          open={open}
          disabled={disabled}
          mode={mode}
          theme={theme}
          onClick={handleClick}
          role="menuitem"
          aria-disabled={disabled}
          aria-expanded={open}
        >
          {title}
          <IconWrapper open={open} mode={mode}>
            {mode === 'vertical' ? '›' : '▾'}
          </IconWrapper>
        </SubMenuTitle>
        <SubMenuContent open={open} mode={mode} theme={theme} role="menu">
          <MenuContext.Provider value={subMenuContextValue}>
            {children}
          </MenuContext.Provider>
        </SubMenuContent>
      </StyledSubMenu>
    );
  }
);

SubMenu.displayName = 'SubMenu'; 