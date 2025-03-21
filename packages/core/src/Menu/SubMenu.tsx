import React, { ReactNode, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { useMenu } from './Menu';

export interface SubMenuProps {
  /**
   * 子菜单的唯一标识
   */
  key: string;
  /**
   * 子菜单标题
   */
  title: ReactNode;
  /**
   * 子菜单图标
   */
  icon?: ReactNode;
  /**
   * 子菜单内容
   */
  children: ReactNode;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
}

const SubMenuWrapper = styled.li<{
  theme: Theme;
}>`
  list-style: none;
  position: relative;
`;

const SubMenuTitle = styled.div<{
  theme: Theme;
  $mode: 'horizontal' | 'vertical';
  $isOpen: boolean;
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
  color: ${({ theme, $isOpen, $disabled }) =>
    $disabled
      ? theme.colors.text.disabled
      : $isOpen
      ? theme.colors.primary
      : theme.colors.text.primary};
  background-color: ${({ theme, $isOpen }) =>
    $isOpen ? `${theme.colors.hover.text}` : 'transparent'};
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

const TitleContent = styled.div<{
  theme: Theme;
  $collapsed: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  ${({ $collapsed }) =>
    $collapsed &&
    `
    flex-direction: column;
    gap: 4px;
  `}
`;

const TitleLabel = styled.div<{
  theme: Theme;
  $collapsed: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
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

const ArrowIcon = styled.span<{
  theme: Theme;
  $isOpen: boolean;
  $mode: 'horizontal' | 'vertical';
  $collapsed: boolean;
}>`
  display: ${({ $collapsed }) => ($collapsed ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  transform: rotate(${({ $isOpen, $mode }) =>
    $mode === 'horizontal'
      ? $isOpen
        ? '180deg'
        : '0deg'
      : $isOpen
      ? '90deg'
      : '0deg'});
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const SubMenuContent = styled.ul<{
  theme: Theme;
  $mode: 'horizontal' | 'vertical';
  $isOpen: boolean;
  $collapsed: boolean;
}>`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  transition: height 0.3s ease;
  background-color: ${({ theme }) => theme.colors.background};
  
  ${({ $mode, $isOpen, theme, $collapsed }) =>
    $mode === 'horizontal'
      ? `
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 160px;
      box-shadow: ${theme.shadows.md};
      border-radius: ${theme.radii.sm};
      z-index: 1000;
      display: ${$isOpen ? 'block' : 'none'};
      `
      : `
      padding-left: ${$collapsed ? '0' : theme.spacing.md};
      max-height: ${$isOpen ? '1000px' : '0px'};
      border-left: ${$collapsed ? 'none' : `1px solid ${theme.colors.border}`};
      margin-left: ${$collapsed ? '0' : theme.spacing.md};
      `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
    box-shadow: none;
    min-width: auto;
    border-radius: 0;
    max-height: ${({ $isOpen }) => ($isOpen ? '1000px' : '0px')};
  }
`;

export const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { title, icon, disabled = false, children } = props;
  const subMenuKey = props.key as string;
  const theme = useTheme();
  const { mode, openKeys, onOpenChange, collapsed } = useMenu();
  
  const isOpen = openKeys.includes(subMenuKey);
  const [isHovering, setIsHovering] = useState(false);
  
  // 处理悬停展开（仅在水平模式和非移动设备下）
  useEffect(() => {
    if (mode === 'horizontal' && isHovering && !disabled) {
      onOpenChange(subMenuKey);
    }
  }, [isHovering, mode]);
  
  const handleClick = () => {
    if (disabled) return;
    onOpenChange(subMenuKey);
  };
  
  const handleMouseEnter = () => {
    if (mode === 'horizontal' && !disabled) {
      setIsHovering(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (mode === 'horizontal' && !disabled) {
      setIsHovering(false);
    }
  };
  
  return (
    <SubMenuWrapper
      theme={theme}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SubMenuTitle
        theme={theme}
        $mode={mode}
        $isOpen={isOpen}
        $disabled={disabled}
        $collapsed={collapsed}
        onClick={handleClick}
      >
        <TitleContent theme={theme} $collapsed={collapsed}>
          <TitleLabel theme={theme} $collapsed={collapsed}>
            {icon && <IconWrapper theme={theme}>{icon}</IconWrapper>}
            <TextWrapper theme={theme} $collapsed={collapsed}>
              {title}
            </TextWrapper>
          </TitleLabel>
          
          <ArrowIcon
            theme={theme}
            $isOpen={isOpen}
            $mode={mode}
            $collapsed={collapsed}
          >
            {mode === 'horizontal' ? '▼' : '▶'}
          </ArrowIcon>
        </TitleContent>
      </SubMenuTitle>
      
      <SubMenuContent
        theme={theme}
        $mode={mode}
        $isOpen={isOpen || (mode === 'horizontal' && isHovering)}
        $collapsed={collapsed}
      >
        {children}
      </SubMenuContent>
    </SubMenuWrapper>
  );
}; 