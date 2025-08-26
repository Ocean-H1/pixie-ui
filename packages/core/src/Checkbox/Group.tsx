import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { Checkbox, CheckboxChangeEvent } from './Checkbox';

export type CheckboxOption = string | number | { label: React.ReactNode; value: string | number | boolean; disabled?: boolean; title?: string; className?: string; style?: React.CSSProperties };

export interface CheckboxGroupProps<T = string | number | boolean> {
  /** 默认选中的选项（非受控） */
  defaultValue?: T[];
  /** 整组失效 */
  disabled?: boolean;
  /** 组内所有 input 的 name */
  name?: string;
  /** 指定可选项 */
  options?: CheckboxOption[];
  /** 指定选中的选项（受控） */
  value?: T[];
  /** 选项 title */
  title?: string;
  /** 选项类名 */
  className?: string;
  /** 选项样式 */
  style?: React.CSSProperties;
  /** 变化时回调 */
  onChange?: (checkedValue: T[]) => void;
}

const GroupWrapper = styled.div<{ theme: Theme }>`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

function normalizeOptions(options: CheckboxOption[] = []) {
  return options.map((opt) => {
    if (typeof opt === 'string' || typeof opt === 'number') {
      return { label: String(opt), value: opt };
    }
    return opt;
  });
}

export function Group<T extends string | number | boolean = string>({
  defaultValue = [],
  disabled = false,
  name,
  options = [],
  value,
  className,
  style,
  onChange,
}: CheckboxGroupProps<T>) {
  const theme = useTheme();
  const isControlled = useMemo(() => Array.isArray(value), [value]);
  const [uncontrolled, setUncontrolled] = useState<T[]>(defaultValue);
  const merged = (isControlled ? (value as T[]) : uncontrolled) as T[];

  const items = useMemo(() => normalizeOptions(options), [options]);

  const handleItemChange = (val: T) => (e: CheckboxChangeEvent) => {
    const next = e.target.checked
      ? [...merged, val]
      : merged.filter((v) => v !== val);

    if (!isControlled) setUncontrolled(next);
    if (onChange) onChange(next);
  };

  return (
    <GroupWrapper className={className} style={style} title={undefined} theme={theme}>
      {items.map((opt, idx) => {
        const { label, value: val, disabled: itemDisabled, title: itemTitle, className: itemClassName, style: itemStyle } = opt as any;
        const checked = merged.includes(val as T);
        return (
          <Checkbox
            key={(val as any) ?? idx}
            name={name}
            disabled={disabled || !!itemDisabled}
            checked={checked}
            onChange={handleItemChange(val as T)}
            title={itemTitle}
            className={itemClassName}
            style={itemStyle}
          >
            {label}
          </Checkbox>
        );
      })}
    </GroupWrapper>
  );
}

export default Group;


