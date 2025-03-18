import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Input } from '@pixie-ui/core';

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
    </Container>
  );
}

export default App; 