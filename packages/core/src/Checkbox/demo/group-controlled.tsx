import React from 'react';
import { CheckboxGroup, Space } from '@pixie-ui/core';

export default () => {
  const [vals, setVals] = React.useState<(string | number)[]>(['Apple']);
  return (
    <Space direction="vertical">
      <CheckboxGroup value={vals} options={["Apple", "Banana", "Orange"]} onChange={setVals} />
      <div>当前值：{JSON.stringify(vals)}</div>
    </Space>
  );
};


