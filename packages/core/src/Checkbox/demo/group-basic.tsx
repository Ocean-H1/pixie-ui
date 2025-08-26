import React from 'react';
import { CheckboxGroup } from '@pixie-ui/core';

export default () => (
  <CheckboxGroup options={["Apple", "Banana", { label: 'Orange', value: 'Orange', disabled: true }]} defaultValue={["Apple"]} />
);


