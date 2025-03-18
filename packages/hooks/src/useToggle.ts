import { useState, useCallback } from 'react';

/**
 * 切换布尔值的钩子函数
 * @param initialValue 初始值
 * @returns [value, toggle, setValue] 当前值、切换函数、设置值函数
 */
export function useToggle(initialValue = false): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  
  return [value, toggle, setValue];
} 