import React, { useEffect, useRef } from 'react';
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
  font-weight: 500;
  
  ${({ $required, theme }) =>
    $required &&
    `
    &::after {
      content: '*';
      color: ${theme.colors.error};
      margin-left: 4px;
    }
  `}
`;

// 样式化错误信息
const ErrorMessage = styled.div<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-top: 4px;
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
  const { layout, state, setFieldValue, setFieldError, setFieldTouched, registerField } = form;
  const { values, errors, touched } = state;
  const rulesRef = useRef<FormRule[]>(rules);

  // 注册字段
  useEffect(() => {
    registerField(name, rules);
  }, [name, registerField, rules]);

  // 更新规则引用
  useEffect(() => {
    rulesRef.current = rules;
  }, [rules]);

  // 验证字段
  const validateField = async (value: any): Promise<string[]> => {
    const fieldErrors: string[] = [];
    const currentRules = rulesRef.current;

    for (const rule of currentRules) {
      if (rule.required && !value) {
        fieldErrors.push(rule.message || '该字段为必填项');
        continue;
      }

      if (rule.min !== undefined && value < rule.min) {
        fieldErrors.push(rule.message || `不能小于 ${rule.min}`);
        continue;
      }

      if (rule.max !== undefined && value > rule.max) {
        fieldErrors.push(rule.message || `不能大于 ${rule.max}`);
        continue;
      }

      if (rule.pattern && !rule.pattern.test(value)) {
        fieldErrors.push(rule.message || '格式不正确');
        continue;
      }

      if (rule.validator) {
        const isValid = await rule.validator(value);
        if (!isValid) {
          fieldErrors.push(rule.message || '验证失败');
        }
      }
    }

    return fieldErrors;
  };

  // 处理值变化
  const handleChange = async (value: any) => {
    setFieldValue(name, value);
    setFieldTouched(name, true);

    const fieldErrors = await validateField(value);
    setFieldError(name, fieldErrors);
  };

  // 处理失焦
  const handleBlur = async () => {
    setFieldTouched(name, true);
    const fieldErrors = await validateField(values[name]);
    setFieldError(name, fieldErrors);
  };

  return (
    <FormItemContainer $layout={layout} theme={theme}>
      {label && (
        <Label $required={required} theme={theme}>
          {label}
        </Label>
      )}
      <div style={{ flex: 1 }}>
        {children({
          value: values[name],
          onChange: handleChange,
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