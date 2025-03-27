import React from 'react';
import { Form, FormItem, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const handleSubmit = (values: Record<string, any>) => {
    console.log('表单提交:', values);
  };

  return (
    <Form
      initialValues={{
        province: '',
        city: '',
      }}
      onChange={(values: Record<string, any>) => {
        console.log('表单值变化:', values);
      }}
      onSubmit={handleSubmit}
    >
      <FormItem
        name="province"
        label="省份"
      >
        {({ value, onChange }) => (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
              padding: '8px',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              width: '100%',
            }}
          >
            <option value="">请选择省份</option>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="guangdong">广东</option>
          </select>
        )}
      </FormItem>

      <FormItem
        name="city"
        label="城市"
      >
        {({ value, onChange, form }) => {
          const province = form?.state?.values?.province || '';
          let cities: Array<{ value: string; label: string }> = [];
          
          if (province === 'beijing') {
            cities = [{ value: 'chaoyang', label: '朝阳区' }, { value: 'haidian', label: '海淀区' }];
          } else if (province === 'shanghai') {
            cities = [{ value: 'pudong', label: '浦东新区' }, { value: 'huangpu', label: '黄浦区' }];
          } else if (province === 'guangdong') {
            cities = [{ value: 'guangzhou', label: '广州' }, { value: 'shenzhen', label: '深圳' }];
          }
          
          return (
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              disabled={!province}
              style={{
                padding: '8px',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                width: '100%',
              }}
            >
              <option value="">请选择城市</option>
              {cities.map(city => (
                <option key={city.value} value={city.value}>{city.label}</option>
              ))}
            </select>
          );
        }}
      </FormItem>

      <div style={{ marginTop: '16px' }}>
        <Button type="submit" variant="primary">
          提交
        </Button>
      </div>
    </Form>
  );
}; 

export default App;