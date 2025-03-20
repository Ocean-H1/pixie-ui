import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

// 表单布局类型
export type FormLayout = 'horizontal' | 'vertical' | 'inline';

// 表单验证规则
export interface FormRule {
  required?: boolean;
  message?: string;
  min?: number;
  max?: number;
  pattern?: RegExp;
  validator?: (value: any, formValues?: Record<string, any>) => boolean | Promise<boolean>;
}

// 表单状态
export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string[]>;
  touched: Record<string, boolean>;
  rules: Record<string, FormRule[]>;
}

// 表单上下文
export interface FormContextType {
  state: FormState;
  layout: FormLayout;
  setFieldValue: (name: string, value: any) => void;
  setFieldError: (name: string, errors: string[]) => void;
  setFieldTouched: (name: string, touched: boolean) => void;
  registerField: (name: string, rules?: FormRule[]) => void;
  validateField: (name: string, value?: any) => Promise<string[]>;
  validateForm: () => Promise<boolean>;
  resetForm: () => void;
}

// 创建表单上下文
const FormContext = createContext<FormContextType | undefined>(undefined);

// 表单组件属性
export interface FormProps {
  /**
   * 表单初始值
   */
  initialValues?: Record<string, any>;
  /**
   * 表单布局
   * @default 'vertical'
   */
  layout?: FormLayout;
  /**
   * 表单提交回调
   */
  onSubmit?: (values: Record<string, any>) => void;
  /**
   * 表单验证失败回调
   */
  onError?: (errors: Record<string, string[]>) => void;
  /**
   * 表单值变化回调
   */
  onChange?: (values: Record<string, any>) => void;
  /**
   * 子元素
   */
  children: ReactNode;
}

// 样式化表单容器
const StyledForm = styled.form<{
  $layout: FormLayout;
  theme: Theme;
}>`
  display: flex;
  flex-direction: ${({ $layout }) => ($layout === 'inline' ? 'row' : 'column')};
  gap: ${({ theme, $layout }) => 
    $layout === 'inline' ? theme.spacing.md : theme.spacing.sm
  };
  flex-wrap: ${({ $layout }) => ($layout === 'inline' ? 'wrap' : 'nowrap')};
  width: 100%;
`;

/**
 * 获取嵌套对象的属性值
 * @param obj 对象
 * @param path 属性路径
 * @returns 属性值
 */
const getNestedValue = (obj: Record<string, any>, path: string): any => {
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
};

/**
 * 设置嵌套对象的属性值
 * @param obj 对象
 * @param path 属性路径
 * @param value 属性值
 * @returns 更新后的对象
 */
const setNestedValue = (obj: Record<string, any>, path: string, value: any): Record<string, any> => {
  if (!path) return obj;
  
  const result = { ...obj };
  
  // 处理数组表示法，例如：users[0].name
  const formattedPath = path.replace(/\[(\w+)\]/g, '.$1');
  const keys = formattedPath.split('.');
  
  let current = result;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    // 如果属性不存在或不是对象，创建一个新的对象或数组
    if (!current[key] || typeof current[key] !== 'object') {
      // 判断下一个key是否是数字，如果是则创建数组，否则创建对象
      const nextKey = keys[i + 1];
      const isNextKeyNumeric = /^\d+$/.test(nextKey);
      current[key] = isNextKeyNumeric ? [] : {};
    }
    current = current[key];
  }
  
  const lastKey = keys[keys.length - 1];
  current[lastKey] = value;
  
  return result;
};

/**
 * 表单组件
 * @param props 组件属性
 * @returns 表单组件
 */
