import React from 'react';
import { Checkbox, Space } from '@pixie-ui/core';

export default () => (
  <Space>
    <Checkbox disabled>禁用</Checkbox>
    <Checkbox defaultChecked disabled>
      选中且禁用
    </Checkbox>
  </Space>
);


