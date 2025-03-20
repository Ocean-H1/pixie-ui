import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';
import { FormContextType, FormRule, useForm } from './Form';

// 表单项属性
export interface FormItemProps {
  /**
   * 字段名
   */
  name: string;
  /**
   * 标签文本
   */
  label?: string;
  /**
   * 验证规则
   */
  rules?: FormRule[];
  /**
   * 是否必填
   * @default false
   */
  required?: boolean;
  /**
   * 自定义渲染函数
   */
  children: (props: FormItemRenderProps) => React.ReactNode;
}

// 表单项渲染属性
export interface FormItemRenderProps {
  value: any;
  onChange: (value: any) => void;
  onBlur: () => void;
  error: string[];
  touched: boolean;
  disabled?: boolean;
  form?: FormContextType;
}

// 样式化表单项容器
const FormItemContainer = styled.div<{
  $layout: 'horizontal' | 'vertical' | 'inline';
  theme: Theme;
}>`
  display: flex;
  flex-direction: ${({ $layout }) => ($layout === 'horizontal' ? 'row' : 'column')};
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  ${({ $layout, theme }) =>
    $layout === 'inline' &&
    `
    margin-bottom: 0;
    margin-right: ${theme.spacing.md};
  `}
`;

// 样式化标签
const Label = styled.label<{
  $required: boolean;
  theme: Theme;
}>`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  
  ${({ $required, theme }) =>
    $required &&
    `
    &::after {
      content: '*';
      color: ${theme.colors.error};
      margin-left: ${theme.spacing.xs};
    }
  `}
`;

// 样式化错误信息
const ErrorMessage = styled.div<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

/**
 * 表单项组件
 * @param props 组件属性
 * @returns 表单项组件
 */
export const FormItem: React.FC<FormItemProps> = ({
  name,
  label,
  rules = [],
  required = false,
  children,
}) => {
  const theme = useTheme();
  const form = useForm();
  const { layout, state, setFieldValue, setFieldTouched, registerField, validateField } = form;
  const { values, errors, touched } = state;

  // 注册字段
  useEffect(() => {
    // 如果required为true但rules中没有required规则，添加一个
    const finalRules = [...rules];
    if (required && !finalRules.some(rule => rule.required)) {
      finalRules.push({
        required: true,
        message: '该字段为必填项',
      });
    }
    
    registerField(name, finalRules);
  }, [name, registerField, rules, required]);

  // 处理值变化
  const handleChange = async (value: any) => {
    setFieldValue(name, value);
    setFieldTouched(name, true);
    
    // 使用Form组件的验证逻辑
    await validateField(name, value);
  };

  // 处理失焦
  const handleBlur = async () => {
    setFieldTouched(name, true);
    
    // 使用Form组件的验证逻辑
    await validateField(name);
  };

  // 获取字段的值
  const value = name && name.includes('.') || name.includes('[') 
    ? getFieldValueFromState(name, values)
    : values[name];

  // 安全地获取嵌套字段值的辅助函数
  function getFieldValueFromState(fieldName: string, stateValues: Record<string, any>): any {
    // 处理数组表示法，例如：users[0].name
    const formattedPath = fieldName.replace(/\[(\w+)\]/g, '.$1');
    const keys = formattedPath.split('.');
    
    let result = stateValues;
    for (const key of keys) {
      if (!result || typeof result !== 'object') return undefined;
      result = result[key];
    }
    
    return result;
  }

  return (
    <FormItemContainer $layout={layout} theme={theme}>
      {label && (
        <Label $required={required} theme={theme}>
          {label}
        </Label>
      )}
      <div style={{ flex: 1 }}>
        {children({
          value,
          onChange: handleChange,
          onBlur: handleBlur,
          error: errors[name] || [],
          touched: touched[name] || false,
          form,
        })}
        {touched[name] && errors[name]?.length > 0 && (
          <ErrorMessage theme={theme}>{errors[name][0]}</ErrorMessage>
        )}
      </div>
    </FormItemContainer>
  );
}; 