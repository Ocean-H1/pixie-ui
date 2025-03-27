import React, { useState, useEffect } from 'react';
import { Card, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      <Card loading={loading} title="数据加载中">
        <p>卡片内容</p>
        <p>加载完成后显示的内容</p>
      </Card>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => setLoading(!loading)}>
          {loading ? '停止加载' : '开始加载'}
        </Button>
      </div>
    </div>
  );
};

export default App;