import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { Icon } from '../Icon';

export interface RateProps {
  /**
   * 是否允许再次点击后清除
   * @default true
   */
  allowClear?: boolean;
  /**
   * 是否允许半选
   * @default false
   */
  allowHalf?: boolean;
  /**
   * 自动获取焦点
   * @default false
   */
  autoFocus?: boolean;
  /**
   * 自定义字符
   * @default 'material-symbols:star'
   */
  character?: React.ReactNode | ((props: RateProps) => React.ReactNode);
  /**
   * 自定义样式类名
   */
  className?: string;
  /**
   * star 总数
   * @default 5
   */
  count?: number;
  /**
   * 默认值
   * @default 0
   */
  defaultValue?: number;
  /**
   * 只读，无法进行交互
   * @default false
   */
  disabled?: boolean;
  /**
   * 支持使用键盘操作
   * @default true
   */
  keyboard?: boolean;
  /**
   * 自定义样式对象
   */
  style?: React.CSSProperties;
  /**
   * 自定义每项的提示信息
   */
  tooltips?: string[];
  /**
   * 当前数，受控值
   */
  value?: number;
  /**
   * 失去焦点时的回调
   */
  onBlur?: () => void;
  /**
   * 选择时的回调
   */
  onChange?: (value: number) => void;
  /**
   * 获取焦点时的回调
   */
  onFocus?: () => void;
  /**
   * 鼠标经过时数值变化的回调
   */
  onHoverChange?: (value: number) => void;
  /**
   * 按键回调
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const RateWrapper = styled.div<{
  theme: Theme;
  disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  outline: 0;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  line-height: 1;
  list-style: none;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.3s;
`;

const RateItem = styled.div<{
  theme: Theme;
}>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: inherit;
  transition: transform 0.15s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const RateItemWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 8px;
  height: 24px;
  width: 24px;
`;

const RateItemFirst = styled.div<{
  active?: boolean;
}>`
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  opacity: ${({ active }) => (active ? 1 : 0)};
  cursor: pointer;
  z-index: 2;
  
  &:hover {
    opacity: 1;
  }

  & > div {
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 100%;
  }
`;

const RateItemSecond = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
`;

const TooltipWrapper = styled.div<{
  theme: Theme;
  visible: boolean;
}>`
  position: absolute;
  left: 50%;
  top: -30px;
  transform: translateX(-50%);
  padding: ${({ theme }) => `${theme.spacing.xs}px ${theme.spacing.sm}px`};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  white-space: nowrap;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: all 0.3s;
  pointer-events: none;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -4px;
    transform: translateX(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

/**
 * Rate 评分组件
 * @param props 组件属性
 * @returns Rate 评分组件
 */
export const Rate: React.FC<RateProps> = ({
  allowClear = true,
  allowHalf = false,
  autoFocus = false,
  character,
  className,
  count = 5,
  defaultValue = 0,
  disabled = false,
  keyboard = true,
  style,
  tooltips,
  value: propValue,
  onBlur,
  onChange,
  onFocus,
  onHoverChange,
  onKeyDown,
}) => {
  const theme = useTheme();
  const [activeValue, setActiveValue] = useState<number>(0);
  const [hoverValue, setHoverValue] = useState<number>(0);
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<number>(propValue !== undefined ? propValue : defaultValue);
  const rateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  useEffect(() => {
    if (autoFocus && rateRef.current) {
      rateRef.current.focus();
    }
  }, [autoFocus]);

  const getStarValue = (index: number, isHalf: boolean): number => {
    return isHalf ? index + 0.5 : index + 1;
  };

  const handleClick = (starValue: number) => {
    if (disabled) return;

    let newValue = starValue;
    if (allowClear && value === starValue) {
      newValue = 0;
    }

    setValue(newValue);
    onChange?.(newValue);
  };

  const handleHover = (starValue: number) => {
    if (disabled) return;

    setHoverValue(starValue);
    onHoverChange?.(starValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
    onHoverChange?.(0);
  };

  const handleFocus = () => {
    setFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!keyboard || disabled) return;

    const { keyCode } = event;
    let newValue = value;
    const step = allowHalf ? 0.5 : 1;

    // 左箭头
    if (keyCode === 37) {
      newValue = Math.max(0, value - step);
      event.preventDefault();
    }
    // 右箭头
    else if (keyCode === 39) {
      newValue = Math.min(count, value + step);
      event.preventDefault();
    }
    // 回车
    else if (keyCode === 13) {
      event.preventDefault();
    }

    if (newValue !== value) {
      setValue(newValue);
      onChange?.(newValue);
    }

    onKeyDown?.(event);
  };

  const renderCharacter = (index: number, isHalf: boolean = false) => {
    const starValue = getStarValue(index, isHalf);
    const isActive = (hoverValue || value) >= starValue;

    if (typeof character === 'function') {
      return character({
        index,
        value,
        hoverValue,
        allowClear,
        allowHalf,
        count,
        disabled,
      } as RateProps);
    }

    if (React.isValidElement(character)) {
      return React.cloneElement(character as React.ReactElement);
    }

    return (
      <Icon
        icon="material-symbols:star"
        color={isActive ? theme.colors.gold : theme.colors.disabled.foreground}
        size={24}
      />
    );
  };

  return (
    <RateWrapper
      theme={theme}
      disabled={disabled}
      className={className}
      style={style}
      ref={rateRef}
      tabIndex={disabled ? -1 : 0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {Array.from({ length: count }).map((_, index) => {
        const starValue = index + 1;
        const halfStarValue = index + 0.5;
        
        const hasHalfStar = value === halfStarValue;
        const hasFullStar = value >= starValue;
        const isHoverHalfStar = hoverValue === halfStarValue;
        const isHoverFullStar = hoverValue >= starValue;
        
        const showHalfStar = allowHalf && (hasHalfStar || isHoverHalfStar) && !hasFullStar && !isHoverFullStar;
        
        const tooltip = tooltips && tooltips[index];

        return (
          <RateItemWrapper key={index}>
            {tooltip && (
              <TooltipWrapper
                theme={theme}
                visible={hoverValue === starValue || (hoverValue === 0 && value === starValue)}
              >
                {tooltip}
              </TooltipWrapper>
            )}

            {allowHalf && (
              <RateItemFirst
                active={showHalfStar}
                onClick={() => handleClick(halfStarValue)}
                onMouseOver={() => handleHover(halfStarValue)}
                onMouseLeave={handleMouseLeave}
              >
                <RateItem theme={theme}>
                  {renderCharacter(index, true)}
                </RateItem>
              </RateItemFirst>
            )}

            <RateItemSecond
              onClick={() => handleClick(starValue)}
              onMouseOver={() => handleHover(starValue)}
              onMouseLeave={handleMouseLeave}
            >
              <RateItem theme={theme}>
                {renderCharacter(index)}
              </RateItem>
            </RateItemSecond>
          </RateItemWrapper>
        );
      })}
    </RateWrapper>
  );
}; 