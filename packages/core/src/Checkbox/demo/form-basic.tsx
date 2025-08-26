import React from 'react';
import { Form, FormItem, Checkbox, Button, Space } from '@pixie-ui/core';

export default () => {
  const handleSubmit = (values: Record<string, any>) => {
    // eslint-disable-next-line no-console
    console.log('submit:', values);
  };

  return (
    <Form initialValues={{ agree: false }} onSubmit={handleSubmit}>
      <FormItem name="agree" label="协议" required>
        {({ value, onChange }) => (
          <Checkbox checked={!!value} onChange={(e) => onChange(e.target.checked)}>
            我已阅读并同意协议
          </Checkbox>
        )}
      </FormItem>
      <Space>
        <Button type="submit">提交</Button>
      </Space>
    </Form>
  );
};


