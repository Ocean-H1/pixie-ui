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
  validator?: (value: any) => boolean | Promise<boolean>;
}

// 表单状态
export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string[]>;
  touched: Record<string, boolean>;
}

// 表单上下文
export interface FormContextType {
  state: FormState;
  layout: FormLayout;
  setFieldValue: (name: string, value: any) => void;
  setFieldError: (name: string, errors: string[]) => void;
  setFieldTouched: (name: string, touched: boolean) => void;
  registerField: (name: string, rules?: FormRule[]) => void;
  validateField: (name: string) => Promise<boolean>;
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
  });

  // 注册表单字段
  const registerField = useCallback((name: string, rules?: FormRule[]) => {
    setState(prevState => {
      // 如果字段已经存在，则不需要重新注册
      if (Object.prototype.hasOwnProperty.call(prevState.values, name)) {
        return prevState;
      }
      
      return {
        ...prevState,
        values: {
          ...prevState.values,
          [name]: prevState.values[name] !== undefined ? prevState.values[name] : '',
        },
        errors: {
          ...prevState.errors,
          [name]: [],
        },
        touched: {
          ...prevState.touched,
          [name]: false,
        },
      };
    });
  }, []);

  // 设置字段值
  const setFieldValue = useCallback((name: string, value: any) => {
    setState(prevState => {
      const newValues = {
        ...prevState.values,
        [name]: value,
      };
      
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
    setState(prevState => ({
      ...prevState,
      touched: {
        ...prevState.touched,
        [name]: touched,
      },
    }));
  }, []);

  // 验证字段
  const validateField = useCallback(async (name: string): Promise<boolean> => {
    // 获取对应的FormItem组件，以便获取验证规则
    const value = state.values[name];
    const fieldErrors: string[] = [];
    
    // 这里应该是从FormItem获取规则，但目前简化处理
    // 在实际使用中，规则会从FormItem组件传入
    
    // 更新错误状态
    setFieldError(name, fieldErrors);
    
    return fieldErrors.length === 0;
  }, [state.values, setFieldError]);

  // 验证整个表单
  const validateForm = useCallback(async (): Promise<boolean> => {
    const fieldNames = Object.keys(state.values);
    const results = await Promise.all(fieldNames.map(name => validateField(name)));
    
    const isValid = results.every(Boolean);
    
    if (!isValid && onError) {
      onError(state.errors);
    }
    
    return isValid;
  }, [state.values, state.errors, validateField, onError]);

  // 重置表单
  const resetForm = useCallback(() => {
    setState({
      values: { ...initialValues },
      errors: {},
      touched: {},
    });
  }, [initialValues]);

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