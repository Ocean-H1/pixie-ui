import React, { ReactNode, useState, useRef, useEffect, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { SelectTag } from './SelectTag';
import { SelectDropdown } from './SelectDropdown';
import { Icon } from '../Icon';

export type SelectSize = 'small' | 'medium' | 'large';
export type SelectPlacement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
export type SelectMode = 'multiple' | 'tags' | undefined;
export type SelectValue = string | number | (string | number)[];

export interface LabeledValue {
  key?: string;
  value: string | number;
  label: ReactNode;
}

export interface SelectOption {
  value: string | number;
  label: ReactNode;
  disabled?: boolean;
  children?: SelectOption[];
  key?: string;
}

export interface SelectProps {
  /**
   * 选择器大小
   * @default 'medium'
   */
  size?: SelectSize;
  /**
   * 设置 Select 的模式为多选或标签
   */
  mode?: SelectMode;
  /**
   * 选中时的值
   */
  value?: SelectValue | LabeledValue | LabeledValue[];
  /**
   * 指定默认选中的条目
   */
  defaultValue?: SelectValue | LabeledValue | LabeledValue[];
  /**
   * 是否默认展开下拉菜单
   */
  defaultOpen?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 自定义清除按钮
   * @default false
   */
  allowClear?: boolean | { clearIcon?: ReactNode };
  /**
   * 选项数据
   */
  options?: SelectOption[];
  /**
   * 是否展开下拉菜单
   */
  open?: boolean;
  /**
   * 下拉框弹出位置
   * @default 'bottomLeft'
   */
  placement?: SelectPlacement;
  /**
   * 加载中状态
   * @default false
   */
  loading?: boolean;
  /**
   * 是否可以搜索
   * @default 单选为false，多选为true
   */
  showSearch?: boolean;
  /**
   * 设置校验状态
   */
  status?: 'error' | 'warning';
  /**
   * 自定义前缀
   */
  prefix?: ReactNode;
  /**
   * 自定义的选择框后缀图标
   */
  suffixIcon?: ReactNode;
  /**
   * 自定义的多选框清除图标
   */
  removeIcon?: ReactNode;
  /**
   * 选择框默认文本
   */
  placeholder?: string;
  /**
   * 是否默认高亮第一个选项
   * @default true
   */
  defaultActiveFirstOption?: boolean;
  /**
   * 是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效
   * @default true
   */
  autoClearSearchValue?: boolean;
  /**
   * 下拉菜单的 className 属性
   */
  popupClassName?: string;
  /**
   * 下拉菜单的 style 属性
   */
  dropdownStyle?: React.CSSProperties;
  /**
   * 自定义下拉框内容
   */
  dropdownRender?: (originNode: ReactNode) => ReactNode;
  /**
   * 下拉菜单和选择器同宽
   * @default true
   */
  popupMatchSelectWidth?: boolean | number;
  /**
   * 控制搜索文本
   */
  searchValue?: string;
  /**
   * 最多显示多少个 tag
   */
  maxTagCount?: number | 'responsive';
  /**
   * 隐藏 tag 时显示的内容
   */
  maxTagPlaceholder?: ReactNode | ((omittedValues: SelectValue[]) => ReactNode);
  /**
   * 最大显示的 tag 文本长度
   */
  maxTagTextLength?: number;
  /**
   * 设置 false 时关闭虚拟滚动
   * @default true
   */
  virtual?: boolean;
  /**
   * 指定可选中的最多 items 数量，仅在 mode 为 multiple 或 tags 时生效
   */
  maxCount?: number;
  /**
   * 当下拉列表为空时显示的内容
   * @default '无匹配结果'
   */
  notFoundContent?: ReactNode;
  /**
   * 是否根据输入项进行筛选
   * @default true
   */
  filterOption?: boolean | ((inputValue: string, option: SelectOption) => boolean);
  /**
   * 搜索时对筛选结果项的排序函数
   */
  filterSort?: (optionA: SelectOption, optionB: SelectOption, info: { searchValue: string }) => number;
  /**
   * 搜索时过滤对应的 option 属性
   * @default 'label'
   */
  optionFilterProp?: string;
  /**
   * 回填到选择框的 Option 的属性值
   * @default 'children'
   */
  optionLabelProp?: string;
  /**
   * 自定义渲染下拉选项
   */
  optionRender?: (option: SelectOption, info: { index: number }) => React.ReactNode;
  /**
   * 设置弹窗滚动高度
   * @default 256
   */
  listHeight?: number;
  /**
   * 菜单渲染父节点
   * @default () => document.body
   */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  /**
   * 是否把每个选项的 label 包装到 value 中
   * @default false
   */
  labelInValue?: boolean;
  /**
   * 选中 option 时调用
   */
  onChange?: (value: SelectValue | LabeledValue | LabeledValue[], option: SelectOption | SelectOption[]) => void;
  /**
   * 失去焦点时回调
   */
  onBlur?: () => void;
  /**
   * 获得焦点时回调
   */
  onFocus?: (e: React.FocusEvent) => void;
  /**
   * 清除内容时回调
   */
  onClear?: () => void;
  /**
   * 按键按下时回调
   */
  onInputKeyDown?: (e: React.KeyboardEvent) => void;
  /**
   * 文本框值变化时回调
   */
  onSearch?: (value: string) => void;
  /**
   * 被选中时调用
   */
  onSelect?: (value: string | number | LabeledValue, option: SelectOption) => void;
  /**
   * 取消选中时调用
   */
  onDeselect?: (value: string | number | LabeledValue) => void;
  /**
   * 展开下拉菜单的回调
   */
  onDropdownVisibleChange?: (open: boolean) => void;
  /**
   * 下拉列表滚动时的回调
   */
  onPopupScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
  /**
   * 自定义当前选中的 label 内容 render
   */
  labelRender?: (props: LabeledValue) => ReactNode;
  /**
   * 自定义 tag 内容 render
   */
  tagRender?: (props: { label: ReactNode; value: string | number; closable: boolean; onClose: (e: React.MouseEvent) => void }) => ReactNode;
  /**
   * 自动分词的分隔符，仅在 mode="tags" 时生效
   */
  tokenSeparators?: string[];
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

// 获取选择框高度
const getHeight = (size: SelectSize, theme: Theme) => {
  switch (size) {
    case 'small':
      return theme.controlSizes.height.small;
    case 'medium':
      return theme.controlSizes.height.medium;
    case 'large':
      return theme.controlSizes.height.large;
    default:
      return theme.controlSizes.height.medium;
  }
};

// 获取选择框内边距
const getPadding = (size: SelectSize, theme: Theme) => {
  switch (size) {
    case 'small':
      return `0 ${theme.spacing.sm}`;
    case 'medium':
      return `0 ${theme.spacing.md}`;
    case 'large':
      return `0 ${theme.spacing.lg}`;
    default:
      return `0 ${theme.spacing.md}`;
  }
};

// 获取选择框字体大小
const getFontSize = (size: SelectSize, theme: Theme) => {
  switch (size) {
    case 'small':
      return theme.fontSizes.xs;
    case 'medium':
      return theme.fontSizes.sm;
    case 'large':
      return theme.fontSizes.md;
    default:
      return theme.fontSizes.sm;
  }
};

const SelectContainer = styled.div<{
  theme: Theme;
  $disabled: boolean;
  $status?: 'error' | 'warning';
}>`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? '0.65' : '1')};
`;

const SelectWrapper = styled.div<{
  theme: Theme;
  $size: SelectSize;
  $open: boolean;
  $disabled: boolean;
  $status?: 'error' | 'warning';
  $focused: boolean;
  $mode?: SelectMode;
}>`
  display: flex;
  align-items: center;
  flex-wrap: ${({ $mode }) => ($mode === 'multiple' || $mode === 'tags' ? 'wrap' : 'nowrap')};
  box-sizing: border-box;
  width: 100%;
  min-height: ${({ $size, theme }) => getHeight($size, theme)};
  padding: ${({ $size, theme }) => getPadding($size, theme)};
  font-size: ${({ $size, theme }) => getFontSize($size, theme)};
  background-color: ${({ theme, $disabled }) => ($disabled ? theme.colors.disabled.background : theme.colors.background)};
  color: ${({ theme, $disabled }) => ($disabled ? theme.colors.text.disabled : theme.colors.text.primary)};
  border: 1px solid ${({ theme, $status, $focused }) => {
    if ($status === 'error') return theme.colors.error;
    if ($status === 'warning') return theme.colors.warning;
    return $focused ? theme.colors.primary : theme.colors.border;
  }};
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: all 0.3s;
  
  &:hover {
    border-color: ${({ theme, $disabled, $status }) => {
      if ($disabled) return theme.colors.border;
      if ($status === 'error') return theme.colors.error;
      if ($status === 'warning') return theme.colors.warning;
      return theme.colors.primary;
    }};
  }
`;

const SelectPlaceholder = styled.span<{
  theme: Theme;
}>`
  color: ${({ theme }) => theme.colors.text.secondary};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SelectValue = styled.span<{
  theme: Theme;
}>`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SelectArrow = styled.span<{
  theme: Theme;
  $open: boolean;
  $loading?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transform: ${({ $open, $loading }) => ($loading ? 'none' : $open ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s;
`;

const SelectClear = styled.span<{
  theme: Theme;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.xs};
  font-size: 12px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;
  
  ${SelectWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const SelectPrefix = styled.span<{
  theme: Theme;
}>`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

const SelectTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  overflow: hidden;
`;

const SelectInput = styled.input<{
  theme: Theme;
  $width: string;
}>`
  border: none;
  outline: none;
  background: transparent;
  width: ${({ $width }) => $width};
  min-width: 30px;
  flex: 1;
  color: inherit;
  font-size: inherit;
`;

// 实现完整的 Select 组件
export const Select = React.forwardRef<HTMLDivElement, SelectProps>(({
  size = 'medium',
  mode,
  value,
  defaultValue,
  defaultOpen = false,
  disabled = false,
  allowClear = false,
  options = [],
  open,
  placement = 'bottomLeft',
  loading = false,
  showSearch = mode === 'multiple' || mode === 'tags',
  status,
  prefix,
  suffixIcon,
  removeIcon,
  placeholder = '请选择',
  defaultActiveFirstOption = true,
  autoClearSearchValue = true,
  popupClassName,
  dropdownStyle,
  dropdownRender,
  popupMatchSelectWidth = true,
  searchValue: propSearchValue,
  maxTagCount,
  maxTagPlaceholder,
  maxTagTextLength,
  virtual = true,
  maxCount,
  notFoundContent = '无匹配结果',
  filterOption = true,
  filterSort,
  optionFilterProp = 'label',
  optionLabelProp = 'children',
  optionRender,
  listHeight = 256,
  getPopupContainer,
  labelInValue = false,
  onChange,
  onBlur,
  onFocus,
  onClear,
  onInputKeyDown,
  onSearch,
  onSelect,
  onDeselect,
  onDropdownVisibleChange,
  onPopupScroll,
  labelRender,
  tagRender,
  tokenSeparators,
  children,
  ...rest
}, ref) => {
  const theme = useTheme();
  // 内部引用
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // 处理ref转发
  React.useImperativeHandle(ref, () => selectRef.current as HTMLDivElement);
  
  // 控制下拉框的显示状态
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [focused, setFocused] = useState(false);
  const [internalSearchValue, setInternalSearchValue] = useState('');
  
  // 处理受控与非受控
  const mergedOpen = open !== undefined ? open : isOpen;
  const searchValue = propSearchValue !== undefined ? propSearchValue : internalSearchValue;
  
  // 处理选中值
  const [selectedValue, setSelectedValue] = useState<SelectValue>(() => {
    if (defaultValue !== undefined) {
      // 处理LabeledValue类型转换为SelectValue
      if (Array.isArray(defaultValue) && defaultValue.length > 0 && typeof defaultValue[0] === 'object' && 'value' in defaultValue[0]) {
        return (defaultValue as LabeledValue[]).map(item => item.value);
      } else if (!Array.isArray(defaultValue) && typeof defaultValue === 'object' && 'value' in defaultValue) {
        return (defaultValue as LabeledValue).value;
      }
      return defaultValue as SelectValue;
    }
    if (value !== undefined) {
      // 处理LabeledValue类型转换为SelectValue
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object' && 'value' in value[0]) {
        return (value as LabeledValue[]).map(item => item.value);
      } else if (!Array.isArray(value) && typeof value === 'object' && 'value' in value) {
        return (value as LabeledValue).value;
      }
      return value as SelectValue;
    }
    return mode === 'multiple' || mode === 'tags' ? [] as (string | number)[] : '';
  });
  
  // 更新选中值
  useEffect(() => {
    if (value !== undefined) {
      // 处理LabeledValue类型转换为SelectValue
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object' && 'value' in value[0]) {
        setSelectedValue((value as LabeledValue[]).map(item => item.value));
      } else if (!Array.isArray(value) && typeof value === 'object' && 'value' in value) {
        setSelectedValue((value as LabeledValue).value);
      } else {
        setSelectedValue(value as SelectValue);
      }
    }
  }, [value]);

  // 处理选项数据
  const optionsData = useMemo(() => {
    if (children) {
      const childOptions = React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === 'option') {
          return {
            value: child.props.value,
            label: child.props.children,
            disabled: child.props.disabled,
            key: child.key?.toString(),
          };
        }
        return null;
      });
      return (childOptions?.filter(Boolean) as SelectOption[]) || [];
    }
    return options;
  }, [children, options]);
  
  // 处理过滤选项
  const filteredOptions = useMemo(() => {
    if (!showSearch || !searchValue) {
      return optionsData;
    }
    
    // 自定义过滤逻辑
    if (typeof filterOption === 'function') {
      return optionsData.filter(option => filterOption(searchValue, option));
    }
    
    // 默认过滤逻辑
    if (filterOption) {
      return optionsData.filter(option => {
        // 查看是否在指定的属性中包含搜索值
        const optionValue = option[optionFilterProp as keyof SelectOption];
        let matchProp = false;
        
        if (typeof optionValue === 'string' || typeof optionValue === 'number') {
          matchProp = String(optionValue).toLowerCase().includes(searchValue.toLowerCase());
        }
        
        // 如果在指定属性中找不到，尝试在标签中查找
        if (!matchProp && optionFilterProp !== 'label' && option.label) {
          const labelText = typeof option.label === 'string' || typeof option.label === 'number' 
            ? String(option.label).toLowerCase() 
            : '';
          
          if (labelText) {
            matchProp = labelText.includes(searchValue.toLowerCase());
          }
        }
        
        return matchProp;
      });
    }
    
    return optionsData;
  }, [optionsData, showSearch, searchValue, filterOption, optionFilterProp]);
  
  // 处理排序
  const sortedOptions = useMemo(() => {
    if (filterSort && searchValue) {
      return [...filteredOptions].sort((a, b) => filterSort(a, b, { searchValue }));
    }
    return filteredOptions;
  }, [filteredOptions, filterSort, searchValue]);
  
  // 处理选中项内容
  const getOptionFromValue = useCallback((optionValue: string | number) => {
    return optionsData.find(option => option.value === optionValue);
  }, [optionsData]);
  
  // 处理下拉框点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocused(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // 添加阻止输入框冒泡的处理函数
  const stopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);
  
  // 处理选择器点击
  const handleSelectClick = useCallback(() => {
    if (disabled) return;
    
    const shouldOpen = !mergedOpen;
    setIsOpen(shouldOpen);
    onDropdownVisibleChange?.(shouldOpen);
    
    if (shouldOpen) {
      setFocused(true);
      // 使用 requestAnimationFrame 确保在下一帧获取焦点
      requestAnimationFrame(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      });
    }
  }, [disabled, mergedOpen, onDropdownVisibleChange]);
  
  // 处理清除
  const handleClear = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    
    const newValue = mode === 'multiple' || mode === 'tags' ? [] as (string | number)[] : '';
    setSelectedValue(newValue);
    onChange?.(newValue as SelectValue, [] as SelectOption[]);
    onClear?.();
  }, [mode, onChange, onClear]);
  
  // 处理选项选择
  const handleOptionSelect = useCallback((optionValue: string | number, option: SelectOption) => {
    let newValue: SelectValue;
    
    if (mode === 'multiple' || mode === 'tags') {
      // 多选模式
      const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
      
      // 检查最大选中数量
      if (maxCount && typeof maxCount === 'number' && currentValue.length >= maxCount && !currentValue.includes(optionValue)) {
        return;
      }
      
      if (currentValue.includes(optionValue)) {
        // 已选中则取消选中
        newValue = currentValue.filter(v => v !== optionValue);
        onDeselect?.(optionValue);
      } else {
        // 未选中则选中
        newValue = [...currentValue, optionValue];
      }
      
      // 自动清除搜索值
      if (autoClearSearchValue) {
        setInternalSearchValue('');
      }
    } else {
      // 单选模式
      newValue = optionValue;
      setIsOpen(false);
      onDropdownVisibleChange?.(false);
      setInternalSearchValue('');
    }
    
    setSelectedValue(newValue);
    
    // 处理返回值格式
    if (onChange) {
      if (mode === 'multiple' || mode === 'tags') {
        const options = Array.isArray(newValue) 
          ? newValue.map(v => getOptionFromValue(v)).filter(Boolean) as SelectOption[]
          : [];
        onChange(
          labelInValue ? formatOptionLabelInValue(newValue, optionsData) : newValue, 
          options
        );
      } else {
        onChange(
          labelInValue ? (formatOptionLabelInValue(newValue, optionsData) as LabeledValue) : newValue, 
          option
        );
      }
    }
    
    onSelect?.(optionValue, option);
  }, [
    mode, 
    selectedValue, 
    maxCount, 
    autoClearSearchValue, 
    labelInValue, 
    optionsData, 
    onChange, 
    onDeselect, 
    onDropdownVisibleChange, 
    onSelect,
    getOptionFromValue,
    setInternalSearchValue,
    setIsOpen
  ]);
  
  // 处理标签移除
  const handleTagClose = useCallback((tagValue: string | number) => {
    if (disabled) return;
    
    const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
    const newValue = currentValue.filter(v => v !== tagValue) as (string | number)[];
    
    setSelectedValue(newValue);
    
    if (onChange) {
      const options = newValue.map(v => getOptionFromValue(v)).filter(Boolean) as SelectOption[];
      
      onChange(
        labelInValue ? formatOptionLabelInValue(newValue, optionsData) : newValue, 
        options
      );
    }
    
    onDeselect?.(tagValue);
  }, [disabled, selectedValue, onChange, onDeselect, getOptionFromValue, optionsData, labelInValue]);
  
  // 处理搜索值变化
  const handleSearchInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInternalSearchValue(value);
    onSearch?.(value);
    
    // 处理自动分词 - 仅在 tags 模式
    if (mode === 'tags' && tokenSeparators && tokenSeparators.length && value) {
      const lastChar = value[value.length - 1];
      if (tokenSeparators.includes(lastChar)) {
        const token = value.slice(0, value.length - 1).trim();
        if (token) {
          // 添加新标签
          const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
          if (!currentValue.includes(token as string | number)) {
            const newValue = [...currentValue, token] as (string | number)[];
            setSelectedValue(newValue);
            
            if (onChange) {
              onChange(
                labelInValue ? formatOptionLabelInValue(newValue, optionsData) : newValue, 
                []
              );
            }
          }
          setInternalSearchValue('');
        }
      }
    }
    
    // 自动打开下拉框
    if (value && !mergedOpen) {
      setIsOpen(true);
      onDropdownVisibleChange?.(true);
    }
  }, [mode, tokenSeparators, selectedValue, mergedOpen, onChange, onSearch, onDropdownVisibleChange, optionsData, labelInValue]);
  
  // 处理输入框键盘事件
  const handleInputKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    onInputKeyDown?.(e);
    
    // 处理退格键删除最后一个标签
    if (e.key === 'Backspace' && !searchValue && Array.isArray(selectedValue) && selectedValue.length > 0) {
      const lastValue = selectedValue[selectedValue.length - 1];
      handleTagClose(lastValue);
    }
    
    // 处理回车键选中第一个选项
    if (e.key === 'Enter' && mergedOpen && sortedOptions.length > 0 && defaultActiveFirstOption) {
      const firstOption = sortedOptions[0];
      if (!firstOption.disabled) {
        handleOptionSelect(firstOption.value, firstOption);
        e.preventDefault();
      }
    }
    
    // ESC 键关闭下拉框
    if (e.key === 'Escape' && mergedOpen) {
      setIsOpen(false);
      onDropdownVisibleChange?.(false);
      e.preventDefault();
    }
  }, [
    onInputKeyDown, 
    searchValue, 
    selectedValue, 
    mergedOpen, 
    sortedOptions, 
    defaultActiveFirstOption, 
    handleOptionSelect, 
    handleTagClose,
    onDropdownVisibleChange
  ]);
  
  // 处理失焦事件
  const handleBlur = useCallback(() => {
    setFocused(false);
    onBlur?.();
  }, [onBlur]);
  
  // 处理聚焦事件
  const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  }, [onFocus]);
  
  // 辅助函数：格式化 labelInValue
  const formatOptionLabelInValue = useCallback((val: SelectValue, options: SelectOption[]): LabeledValue | LabeledValue[] => {
    if (Array.isArray(val)) {
      return val.map(v => {
        const option = options.find(opt => opt.value === v);
        return {
          value: v,
          label: option?.label || v
        } as LabeledValue;
      });
    }
    
    const option = options.find(opt => opt.value === val);
    return {
      value: val as string | number,
      label: option?.label || val
    } as LabeledValue;
  }, []);
  
  // 渲染选中值
  const renderSelectedValue = () => {
    // 空值显示占位符
    if (selectedValue === undefined || selectedValue === '' || (Array.isArray(selectedValue) && selectedValue.length === 0)) {
      if (showSearch && focused) {
        return (
          <SelectInput
            ref={inputRef}
            theme={theme}
            $width="100%"
            type="text"
            value={searchValue}
            onChange={handleSearchInputChange}
            onKeyDown={handleInputKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            placeholder={placeholder}
            onClick={stopPropagation}
          />
        );
      }
      return <SelectPlaceholder theme={theme}>{placeholder}</SelectPlaceholder>;
    }
    
    // 多选模式
    if (mode === 'multiple' || mode === 'tags') {
      const selectedValues = selectedValue as (string | number)[];
      let displayValues = [...selectedValues];
      let omittedValues: (string | number)[] = [];
      
      // 处理最大显示标签数量
      if (maxTagCount !== undefined && selectedValues.length > 0) {
        if (maxTagCount === 'responsive') {
          // 实际上响应式标签数需要复杂计算，这里简化处理
          displayValues = selectedValues.slice(0, 5);
          omittedValues = selectedValues.slice(5);
        } else if (typeof maxTagCount === 'number' && selectedValues.length > maxTagCount) {
          displayValues = selectedValues.slice(0, maxTagCount);
          omittedValues = selectedValues.slice(maxTagCount);
        }
      }
      
      return (
        <SelectTagsContainer>
          {displayValues.map(value => {
            const option = getOptionFromValue(value);
            return (
              <SelectTag
                key={value}
                value={value}
                label={option?.label || value}
                closable={!disabled}
                disabled={disabled}
                maxTagTextLength={maxTagTextLength}
                onClose={() => handleTagClose(value)}
                tagRender={tagRender}
                removeIcon={removeIcon}
              />
            );
          })}
          
          {omittedValues.length > 0 && (
            <SelectTag
              value="omitted"
              label={typeof maxTagPlaceholder === 'function' 
                ? maxTagPlaceholder(omittedValues as SelectValue[]) 
                : maxTagPlaceholder || `+${omittedValues.length}...`}
              closable={false}
              disabled={disabled}
            />
          )}
          
          {showSearch && (
            <SelectInput
              ref={inputRef}
              theme={theme}
              $width={searchValue ? `${Math.max(searchValue.length * 8, 30)}px` : '30px'}
              type="text"
              value={searchValue}
              onChange={handleSearchInputChange}
              onKeyDown={handleInputKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={disabled}
              onClick={stopPropagation}
            />
          )}
        </SelectTagsContainer>
      );
    }
    
    // 单选模式
    const option = getOptionFromValue(selectedValue as string | number);
    
    // 添加单选模式下的搜索支持
    if (showSearch && focused) {
      return (
        <SelectInput
          ref={inputRef}
          theme={theme}
          $width="100%"
          type="text"
          value={searchValue}
          onChange={handleSearchInputChange}
          onKeyDown={handleInputKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder={typeof option?.label === 'string' ? option.label : String(selectedValue)}
          onClick={stopPropagation}
        />
      );
    }
    
    return <SelectValue theme={theme}>{option?.label || selectedValue}</SelectValue>;
  };
  
  // 判断是否有选中值可清除
  const hasValue = mode === 'multiple' || mode === 'tags'
    ? Array.isArray(selectedValue) && selectedValue.length > 0
    : selectedValue !== undefined && selectedValue !== '';
  
  // 渲染组件
  return (
    <SelectContainer
      ref={selectRef}
      theme={theme}
      $disabled={disabled}
      $status={status}
      {...rest}
    >
      <SelectWrapper
        theme={theme}
        $size={size}
        $open={mergedOpen}
        $disabled={disabled}
        $status={status}
        $focused={focused}
        $mode={mode}
        onClick={handleSelectClick}
      >
        {prefix && <SelectPrefix theme={theme}>{prefix}</SelectPrefix>}
        
        {renderSelectedValue()}
        
        {hasValue && allowClear && (
          <SelectClear theme={theme} onClick={handleClear}>
            {typeof allowClear === 'object' && allowClear.clearIcon ? 
              allowClear.clearIcon : 
              <Icon icon="mdi:close-circle" size="small" />}
          </SelectClear>
        )}
        
        <SelectArrow 
          theme={theme} 
          $open={mergedOpen}
          $loading={loading}
        >
          {loading ? 
            <Icon icon="mdi:loading" size="small" /> : 
            suffixIcon || <Icon icon="mdi:chevron-down" size="small" />}
        </SelectArrow>
      </SelectWrapper>
      
      <SelectDropdown
        visible={mergedOpen}
        options={sortedOptions}
        placement={placement}
        selectedValues={Array.isArray(selectedValue) ? selectedValue as (string | number)[] : selectedValue ? [selectedValue as string | number] : []}
        matchWidth={popupMatchSelectWidth}
        style={dropdownStyle}
        className={popupClassName}
        notFoundContent={notFoundContent}
        virtual={virtual}
        listHeight={listHeight}
        optionRender={optionRender}
        searchValue={searchValue}
        onSelect={handleOptionSelect}
        onPopupScroll={onPopupScroll}
        dropdownRender={dropdownRender}
      />
    </SelectContainer>
  );
});

// 添加显示名称
Select.displayName = 'Select'; 