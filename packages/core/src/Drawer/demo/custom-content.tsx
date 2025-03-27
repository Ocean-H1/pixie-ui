import React, { useState } from 'react';
import { Drawer } from '@pixie-ui/core';
import { Button } from '@pixie-ui/core';
import { Icon } from '@pixie-ui/core';
import styled from '@emotion/styled';
import { useTheme, Theme } from '@pixie-ui/theme';

// 自定义内容容器
const CustomContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// 自定义头部
const CustomHeader = styled.div<{ theme: Theme }>`
  padding: 24px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .header-title {
    font-size: 20px;
    font-weight: bold;
  }
  
  .header-close {
    cursor: pointer;
    color: white;
    
    &:hover {
      opacity: 0.8;
    }
  }
`;

// 自定义主体
const CustomBody = styled.div`
  padding: 24px;
  flex: 1;
  overflow-y: auto;
`;

// 自定义底部
const CustomFooter = styled.div<{ theme: Theme }>`
  padding: 16px 24px;
  background-color: ${props => props.theme.colors.surface};
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="primary" onClick={showDrawer}>
        打开自定义抽屉
      </Button>
      <Drawer
        open={open}
        onClose={onClose}
        drawerRender={() => (
          <CustomContent>
            <CustomHeader theme={theme}>
              <div className="header-title">自定义抽屉</div>
              <div className="header-close" onClick={onClose}>
                <Icon icon="mdi:close" />
              </div>
            </CustomHeader>
            <CustomBody>
              <p>你可以使用 drawerRender 属性完全自定义抽屉的内容。</p>
              <p>这允许你创建完全自定义的布局、样式和行为。</p>
              <p>例如，你可以：</p>
              <ul>
                <li>创建自定义的标题栏</li>
                <li>添加特殊的内容区域</li>
                <li>定制页脚的样式和功能</li>
              </ul>
            </CustomBody>
            <CustomFooter theme={theme}>
              <Button variant="text" onClick={onClose}>
                取消
              </Button>
              <Button variant="primary" onClick={onClose}>
                确定
              </Button>
            </CustomFooter>
          </CustomContent>
        )}
      />
    </>
  );
};

export default App; 