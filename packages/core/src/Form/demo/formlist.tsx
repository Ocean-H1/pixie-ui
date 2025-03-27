import React from 'react';
import { Form, FormItem, FormList, Input, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const handleSubmit = (values: Record<string, any>) => {
    console.log('表单提交:', values);
  };

  return (
    <Form
      initialValues={{
        users: [{ name: '', email: '' }],
      }}
      onSubmit={handleSubmit}
    >
      <FormList name="users">
        {(fields, { add, remove }) => (
          <div>
            <h3>用户列表</h3>
            {fields.map((field, index) => (
              <div key={field.key} style={{ marginBottom: '16px', padding: '16px', border: '1px dashed #e0e0e0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <h4 style={{ margin: 0 }}>用户 {index + 1}</h4>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => remove(index)}
                  >
                    删除
                  </Button>
                </div>
                
                <FormItem
                  name={`${field.name}.name`}
                  label="姓名"
                  required
                >
                  {({ value, onChange, error, touched }) => (
                    <Input
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      error={touched && error?.length > 0}
                      errorMessage={error?.[0]}
                      placeholder="请输入姓名"
                    />
                  )}
                </FormItem>
                
                <FormItem
                  name={`${field.name}.email`}
                  label="邮箱"
                  required
                >
                  {({ value, onChange, error, touched }) => (
                    <Input
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      error={touched && error?.length > 0}
                      errorMessage={error?.[0]}
                      placeholder="请输入邮箱"
                    />
                  )}
                </FormItem>
              </div>
            ))}
            
            <Button
              variant="secondary"
              onClick={() => add({ name: '', email: '' })}
              style={{ width: '100%' }}
            >
              + 添加用户
            </Button>
          </div>
        )}
      </FormList>

      <div style={{ marginTop: '16px' }}>
        <Button type="submit" variant="primary">
          提交
        </Button>
      </div>
    </Form>
  );
}; 

export default App;