import React from 'react';
import { Form, FormItem, Input, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const handleSubmit = (values: Record<string, any>) => {
    console.log('表单提交:', values);
  };

  const handleError = (errors: Record<string, string[]>) => {
    console.log('表单错误:', errors);
  };

  return (
    <Form
      initialValues={{
        username: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={handleSubmit}
      onError={handleError}
    >
      <FormItem
        name="username"
        label="用户名"
        required
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
          {
            min: 3,
            message: '用户名至少3个字符',
          },
          {
            max: 20,
            message: '用户名最多20个字符',
          },
        ]}
      >
        {({ value, onChange, error, touched }) => (
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            error={touched && error.length > 0}
            errorMessage={error[0]}
            placeholder="请输入用户名"
          />
        )}
      </FormItem>

      <FormItem
        name="password"
        label="密码"
        required
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
          {
            min: 6,
            message: '密码至少6个字符',
          },
          {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            message: '密码需包含大小写字母和数字',
          },
        ]}
      >
        {({ value, onChange, error, touched }) => (
          <Input
            type="password"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            error={touched && error.length > 0}
            errorMessage={error[0]}
            placeholder="请输入密码"
          />
        )}
      </FormItem>

      <FormItem
        name="confirmPassword"
        label="确认密码"
        required
        rules={[
          {
            required: true,
            message: '请确认密码',
          },
          {
            validator: (value: any, formValues: Record<string, any> = {}) => value === formValues.password,
            message: '两次输入的密码不一致',
          },
        ]}
      >
        {({ value, onChange, error, touched }) => (
          <Input
            type="password"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            error={touched && error.length > 0}
            errorMessage={error[0]}
            placeholder="请确认密码"
          />
        )}
      </FormItem>

      <div style={{ marginTop: '16px' }}>
        <Button type="submit" variant="primary">
          提交
        </Button>
      </div>
    </Form>
  );
}; 

export default App;