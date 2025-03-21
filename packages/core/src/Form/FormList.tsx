import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { useForm } from './Form';

// 表单列表属性
export interface FormListProps {
  /**
   * 字段名
   */
  name: string;
  /**
   * 子元素渲染函数
   */
  children: (fields: FormListField[], operations: FormListOperations) => React.ReactNode;
}

// 表单列表字段
export interface FormListField {
  /**
   * 字段名
   */
  name: string;
  /**
   * 字段键
   */
  key: string;
}

// 表单列表操作
export interface FormListOperations {
  /**
   * 添加字段
   */
  add: (defaultValue?: any) => void;
  /**
   * 移除字段
   */
  remove: (index: number) => void;
  /**
   * 移动字段
   */
  move: (from: number, to: number) => void;
}

// 样式化表单列表容器
const FormListContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

/**
 * 表单列表组件
 * @param props 组件属性
 * @returns 表单列表组件
 */
export const FormList: React.FC<FormListProps> = ({ name, children }) => {
  const theme = useTheme();
  const form = useForm();
  const { state, setFieldValue } = form;
  const { values } = state;

  // 获取嵌套字段值的辅助函数
  const getNestedValue = useCallback((obj: Record<string, any>, path: string): any => {
    if (!obj || !path) return undefined;
    
    // 处理数组表示法，例如：users[0].name
    const formattedPath = path.replace(/\[(\w+)\]/g, '.$1');
    const keys = formattedPath.split('.');
    
    let result = obj;
    for (const key of keys) {
      if (!result || typeof result !== 'object') return undefined;
      result = result[key];
    }
    
    return result;
  }, []);

  // 获取字段值
  const getFieldValue = useCallback(() => {
    const value = getNestedValue(values, name);
    return Array.isArray(value) ? value : [];
  }, [name, values, getNestedValue]);

  // 设置字段值
  const setValue = useCallback((newValue: any[]) => {
    setFieldValue(name, newValue);
  }, [name, setFieldValue]);

  // 添加字段
  const add = useCallback((defaultValue?: any) => {
    const currentValue = getFieldValue();
    setValue([...currentValue, defaultValue || {}]);
  }, [getFieldValue, setValue]);

  // 移除字段
  const remove = useCallback((index: number) => {
    const currentValue = getFieldValue();
    if (index < 0 || index >= currentValue.length) return;
    
    const newValue = [...currentValue];
    newValue.splice(index, 1);
    setValue(newValue);
  }, [getFieldValue, setValue]);

  // 移动字段
  const move = useCallback((from: number, to: number) => {
    const currentValue = getFieldValue();
    if (
      from < 0 || 
      from >= currentValue.length || 
      to < 0 || 
      to >= currentValue.length ||
      from === to
    ) {
      return;
    }
    
    const newValue = [...currentValue];
    const [movedItem] = newValue.splice(from, 1);
    newValue.splice(to, 0, movedItem);
    setValue(newValue);
  }, [getFieldValue, setValue]);

  // 生成字段列表
  const fields = getFieldValue().map((_: unknown, index: number) => ({
    name: `${name}[${index}]`,
    key: `${name}-${index}`,
  }));

  // 生成操作对象
  const operations: FormListOperations = {
    add,
    remove,
    move,
  };

  return (
    <FormListContainer theme={theme}>
      {children(fields, operations)}
    </FormListContainer>
  );
}; 