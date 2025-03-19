# Form 表单

表单是用来收集、校验和提交数据的组件。

## 何时使用

当需要用户填写信息并提交时，使用表单组件。

## 代码演示

### 基础表单

最基础的表单用法，包含各种表单控件。

```tsx
import React from 'react';
import { Form, FormItem, Input, Button } from '@pixie-ui/core';

export default () => {
  const handleSubmit = (values) => {
    console.log('表单提交:', values);
  };

  return (
    <Form
      initialValues={{
        username: '',
        email: '',
      }}
      onSubmit={handleSubmit}
    >
      <FormItem
        name="username"
        label="用户名"
        required
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      >
        {({ value, onChange, error, touched }) => (
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            error={touched && error.length > 0}
            errorMessage={error[0]}
            placeholder="请输入用户名"
          />
        )}
      </FormItem>

      <FormItem
        name="email"
        label="邮箱"
        rules={[
          {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: '请输入有效的邮箱地址',
          },
        ]}
      >
        {({ value, onChange, error, touched }) => (
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            error={touched && error.length > 0}
            errorMessage={error[0]}
            placeholder="请输入邮箱"
          />
        )}
      </FormItem>

      <div style={{ marginTop: '16px' }}>
        <Button type="submit" variant="primary">
          提交
        </Button>
      </div>
    </Form>
  );
};
```

### 表单验证

支持多种验证规则，包括必填、正则表达式、自定义验证函数等。

```tsx
import React from 'react';
import { Form, FormItem, Input, Button } from '@pixie-ui/core';

export default () => {
  const handleSubmit = (values) => {
    console.log('表单提交:', values);
  };

  const handleError = (errors) => {
    console.log('表单错误:', errors);
  };

  return (
    <Form
      initialValues={{
        username: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={handleSubmit}
      onError={handleError}
    >
      <FormItem
        name="username"
        label="用户名"
        required
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
          {
            min: 3,
            message: '用户名至少3个字符',
          },
          {
            max: 20,
            message: '用户名最多20个字符',
          },
        ]}
      >
        {({ value, onChange, error, touched }) => (
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            error={touched && error.length > 0}
            errorMessage={error[0]}
            placeholder="请输入用户名"
          />
        )}
      </FormItem>

      <FormItem
        name="password"
        label="密码"
        required
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
          {
            min: 6,
            message: '密码至少6个字符',
          },
          {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            message: '密码需包含大小写字母和数字',
          },
        ]}
      >
        {({ value, onChange, error, touched }) => (
          <Input
            type="password"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            error={touched && error.length > 0}
            errorMessage={error[0]}
            placeholder="请输入密码"
          />
        )}
      </FormItem>

      <FormItem
        name="confirmPassword"
        label="确认密码"
        required
        rules={[
          {
            required: true,
            message: '请确认密码',
          },
          {
            validator: (value, formValues) => value === formValues.password,
            message: '两次输入的密码不一致',
          },
        ]}
      >
        {({ value, onChange, error, touched }) => (
          <Input
            type="password"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            error={touched && error.length > 0}
            errorMessage={error[0]}
            placeholder="请确认密码"
          />
        )}
      </FormItem>

      <div style={{ marginTop: '16px' }}>
        <Button type="submit" variant="primary">
          提交
        </Button>
      </div>
    </Form>
  );
};
```

### 表单布局

支持三种布局方式：垂直布局、水平布局和内联布局。

