import React, { CSSProperties, ReactNode, useCallback, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { SelectOption, SelectPlacement } from './Select';
import { VirtualList } from './VirtualList';

export interface SelectDropdownProps {
  /**
   * 下拉框是否可见
   */
  visible: boolean;
  /**
   * 选项数据
   */
  options: SelectOption[];
  /**
   * 下拉框位置
   */
  placement?: SelectPlacement;
  /**
   * 选中的项
   */
  selectedValues?: (string | number)[];
  /**
   * 下拉框宽度是否与选择器同宽
   */
  matchWidth?: boolean | number;
  /**
   * 下拉框的样式
   */
  style?: CSSProperties;
  /**
   * 下拉框的类名
   */
  className?: string;
  /**
   * 当下拉列表为空时显示的内容
   */
  notFoundContent?: ReactNode;
  /**
   * 是否启用虚拟滚动
   */
  virtual?: boolean;
  /**
   * 设置滚动高度
   */
  listHeight?: number;
  /**
   * 渲染选项的自定义函数
   */
  optionRender?: (option: SelectOption, info: { index: number }) => ReactNode;
  /**
   * 搜索关键词
   */
  searchValue?: string;
  /**
   * 选中选项时触发的回调
   */
  onSelect?: (value: string | number, option: SelectOption) => void;
  /**
   * 下拉列表滚动时的回调
   */
  onPopupScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
  /**
   * 自定义下拉框内容
   */
  dropdownRender?: (originNode: ReactNode) => ReactNode;
}

const DropdownWrapper = styled.div<{
  theme: Theme;
  $visible: boolean;
  $placement: SelectPlacement;
  $width?: string | number;
}>`
  position: absolute;
  z-index: 1050;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  background-color: ${({ theme }) => theme.colors.background.default};
  border-radius: ${({ theme }) => theme.radii.sm};
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  ${({ $width }) => ($width ? `width: ${typeof $width === 'number' ? `${$width}px` : $width};` : 'min-width: 100%;')}
  
  ${({ $placement }) => {
    switch ($placement) {
      case 'bottomLeft':
        return `
          left: 0;
          top: 100%;
          margin-top: 4px;
        `;
      case 'bottomRight':
        return `
          right: 0;
          top: 100%;
          margin-top: 4px;
        `;
      case 'topLeft':
        return `
          left: 0;
          bottom: 100%;
          margin-bottom: 4px;
        `;
      case 'topRight':
        return `
          right: 0;
          bottom: 100%;
          margin-bottom: 4px;
        `;
      default:
        return `
          left: 0;
          top: 100%;
          margin-top: 4px;
        `;
    }
  }}
`;

const OptionsList = styled.div<{
  theme: Theme;
  $maxHeight?: number;
}>`
  max-height: ${({ $maxHeight }) => ($maxHeight ? `${$maxHeight}px` : '256px')};
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  
  /* 滚动条样式 */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const OptionItem = styled.div<{
  theme: Theme;
  $selected: boolean;
  $disabled: boolean;
}>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
  color: ${({ theme, $disabled }) => ($disabled ? theme.colors.text.disabled : theme.colors.text.primary)};
  background-color: ${({ theme, $selected }) => ($selected ? theme.colors.menu?.selectedBg : 'transparent')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  
  &:hover {
    background-color: ${({ theme, $selected, $disabled }) => 
      $disabled ? 'transparent' : ($selected ? theme.colors.menu?.selectedHoverBg : theme.colors.hover.text)};
  }
`;

const EmptyContent = styled.div<{
  theme: Theme;
}>`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.md}`};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
`;

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  visible,
  options = [],
  placement = 'bottomLeft',
  selectedValues = [],
  matchWidth = true,
  style,
  className,
  notFoundContent = '无匹配结果',
  virtual = true,
  listHeight = 256,
  optionRender,
  searchValue = '',
  onSelect,
  onPopupScroll,
  dropdownRender,
}) => {
  const theme = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // 处理选项点击
  const handleOptionClick = useCallback((option: SelectOption) => {
    if (option.disabled) {
      return;
    }
    onSelect?.(option.value, option);
  }, [onSelect]);
  
  // 根据搜索关键词过滤选项
  const filteredOptions = useMemo(() => {
    if (!searchValue) {
      return options;
    }
    
    return options.filter(option => {
      const optionLabel = String(option.label).toLowerCase();
      const searchText = searchValue.toLowerCase();
      return optionLabel.includes(searchText);
    });
  }, [options, searchValue]);
  
  // 渲染选项列表
  const renderOptions = useMemo(() => {
    if (filteredOptions.length === 0) {
      return <EmptyContent theme={theme}>{notFoundContent}</EmptyContent>;
    }
    
    return filteredOptions.map((option, index) => {
      const isSelected = selectedValues.includes(option.value);
      const optionContent = optionRender 
        ? optionRender(option, { index }) 
        : option.label;
        
      return (
        <OptionItem
          key={option.key || option.value}
          theme={theme}
          $selected={isSelected}
          $disabled={!!option.disabled}
          onClick={() => handleOptionClick(option)}
        >
          {optionContent}
        </OptionItem>
      );
    });
  }, [filteredOptions, selectedValues, theme, handleOptionClick, optionRender, notFoundContent]);
  
  // 处理下拉框滚动
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    onPopupScroll?.(e);
  }, [onPopupScroll]);
  
  // 为虚拟列表准备的渲染项函数
  const renderListItem = useCallback((option: SelectOption, index: number) => {
    const isSelected = selectedValues.includes(option.value);
    const optionContent = optionRender 
      ? optionRender(option, { index }) 
      : option.label;
      
    return (
      <OptionItem
        key={option.key || option.value}
        theme={theme}
        $selected={isSelected}
        $disabled={!!option.disabled}
        onClick={() => handleOptionClick(option)}
      >
        {optionContent}
      </OptionItem>
    );
  }, [handleOptionClick, optionRender, selectedValues, theme]);
  
  // 准备下拉内容
  const dropdownContent = useMemo(() => {
    if (filteredOptions.length === 0) {
      return <EmptyContent theme={theme}>{notFoundContent}</EmptyContent>;
    }
    
    // 根据virtual参数决定是否使用虚拟滚动
    if (virtual && filteredOptions.length > 50) {
      return (
        <VirtualList
          dataSource={filteredOptions}
          itemHeight={32} // 选项高度，可以根据实际情况调整
          height={listHeight}
          renderItem={renderListItem}
          onScroll={handleScroll}
        />
      );
    } else {
      return (
        <OptionsList theme={theme} $maxHeight={listHeight} onScroll={handleScroll}>
          {renderOptions}
        </OptionsList>
      );
    }
  }, [filteredOptions, handleScroll, listHeight, notFoundContent, renderListItem, renderOptions, theme, virtual]);
  
  const finalContent = dropdownRender ? dropdownRender(dropdownContent) : dropdownContent;
  
  return (
    <DropdownWrapper
      ref={dropdownRef}
      theme={theme}
      $visible={visible}
      $placement={placement}
      $width={typeof matchWidth === 'boolean' ? (matchWidth ? '100%' : undefined) : matchWidth}
      style={style}
      className={className}
    >
      {finalContent}
    </DropdownWrapper>
  );
}; 