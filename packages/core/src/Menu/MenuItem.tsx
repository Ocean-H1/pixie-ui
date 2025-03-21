import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { useMenu } from './Menu';

export interface MenuItemProps {
  /**
   * 菜单项的唯一标识
   */
  key: string;
  /**
   * 菜单项的图标
   */
  icon?: ReactNode;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 点击回调
   */
  onClick?: () => void;
  /**
   * 子元素
   */
  children: ReactNode;
}

const MenuItemWrapper = styled.li<{
  theme: Theme;
  $mode: 'horizontal' | 'vertical';
  $isSelected: boolean;
  $disabled: boolean;
  $collapsed: boolean;
}>`
  display: flex;
  align-items: center;
  padding: ${({ theme, $mode }) =>
    $mode === 'horizontal'
      ? `0 ${theme.spacing.md}`
      : `${theme.spacing.sm} ${theme.spacing.md}`};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  color: ${({ theme, $isSelected, $disabled }) =>
    $disabled
      ? theme.colors.text.disabled
      : $isSelected
      ? theme.colors.primary
      : theme.colors.text.primary};
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? `${theme.colors.hover.text}` : 'transparent'};
  border-right: ${({ theme, $isSelected, $mode }) =>
    $isSelected && $mode === 'vertical'
      ? `3px solid ${theme.colors.primary}`
      : 'none'};
  border-bottom: ${({ theme, $isSelected, $mode }) =>
    $isSelected && $mode === 'horizontal'
      ? `2px solid ${theme.colors.primary}`
      : 'none'};
  height: ${({ $mode }) => 
    $mode === 'horizontal' ? '100%' : 'auto'};
  
  &:hover {
    background-color: ${({ theme, $disabled }) =>
      $disabled ? 'transparent' : theme.colors.hover.text};
  }
  
  ${({ $collapsed }) =>
    $collapsed &&
    `
    justify-content: center;
    padding: 12px 0;
    text-align: center;
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    ${({ $mode }) =>
      $mode === 'horizontal' &&
      `
      height: auto;
    `}
  }
`;

const ItemContent = styled.div<{
  theme: Theme;
  $collapsed: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  
  ${({ $collapsed }) =>
    $collapsed &&
    `
    flex-direction: column;
    gap: 4px;
  `}
`;

const IconWrapper = styled.span<{
  theme: Theme;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const TextWrapper = styled.span<{
  theme: Theme;
  $collapsed: boolean;
}>`
  transition: opacity 0.3s;
  opacity: ${({ $collapsed }) => ($collapsed ? '0' : '1')};
  display: ${({ $collapsed }) => ($collapsed ? 'none' : 'block')};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    opacity: 1;
  }
`;

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { children, icon, disabled = false, onClick } = props;
  const itemKey = props.key as string;
  const theme = useTheme();
  const { mode, selectedKeys, onSelect, collapsed } = useMenu();
  
  const isSelected = selectedKeys.includes(itemKey);
  
  const handleClick = () => {
    if (disabled) return;
    
    if (onClick) {
      onClick();
    }
    
    onSelect(itemKey);
  };
  
  return (
    <MenuItemWrapper
      theme={theme}
      $mode={mode}
      $isSelected={isSelected}
      $disabled={disabled}
      $collapsed={collapsed}
      onClick={handleClick}
    >
      <ItemContent theme={theme} $collapsed={collapsed}>
        {icon && <IconWrapper theme={theme}>{icon}</IconWrapper>}
        <TextWrapper theme={theme} $collapsed={collapsed}>
          {children}
        </TextWrapper>
      </ItemContent>
    </MenuItemWrapper>
  );
}; 