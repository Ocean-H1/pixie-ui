import { useState, useEffect } from 'react';

/**
 * 媒体查询钩子函数
 * @param query 媒体查询字符串
 * @returns 是否匹配
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // 在服务器端渲染时返回false
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    // 初始化
    handleChange();

    // 监听变化
    mediaQuery.addEventListener('change', handleChange);

    // 清理
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
} 