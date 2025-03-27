import React, { useState } from 'react';
import { Form, FormItem, Input, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const [layout, setLayout] = useState<'vertical' | 'horizontal' | 'inline'>('vertical');

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <Button 
          variant={layout === 'vertical' ? 'primary' : 'text'} 
          onClick={() => setLayout('vertical')}
          style={{ marginRight: '8px' }}
        >
          垂直布局
        </Button>
        <Button 
          variant={layout === 'horizontal' ? 'primary' : 'text'} 
          onClick={() => setLayout('horizontal')}
          style={{ marginRight: '8px' }}
        >
          水平布局
        </Button>
        <Button 
          variant={layout === 'inline' ? 'primary' : 'text'} 
          onClick={() => setLayout('inline')}
        >
          内联布局
        </Button>
      </div>

      <Form
        layout={layout}
        initialValues={{
          username: '',
          email: '',
        }}
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
          name="email"
          label="邮箱"
        >
          {({ value, onChange }) => (
            <Input
              value={value}
              onChange={(e) => onChange(e.target.value)}
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
    </div>
  );
}; 

export default App;