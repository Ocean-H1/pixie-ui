import React from 'react';
import { Checkbox, Space } from '@pixie-ui/core';

export default () => {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <Space>
      <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
        受控复选框
      </Checkbox>
      <span>状态：{checked ? '选中' : '未选中'}</span>
    </Space>
  );
};


