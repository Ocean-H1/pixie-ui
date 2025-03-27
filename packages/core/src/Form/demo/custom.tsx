import React from 'react';
import { Form, FormItem, Input, Button } from '@pixie-ui/core';

// 自定义组件示例
const ColorPicker = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  return (
    <div>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: '100%', height: '32px' }}
      />
      <div style={{ marginTop: '8px' }}>
        选中的颜色: {value}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const handleSubmit = (values: Record<string, any>) => {
    console.log('表单提交:', values);
  };

  return (
    <Form
      initialValues={{
        username: '',
        favoriteColor: '#1976d2',
      }}
      onSubmit={handleSubmit}
    >
      <FormItem
        name="username"
        label="用户名"
      >
        {({ value, onChange }) => (
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="请输入用户名"
          />
        )}
      </FormItem>

      <FormItem
        name="favoriteColor"
        label="喜欢的颜色"
      >
        {({ value, onChange }) => (
          <ColorPicker
            value={value}
            onChange={onChange}
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