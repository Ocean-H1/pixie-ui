import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Input, Icon, Rate } from '@pixie-ui/core';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [rateValue, setRateValue] = useState(3);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!value.includes('@'));
  };

  const handleSubmit = () => {
    if (name && email && !emailError) {
      alert(`表单提交成功！\n姓名: ${name}\n邮箱: ${email}`);
    } else {
      alert('请填写完整且正确的表单信息');
    }
  };

  return (
    <Container>
      <Title>Pixie UI 示例</Title>

      <Section>
        <SectionTitle>按钮组件</SectionTitle>
        <ButtonGroup>
          <Button variant="primary">主要按钮</Button>
          <Button variant="secondary">次要按钮</Button>
          <Button variant="text">文本按钮</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button size="small">小按钮</Button>
          <Button size="medium">中按钮</Button>
          <Button size="large">大按钮</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button disabled>禁用按钮</Button>
        </ButtonGroup>
      </Section>

      <Section>
        <SectionTitle>输入框组件</SectionTitle>
        <FormGroup>
          <Input
            placeholder="请输入姓名"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="请输入邮箱"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            errorMessage="请输入有效的邮箱地址"
          />
          <Button onClick={handleSubmit}>提交</Button>
        </FormGroup>
      </Section>

      <Section>
        <SectionTitle>Icon 组件示例</SectionTitle>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Icon icon="mdi:home" />
          <Icon icon="mdi:account" />
          <Icon icon="mdi:bell" />
          <Icon icon="mdi:settings" />
          <Icon icon="mdi:heart" />
        </div>
      </Section>

      <Section>
        <SectionTitle>图标尺寸</SectionTitle>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Icon icon="mdi:home" size="small" />
          <Icon icon="mdi:home" size="medium" />
          <Icon icon="mdi:home" size="large" />
          <Icon icon="mdi:home" size={36} />
        </div>
      </Section>

      <Section>
        <SectionTitle>图标颜色</SectionTitle>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Icon icon="mdi:home" color="red" />
          <Icon icon="mdi:home" color="green" />
          <Icon icon="mdi:home" color="blue" />
          <Icon icon="mdi:home" color="#f50" />
        </div>
      </Section>

      <Section>
        <SectionTitle>图标旋转与翻转</SectionTitle>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Icon icon="mdi:arrow-right" />
          <Icon icon="mdi:arrow-right" rotate={90} />
          <Icon icon="mdi:arrow-right" rotate={180} />
          <Icon icon="mdi:arrow-right" rotate={270} />
          <Icon icon="mdi:arrow-right" horizontalFlip />
          <Icon icon="mdi:arrow-right" verticalFlip />
        </div>
      </Section>

      <Section>
        <SectionTitle>内联使用</SectionTitle>
        <p>这是一段文本，带有一个<Icon icon="mdi:home" inline />图标，图标与文本对齐。</p>
        <p>这是另一段文本，带有一个<Icon icon="mdi:bell" color="red" inline />警告图标。</p>
      </Section>

      <Section>
        <SectionTitle>与按钮组合使用</SectionTitle>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button>
            <Icon icon="mdi:home" inline style={{ marginRight: '8px' }} />
            首页
          </Button>
          <Button variant="secondary">
            <Icon icon="mdi:plus" inline style={{ marginRight: '8px' }} />
            新增
          </Button>
          <Button variant="text">
            <Icon icon="mdi:delete" inline style={{ marginRight: '8px' }} />
            删除
          </Button>
        </div>
      </Section>

      <Section>
        <SectionTitle>可点击图标</SectionTitle>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Icon 
            icon="mdi:thumb-up" 
            size="large" 
            onClick={() => alert('点赞成功！')} 
            style={{ cursor: 'pointer' }} 
          />
          <Icon 
            icon="mdi:share" 
            size="large" 
            onClick={() => alert('分享成功！')} 
            style={{ cursor: 'pointer' }} 
          />
        </div>
      </Section>

      <Section>
        <SectionTitle>Rate 评分组件</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
          <div>
            <h3>基本用法</h3>
            <Rate defaultValue={2.5} />
          </div>
          
          <div>
            <h3>半星</h3>
            <Rate allowHalf defaultValue={2.5} />
          </div>
          
          <div>
            <h3>文案展示</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Rate 
                tooltips={['很糟糕', '糟糕', '一般', '好', '很好']}
                onChange={setRateValue}
                value={rateValue}
              />
              {rateValue ? (
                <span style={{ marginLeft: 10 }}>
                  {['很糟糕', '糟糕', '一般', '好', '很好'][rateValue - 1]}
                </span>
              ) : ''}
            </div>
          </div>
          
          <div>
            <h3>只读</h3>
            <Rate disabled defaultValue={2} />
          </div>
          
          <div>
            <h3>清除</h3>
            <div>
              <div>允许清除：</div>
              <Rate defaultValue={3} />
            </div>
            <div style={{ marginTop: '8px' }}>
              <div>禁用清除：</div>
              <Rate allowClear={false} defaultValue={3} />
            </div>
          </div>
          
          <div>
            <h3>自定义字符</h3>
            <div>
              <Rate character={<Icon icon="mdi:heart" />} defaultValue={2} />
            </div>
            <div style={{ marginTop: '8px' }}>
              <Rate character="A" allowHalf defaultValue={2.5} />
            </div>
            <div style={{ marginTop: '8px' }}>
              <Rate character="好" defaultValue={3} />
            </div>
          </div>
          
          <div>
            <h3>其他字符</h3>
            <div>
              <Rate character={<Icon icon="mdi:emoticon" />} defaultValue={2} />
            </div>
            <div style={{ marginTop: '8px' }}>
              <Rate character={<Icon icon="mdi:thumb-up" />} allowHalf defaultValue={2.5} />
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}

export default App; 