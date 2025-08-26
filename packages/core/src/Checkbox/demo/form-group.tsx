import React from 'react';
import { Form, FormItem, CheckboxGroup, Button, Space } from '@pixie-ui/core';

export default () => {
  const handleSubmit = (values: Record<string, any>) => {
    // eslint-disable-next-line no-console
    console.log('submit:', values);
  };

  return (
    <Form initialValues={{ fruits: ['Apple'] }} onSubmit={handleSubmit}>
      <FormItem name="fruits" label="喜爱的水果" required>
        {({ value, onChange }) => (
          <CheckboxGroup
            name="fruits"
            options={["Apple", "Banana", { label: 'Orange', value: 'Orange', disabled: true }]}
            value={value}
            onChange={onChange}
          />
        )}
      </FormItem>
      <Space>
        <Button type="submit">提交</Button>
      </Space>
    </Form>
  );
};