```tsx
import React, { useState } from 'react';
import { Form, FormItem, Input, Button } from '@pixie-ui/core';

export default () => {
  const [layout, setLayout] = useState('vertical');

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <Button 
          variant={layout === 'vertical' ? 'primary' : 'text'} 
          onClick={() => setLayout('vertical')}
          style={{ marginRight: '8px' }}
        >
          垂直布局
        </Button>
        <Button 
          variant={layout === 'horizontal' ? 'primary' : 'text'} 
          onClick={() => setLayout('horizontal')}
          style={{ marginRight: '8px' }}
        >
          水平布局
        </Button>
        <Button 
          variant={layout === 'inline' ? 'primary' : 'text'} 
          onClick={() => setLayout('inline')}
        >
          内联布局
        </Button>
      </div>

      <Form
        layout={layout}
        initialValues={{
          username: '',
          email: '',
        }}
      >
        <FormItem
          name="username"
          label="用户名"
        >
          {({ value, onChange }) => (
            <Input
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="请输入用户名"
            />
          )}
        </FormItem>

        <FormItem
          name="email"
          label="邮箱"
        >
          {({ value, onChange }) => (
            <Input
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="请输入邮箱"
            />
          )}
        </FormItem>

        <div style={{ marginTop: '16px' }}>
          <Button type="submit" variant="primary">
            提交
          </Button>
        </div>
      </Form>
    </div>
  );
};
```

### 自定义表单项

FormItem 可以灵活地包装任何类型的自定义组件。

```tsx
import React from 'react';
import { Form, FormItem, Input, Button } from '@pixie-ui/core';

// 自定义组件示例
const ColorPicker = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: '100%', height: '32px' }}
      />
      <div style={{ marginTop: '8px' }}>
        选中的颜色: {value}
      </div>
    </div>
  );
};

export default () => {
  const handleSubmit = (values) => {
    console.log('表单提交:', values);
  };

  return (
    <Form
      initialValues={{
        username: '',
        favoriteColor: '#1976d2',
      }}
      onSubmit={handleSubmit}
    >
      <FormItem
        name="username"
        label="用户名"
      >
        {({ value, onChange }) => (
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="请输入用户名"
          />
        )}
      </FormItem>

      <FormItem
        name="favoriteColor"
        label="喜欢的颜色"
      >
        {({ value, onChange }) => (
          <ColorPicker
            value={value}
            onChange={onChange}
          />
        )}
      </FormItem>

      <div style={{ marginTop: '16px' }}>
        <Button type="submit" variant="primary">
          提交
        </Button>
      </div>
    </Form>
  );
};
```

### 动态表单项

使用 FormList 可以实现动态增减表单项。

```tsx
import React from 'react';
import { Form, FormItem, FormList, Input, Button } from '@pixie-ui/core';

export default () => {
  const handleSubmit = (values) => {
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
              variant="dashed"
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
```

### 表单联动

通过 onChange 事件可以实现表单项之间的联动。

```tsx
import React from 'react';
import { Form, FormItem, Input, Button } from '@pixie-ui/core';

export default () => {
  const handleSubmit = (values) => {
    console.log('表单提交:', values);
  };

  return (
    <Form
      initialValues={{
        province: '',
        city: '',
      }}
      onChange={(values) => {
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
          const province = form.state.values.province;
          let cities = [];
          
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
```

## API

### Form

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| initialValues | 表单初始值 | `Record<string, any>` | `{}` |
| layout | 表单布局 | `'horizontal' \| 'vertical' \| 'inline'` | `'vertical'` |
| onSubmit | 表单提交回调 | `(values: Record<string, any>) => void` | - |
| onError | 表单验证失败回调 | `(errors: Record<string, string[]>) => void` | - |
| onChange | 表单值变化回调 | `(values: Record<string, any>) => void` | - |
| children | 子元素 | `ReactNode` | - |

### FormItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 字段名 | `string` | - |
| label | 标签文本 | `string` | - |
| rules | 验证规则 | `FormRule[]` | `[]` |
| required | 是否必填 | `boolean` | `false` |
| children | 子渲染函数 | `(props: FormItemRenderProps) => React.ReactNode` | - |

### FormList

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 字段名 | `string` | - |
| children | 子渲染函数 | `(fields: FormListField[], operations: FormListOperations) => React.ReactNode` | - |

### FormRule

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| required | 是否必填 | `boolean` | `false` |
| message | 错误信息 | `string` | - |
| min | 最小值/长度 | `number` | - |
| max | 最大值/长度 | `number` | - |
| pattern | 正则表达式 | `RegExp` | - |
| validator | 自定义验证函数 | `(value: any, formValues: Record<string, any>) => boolean \| Promise<boolean>` | - | 