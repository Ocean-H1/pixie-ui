import React, { InputHTMLAttributes, useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

export interface CheckboxChangeEventTarget extends HTMLInputElement {
  checked: boolean;
  indeterminate: boolean;
}

export type CheckboxChangeEvent = React.ChangeEvent<CheckboxChangeEventTarget>;

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'type' | 'defaultValue'> {
  /** 自动获取焦点 */
  autoFocus?: boolean;
  /** 指定当前是否选中（受控） */
  checked?: boolean;
  /** 初始是否选中（非受控） */
  defaultChecked?: boolean;
  /** 失效状态 */
  disabled?: boolean;
  /** 设置半选，仅样式控制，不影响原生选中态 */
  indeterminate?: boolean;
  /** 变化时回调 */
  onChange?: (e: CheckboxChangeEvent) => void;
  /** 失去焦点回调 */
  onBlur?: () => void;
  /** 获得焦点回调 */
  onFocus?: () => void;
  /** 复选框文本 */
  children?: React.ReactNode;
}

const CheckboxWrapper = styled.label<{ $disabled: boolean; theme: Theme }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  color: ${({ theme, $disabled }) => ($disabled ? theme.colors.text.disabled : theme.colors.text.primary)};
  user-select: none;
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;

const Box = styled.span<{
  $checked: boolean;
  $indeterminate: boolean;
  $disabled: boolean;
  theme: Theme;
}>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: 1px solid
    ${({ theme, $checked, $indeterminate }) =>
      $checked || $indeterminate ? theme.colors.primary : theme.colors.border};
  background-color: ${({ theme, $checked, $indeterminate }) =>
    $checked || $indeterminate ? theme.colors.primary : theme.colors.background.default};
  border-radius: ${({ theme }) => theme.radii.xs};
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.colors.surface};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  &:after {
    content: '';
    display: block;
    width: ${({ $indeterminate }) => ($indeterminate ? '10px' : '4px')};
    height: ${({ $indeterminate }) => ($indeterminate ? '2px' : '8px')};
    border: ${({ $indeterminate }) => ($indeterminate ? 'none' : '2px solid currentColor')};
    border-top: 0;
    border-left: 0;
    transform: ${({ $indeterminate }) => ($indeterminate ? 'none' : 'rotate(45deg)')};
    opacity: ${({ $checked, $indeterminate }) => ($checked || $indeterminate ? 1 : 0)};
    background-color: ${({ $indeterminate }) => ($indeterminate ? 'currentColor' : 'transparent')};
    transition: opacity 0.2s ease;
  }
`;

const Label = styled.span<{ theme: Theme }>`
  margin-left: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  autoFocus = false,
  checked,
  defaultChecked = false,
  disabled = false,
  indeterminate = false,
  onChange,
  onBlur,
  onFocus,
  children,
  className,
  style,
  ...rest
}) => {
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const isControlled = useMemo(() => typeof checked === 'boolean', [checked]);
  const [uncontrolledChecked, setUncontrolledChecked] = useState<boolean>(defaultChecked);
  const mergedChecked = isControlled ? (checked as boolean) : uncontrolledChecked;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate, mergedChecked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setUncontrolledChecked(e.target.checked);
    }
    const event = e as unknown as CheckboxChangeEvent;
    if (onChange) onChange(event);
  };

  const handleBlur = () => {
    if (onBlur) onBlur();
  };

  const handleFocus = () => {
    if (onFocus) onFocus();
  };

  return (
    <CheckboxWrapper $disabled={disabled} className={className} style={style} theme={theme}>
      <HiddenInput
        {...rest}
        ref={inputRef}
        type="checkbox"
        checked={mergedChecked}
        disabled={disabled}
        autoFocus={autoFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <Box $checked={mergedChecked} $disabled={disabled} $indeterminate={!!indeterminate} theme={theme} />
      {children != null && <Label theme={theme}>{children}</Label>}
    </CheckboxWrapper>
  );
};

export default Checkbox;


