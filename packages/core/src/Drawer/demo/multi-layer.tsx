import React, { useState } from 'react';
import { Drawer } from '@pixie-ui/core';
import { Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [childrenOpen, setChildrenOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        打开第一层抽屉
      </Button>
      <Drawer
        title="第一层抽屉"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Button variant="primary" onClick={() => setChildrenOpen(true)}>
          打开第二层抽屉
        </Button>
        <Drawer
          title="第二层抽屉"
          open={childrenOpen}
          onClose={() => setChildrenOpen(false)}
        >
          <Button variant="primary" onClick={() => setNestedOpen(true)}>
            打开第三层抽屉
          </Button>
          <Drawer
            title="第三层抽屉"
            open={nestedOpen}
            onClose={() => setNestedOpen(false)}
          >
            <p>这是第三层抽屉内容</p>
            <p>你可以根据需要嵌套多层抽屉</p>
          </Drawer>
          <p>这是第二层抽屉内容</p>
        </Drawer>
        <p>这是第一层抽屉内容</p>
      </Drawer>
    </>
  );
};

export default App; 