export const Form: React.FC<FormProps> = ({
  initialValues = {},
  layout = 'vertical',
  onSubmit,
  onError,
  onChange,
  children,
  ...rest
}) => {
  const theme = useTheme();
  
  // 初始化表单状态
  const [state, setState] = useState<FormState>({
    values: { ...initialValues },
    errors: {},
    touched: {},
    rules: {},
  });

  // 注册表单字段
  const registerField = useCallback((name: string, rules?: FormRule[]) => {
    if (!name) return;
    
    setState(prevState => {
      // 检查字段是否已经存在
      if (prevState.rules[name]) {
        // 如果规则相同，不需要更新
        if (JSON.stringify(prevState.rules[name]) === JSON.stringify(rules || [])) {
          return prevState;
        }
        
        // 仅更新规则
        return {
          ...prevState,
          rules: {
            ...prevState.rules,
            [name]: rules || [],
          },
        };
      }
      
      // 初始化字段值（支持嵌套字段）
      const value = getNestedValue(prevState.values, name);
      const defaultValue = value !== undefined ? value : '';
      
      return {
        ...prevState,
        values: setNestedValue(prevState.values, name, defaultValue),
        errors: {
          ...prevState.errors,
          [name]: [],
        },
        touched: {
          ...prevState.touched,
          [name]: false,
        },
        rules: {
          ...prevState.rules,
          [name]: rules || [],
        },
      };
    });
  }, []);

  // 设置字段值
  const setFieldValue = useCallback((name: string, value: any) => {
    if (!name) return;
    
    setState(prevState => {
      const newValues = setNestedValue(prevState.values, name, value);
      
      // 调用onChange回调
      if (onChange) {
        onChange(newValues);
      }
      
      return {
        ...prevState,
        values: newValues,
      };
    });
  }, [onChange]);

  // 设置字段错误
  const setFieldError = useCallback((name: string, errors: string[]) => {
    if (!name) return;
    
    setState(prevState => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [name]: errors,
      },
    }));
  }, []);

  // 设置字段触碰状态
  const setFieldTouched = useCallback((name: string, touched: boolean) => {
    if (!name) return;
    
    setState(prevState => ({
      ...prevState,
      touched: {
        ...prevState.touched,
        [name]: touched,
      },
    }));
  }, []);

  // 验证字段
  const validateField = useCallback(async (name: string, value?: any): Promise<string[]> => {
    if (!name) return [];
    
    // 使用传入的值或从状态中获取值
    const fieldValue = value !== undefined ? value : getNestedValue(state.values, name);
    const rules = state.rules[name] || [];
    const fieldErrors: string[] = [];
    
    // 使用字段的规则进行验证
    for (const rule of rules) {
      // 必填验证
      if (rule.required && (fieldValue === undefined || fieldValue === null || fieldValue === '')) {
        fieldErrors.push(rule.message || '该字段为必填项');
        continue;
      }
      
      // 跳过空值（非必填字段为空时不进行后续验证）
      if (fieldValue === undefined || fieldValue === null || fieldValue === '') {
        continue;
      }
      
      // 最小值验证
      if (rule.min !== undefined && Number(fieldValue) < rule.min) {
        fieldErrors.push(rule.message || `不能小于 ${rule.min}`);
        continue;
      }
      
      // 最大值验证
      if (rule.max !== undefined && Number(fieldValue) > rule.max) {
        fieldErrors.push(rule.message || `不能大于 ${rule.max}`);
        continue;
      }
      
      // 正则验证
      if (rule.pattern && !rule.pattern.test(String(fieldValue))) {
        fieldErrors.push(rule.message || '格式不正确');
        continue;
      }
      
      // 自定义验证器
      if (rule.validator) {
        try {
          const result = await Promise.resolve(rule.validator(fieldValue, state.values));
          if (!result) {
            fieldErrors.push(rule.message || '验证失败');
          }
        } catch (error) {
          fieldErrors.push(rule.message || '验证出错');
        }
      }
    }
    
    // 更新错误状态
    setFieldError(name, fieldErrors);
    
    return fieldErrors;
  }, [state.values, state.rules, setFieldError]);

  // 验证整个表单
  const validateForm = useCallback(async (): Promise<boolean> => {
    const fieldNames = Object.keys(state.rules);
    const validationPromises = fieldNames.map(name => validateField(name));
    const validationResults = await Promise.all(validationPromises);
    
    const isValid = validationResults.every(errors => errors.length === 0);
    
    if (!isValid && onError) {
      onError(state.errors);
    }
    
    return isValid;
  }, [state.rules, state.errors, validateField, onError]);

  // 重置表单
  const resetForm = useCallback(() => {
    setState({
      values: { ...initialValues },
      errors: {},
      touched: {},
      rules: { ...state.rules },
    });
  }, [initialValues, state.rules]);

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isValid = await validateForm();
    
    if (isValid && onSubmit) {
      onSubmit(state.values);
    }
  };

  // 表单上下文值
  const contextValue: FormContextType = {
    state,
    layout,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    registerField,
    validateField,
    validateForm,
    resetForm,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <StyledForm onSubmit={handleSubmit} $layout={layout} theme={theme} {...rest}>
        {children}
      </StyledForm>
    </FormContext.Provider>
  );
};

// 导出useForm hook
export const useForm = (): FormContextType => {
  const context = useContext(FormContext);
  
  if (!context) {
    throw new Error('useForm must be used within a Form component');
  }
  
  return context;
}; 