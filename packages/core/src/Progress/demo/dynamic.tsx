import React, { useState, useEffect } from 'react';
import { Progress, Button, Space } from '@pixie-ui/core';

const App: React.FC = () => {
  const [percent, setPercent] = useState(0);

  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      return newPercent > 100 ? 100 : newPercent;
    });
  };

  const decrease = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      return newPercent < 0 ? 0 : newPercent;
    });
  };

  const reset = () => {
    setPercent(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent + 1;
        if (newPercent >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newPercent;
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Space direction="vertical" size="large">
      <Progress percent={percent} />
      
      <Space>
        <Button onClick={decrease} disabled={percent === 0}>
          减少
        </Button>
        <Button onClick={increase} disabled={percent === 100}>
          增加
        </Button>
        <Button onClick={reset} disabled={percent === 0}>
          重置
        </Button>
      </Space>
      
      <div>
        <Progress type="circle" percent={percent} />
        <Progress type="dashboard" percent={percent} />
      </div>
    </Space>
  );
};

export default App; 