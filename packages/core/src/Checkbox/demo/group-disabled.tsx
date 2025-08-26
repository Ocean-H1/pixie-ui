import React from 'react';
import { CheckboxGroup } from '@pixie-ui/core';

export default () => (
  <CheckboxGroup disabled options={["Apple", "Banana", "Orange"]} defaultValue={["Apple", "Orange"]} />
);


