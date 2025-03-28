import React from 'react';
import { Watermark } from '@pixie-ui/core';

// 示例用的透明Logo（base64编码）
const logoBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUdwTP///////////4uLi/T09IeHh/Ly8mRkZGHNJdIAAAABdFJOUwBA5thmAAAA8ElEQVQ4y83U0W7CMAyF4R4JgXgkCMS7FkF5CAT7/89aO0Q6SJcLWu0ufyLl+xPHMXYYTvNxm++n5yKcF7+Fv0KrwHn3gV8NgNsgXAMXQa9wEYyDjHsJcJJyKwHO0qslsPigtwTWcC+BdGEJ7MrfC7Axm7fA1tq9BfYlLwGbvxKweeAnxUGD8d0EGt8i0PmKN8o5bz5YYrz5YI0hDX7PwS+3DFwSMHpk4NqBRwauAzj6KTp78MiRgU+HMXxYZnB3nNL+DOyKTwE7y7kTsHVZFbAzA4X9D42dFGbMFExJmLIWZvCFWY0h7N+uLz0/fgGeTL5i6YkU1QAAAABJRU5ErkJggg==';

const App: React.FC = () => (
  <Watermark image={logoBase64} width={64} height={64}>
    <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ fontSize: '18px' }}>图片水印示例</p>
    </div>
  </Watermark>
);

export default App; 