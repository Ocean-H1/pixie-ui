import React from 'react';
import { Checkbox, Space } from '@pixie-ui/core';

export default () => {
  const [checkedList, setCheckedList] = React.useState<string[]>(['Apple']);
  const options = ['Apple', 'Banana', 'Orange'];
  const allChecked = checkedList.length === options.length;
  const indeterminate = checkedList.length > 0 && !allChecked;

  const onToggleAll = (e: any) => {
    setCheckedList(e.target.checked ? options : []);
  };

  const onToggle = (value: string, checked: boolean) => {
    setCheckedList((prev) => (checked ? [...prev, value] : prev.filter((v) => v !== value)));
  };

  return (
    <Space direction="vertical">
      <Checkbox indeterminate={indeterminate} checked={allChecked} onChange={onToggleAll}>
        全选
      </Checkbox>
      <Space>
        {options.map((opt) => (
          <Checkbox
            key={opt}
            checked={checkedList.includes(opt)}
            onChange={(e) => onToggle(opt, e.target.checked)}
          >
            {opt}
          </Checkbox>
        ))}
      </Space>
    </Space>
  );
};


