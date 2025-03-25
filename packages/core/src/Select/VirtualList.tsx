import React, { useRef, useState, useCallback } from 'react';
import styled from '@emotion/styled';

export interface VirtualListProps<T> {
  /**
   * 数据源
   */
  dataSource: T[];
  /**
   * 列表项高度
   */
  itemHeight: number;
  /**
   * 容器高度
   */
  height: number;
  /**
   * 渲染列表项的函数
   */
  renderItem: (item: T, index: number) => React.ReactNode;
  /**
   * 列表滚动事件
   */
  onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
}

const VirtualListContainer = styled.div`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  will-change: transform;
`;

const VirtualListContent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`;

export function VirtualList<T>({
  dataSource,
  itemHeight,
  height,
  renderItem,
  onScroll,
}: VirtualListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  
  // 计算可视区域内的起始和结束索引
  const visibleCount = Math.ceil(height / itemHeight) + 1;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(dataSource.length - 1, startIndex + visibleCount);
  
  // 计算总高度和可视区域的偏移量
  const totalHeight = dataSource.length * itemHeight;
  const offsetY = startIndex * itemHeight;
  
  // 处理滚动事件
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setScrollTop(scrollTop);
    
    // 调用外部传入的滚动事件
    onScroll?.(e);
  }, [onScroll]);
  
  // 仅渲染可见区域内的数据
  const visibleData = dataSource.slice(startIndex, endIndex + 1);
  
  return (
    <VirtualListContainer
      ref={containerRef}
      style={{ height }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight }}></div>
      <VirtualListContent style={{ transform: `translateY(${offsetY}px)` }}>
        {visibleData.map((item, index) => 
          <div key={startIndex + index} style={{ height: itemHeight }}>
            {renderItem(item, startIndex + index)}
          </div>
        )}
      </VirtualListContent>
    </VirtualListContainer>
  );
} 