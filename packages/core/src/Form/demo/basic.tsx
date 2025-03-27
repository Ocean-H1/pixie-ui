import React from 'react';
import { Form, FormItem, Input, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const handleSubmit = (values: Record<string, any>) => {
    console.log('表单提交:', values);
  };

  return (
    <Form
      initialValues={{
        username: '',
        email: '',
      }}
      onSubmit={handleSubmit}
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
        name="email"
        label="邮箱"
        rules={[
          {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: '请输入有效的邮箱地址',
          },
        ]}
      >
        {({ value, onChange, error, touched }) => (
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            error={touched && error.length > 0}
            errorMessage={error[0]}
            placeholder="请输入邮箱"
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