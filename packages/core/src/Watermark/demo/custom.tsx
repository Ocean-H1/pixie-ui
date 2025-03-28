import React, { useState } from 'react';
import { Watermark } from '@pixie-ui/core';

const App: React.FC = () => {
  const [fontSize, setFontSize] = useState(16);
  const [rotate, setRotate] = useState(-22);
  const [gap, setGap] = useState<[number, number]>([100, 100]);
  const [opacity, setOpacity] = useState(0.15);
  
  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <div style={{ marginBottom: '8px' }}>
          <label>字体大小: {fontSize}px</label>
          <input
            type="range"
            min="12"
            max="24"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            style={{ marginLeft: '12px', width: '150px' }}
          />
        </div>
        
        <div style={{ marginBottom: '8px' }}>
          <label>旋转角度: {rotate}°</label>
          <input
            type="range"
            min="-90"
            max="90"
            value={rotate}
            onChange={(e) => setRotate(Number(e.target.value))}
            style={{ marginLeft: '12px', width: '150px' }}
          />
        </div>
        
        <div style={{ marginBottom: '8px' }}>
          <label>水印间距: {gap[0]}px</label>
          <input
            type="range"
            min="50"
            max="200"
            value={gap[0]}
            onChange={(e) => {
              const value = Number(e.target.value);
              setGap([value, value]);
            }}
            style={{ marginLeft: '12px', width: '150px' }}
          />
        </div>
        
        <div style={{ marginBottom: '8px' }}>
          <label>透明度: {opacity}</label>
          <input
            type="range"
            min="0.05"
            max="0.3"
            step="0.01"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            style={{ marginLeft: '12px', width: '150px' }}
          />
        </div>
      </div>
      
      <Watermark
        content="Pixie UI Watermark"
        font={{
          fontSize,
          color: `rgba(0, 0, 0, ${opacity})`,
        }}
        rotate={rotate}
        gap={gap}
      >
        <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px dashed #ccc' }}>
          <p style={{ fontSize: '18px' }}>自定义水印设置示例</p>
        </div>
      </Watermark>
    </div>
  );
};

export default App; 