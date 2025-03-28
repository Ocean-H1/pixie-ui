import React, { useState } from 'react';
import { Skeleton, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const showContent = () => {
    setLoading(false);
  };

  const showSkeleton = () => {
    setLoading(true);
  };

  return (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Button 
          onClick={showSkeleton} 
          style={{ marginRight: '8px' }}
          disabled={loading}
        >
          显示骨架屏
        </Button>
        <Button onClick={showContent} disabled={!loading}>
          显示内容
        </Button>
      </div>

      <Skeleton loading={loading} avatar active>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#1976d2',
              marginRight: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            P
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0' }}>Pixie UI</h4>
            <p style={{ margin: 0 }}>
              这是一个由React和TypeScript构建的现代化UI组件库，包含丰富的可定制组件和主题系统。
            </p>
          </div>
        </div>
      </Skeleton>
    </>
  );
};

export default App; 