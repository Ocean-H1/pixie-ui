import React, { useState } from 'react';
import { Drawer } from '@pixie-ui/core';
import { Button } from '@pixie-ui/core';
import { Form, FormItem } from '@pixie-ui/core';
import { Input } from '@pixie-ui/core';
import { Space } from '@pixie-ui/core';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = (values: Record<string, any>) => {
    console.log('表单提交:', values);
    setOpen(false);
  };

  return (
    <>
      <Button variant="primary" onClick={showDrawer}>
        在抽屉中打开表单
      </Button>
      <Drawer
        title="表单抽屉"
        open={open}
        onClose={onClose}
        footer={
          <Space size="middle">
            <Button variant="text" onClick={onClose}>
              取消
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                // 触发表单提交
                const submitBtn = document.getElementById('drawer-form-submit');
                if (submitBtn) {
                  submitBtn.click();
                }
              }}
            >
              提交
            </Button>
          </Space>
        }
      >
        <Form onSubmit={onSubmit}>
          <FormItem name="name" label="姓名" required>
            {({ value, onChange, onBlur, error, touched }) => (
              <Input
                placeholder="请输入姓名"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                error={touched && error.length > 0}
                errorMessage={touched ? error[0] : ''}
              />
            )}
          </FormItem>
          
          <FormItem 
            name="email" 
            label="邮箱" 
            rules={[
              { 
                required: true,
                message: '请输入邮箱地址' 
              },
              {
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: '请输入有效的邮箱地址'
              }
            ]}
          >
            {({ value, onChange, onBlur, error, touched }) => (
              <Input
                placeholder="请输入邮箱"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                error={touched && error.length > 0}
                errorMessage={touched ? error[0] : ''}
              />
            )}
          </FormItem>
          
          <FormItem name="phone" label="电话">
            {({ value, onChange, onBlur, error, touched }) => (
              <Input
                placeholder="请输入电话号码"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                error={touched && error.length > 0}
                errorMessage={touched ? error[0] : ''}
              />
            )}
          </FormItem>
          
          <button id="drawer-form-submit" type="submit" style={{ display: 'none' }}></button>
        </Form>
      </Drawer>
    </>
  );
};

export default App; 