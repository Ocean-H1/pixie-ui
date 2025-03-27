import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

export type DotPosition = 'top' | 'bottom' | 'left' | 'right';
export type Effect = 'scrollx' | 'fade';

export interface CarouselProps {
  /**
   * 是否显示箭头
   * @default false
   */
  arrows?: boolean;
  /**
   * 是否自动切换
   * @default false
   */
  autoplay?: boolean | { dotDuration?: boolean };
  /**
   * 自动切换的间隔（毫秒）
   * @default 3000
   */
  autoplaySpeed?: number;
  /**
   * 高度自适应
   * @default false
   */
  adaptiveHeight?: boolean;
  /**
   * 面板指示点位置
   * @default 'bottom'
   */
  dotPosition?: DotPosition;
  /**
   * 是否显示面板指示点
   * @default true
   */
  dots?: boolean | { className?: string };
  /**
   * 是否启用拖拽切换
   * @default false
   */
  draggable?: boolean;
  /**
   * 使用渐变切换动效
   * @default false
   */
  fade?: boolean;
  /**
   * 是否无限循环切换
   * @default true
   */
  infinite?: boolean;
  /**
   * 切换动效的时间（毫秒）
   * @default 500
   */
  speed?: number;
  /**
   * 动画效果
   * @default 'linear'
   */
  easing?: string;
  /**
   * 动画效果函数
   * @default 'scrollx'
   */
  effect?: Effect;
  /**
   * 切换面板的回调
   */
  afterChange?: (current: number) => void;
  /**
   * 切换面板的回调
   */
  beforeChange?: (current: number, next: number) => void;
  /**
   * 是否等待切换动画
   * @default false
   */
  waitForAnimate?: boolean;
  /**
   * 子元素
   */
  children: React.ReactNode;
}

const CarouselContainer = styled.div<{
  theme: Theme;
}>`
  position: relative;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`;

interface SlideContainerProps {
  $fade: boolean;
  $speed: number;
  $easing: string;
  $transform: number;
  theme: Theme;
}

const SlideContainer = styled.div<SlideContainerProps>`
  display: flex;
  width: 100%;
  height: 100%;
  transition-property: ${({ $fade }) => ($fade ? 'opacity' : 'transform')};
  transition-duration: ${({ $speed }) => `${$speed}ms`};
  transition-timing-function: ${({ $easing }) => $easing};
  transform: ${({ $transform, $fade }) => ($fade ? 'none' : `translateX(-${$transform}%)`)};
`;

const Slide = styled.div<{
  $fade: boolean;
  $active: boolean;
  theme: Theme;
}>`
  flex: 0 0 100%;
  width: 100%;
  position: relative;
  opacity: ${({ $fade, $active }) => ($fade ? ($active ? 1 : 0) : 1)};
  transition: opacity ${({ $fade }) => ($fade ? '500ms' : '0ms')} ease;
  ${({ $fade, $active }) => ($fade && !$active ? 'position: absolute; top: 0; left: 0;' : '')}
`;

const DotsContainer = styled.div<{
  $position: DotPosition;
  theme: Theme;
}>`
  display: flex;
  position: absolute;
  ${({ $position }) => {
    switch ($position) {
      case 'top':
        return 'top: 8px; left: 50%; transform: translateX(-50%); flex-direction: row;';
      case 'bottom':
        return 'bottom: 8px; left: 50%; transform: translateX(-50%); flex-direction: row;';
      case 'left':
        return 'left: 8px; top: 50%; transform: translateY(-50%); flex-direction: column;';
      case 'right':
        return 'right: 8px; top: 50%; transform: translateY(-50%); flex-direction: column;';
      default:
        return 'bottom: 8px; left: 50%; transform: translateX(-50%); flex-direction: row;';
    }
  }}
  margin: ${({ theme }) => theme.spacing.xs};
`;

interface DotProps {
  $active: boolean;
  $isDuration: boolean;
  $duration: number;
  theme: Theme;
}

const Dot = styled.span<DotProps>`
  width: 8px;
  height: 8px;
  margin: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radii.round};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : 'rgba(0, 0, 0, 0.3)'};
  cursor: pointer;
  transition: background-color 300ms ease;
  position: relative;
  
  ${({ $isDuration, $active, $duration }) =>
    $isDuration && $active
      ? `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: inherit;
      transform-origin: left;
      transform: scaleX(0);
      animation: dot-progress ${$duration}ms linear forwards;
    }
    
    @keyframes dot-progress {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }
  `
      : ''}
`;

const ArrowButton = styled.button<{
  $direction: 'prev' | 'next';
  theme: Theme;
}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $direction }) => ($direction === 'prev' ? 'left: 8px;' : 'right: 8px;')}
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: ${({ theme }) => theme.radii.round};
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 300ms ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
`;

/**
 * Carousel走马灯组件
 * @param props 组件属性
 * @returns Carousel组件
 */
export const Carousel: React.FC<CarouselProps> = ({
  arrows = false,
  autoplay = false,
  autoplaySpeed = 3000,
  adaptiveHeight = false,
  dotPosition = 'bottom',
  dots = true,
  draggable = false,
  fade = false,
  infinite = true,
  speed = 500,
  easing = 'linear',
  effect = 'scrollx',
  afterChange,
  beforeChange,
  waitForAnimate = false,
  children,
}) => {
  const theme = useTheme();
  const childrenArray = React.Children.toArray(children);
  const slideCount = childrenArray.length;
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transform, setTransform] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const isDotDuration = typeof autoplay === 'object' && autoplay.dotDuration === true;
  
  const setSlide = useCallback(
    (index: number, animate = true) => {
      if (slideCount <= 0) return;
      
      if (waitForAnimate && isAnimating) return;
      
      let nextIndex = index;
      
      if (infinite) {
        if (index < 0) {
          nextIndex = slideCount - 1;
        } else if (index >= slideCount) {
          nextIndex = 0;
        }
      } else {
        if (index < 0 || index >= slideCount) {
          return;
        }
      }
      
      if (beforeChange) {
        beforeChange(currentSlide, nextIndex);
      }
      
      if (animate) {
        setIsAnimating(true);
        
        const effectToUse = fade ? 'fade' : effect;
        
        if (effectToUse === 'scrollx') {
          setTransform(nextIndex * 100);
        }
        
        setTimeout(() => {
          setIsAnimating(false);
          if (afterChange) {
            afterChange(nextIndex);
          }
        }, speed);
      } else {
        if (effect === 'scrollx' && !fade) {
          setTransform(nextIndex * 100);
        }
        
        if (afterChange) {
          afterChange(nextIndex);
        }
      }
      
      setCurrentSlide(nextIndex);
    },
    [slideCount, infinite, currentSlide, beforeChange, afterChange, isAnimating, waitForAnimate, speed, effect, fade]
  );
  
  const next = useCallback(() => {
    setSlide(currentSlide + 1);
  }, [currentSlide, setSlide]);
  
  const prev = useCallback(() => {
    setSlide(currentSlide - 1);
  }, [currentSlide, setSlide]);
  
  // 自动播放
  useEffect(() => {
    if (autoplay && slideCount > 1) {
      const startAutoplay = () => {
        if (autoplayTimerRef.current) {
          clearTimeout(autoplayTimerRef.current);
        }
        
        autoplayTimerRef.current = setTimeout(() => {
          next();
          startAutoplay();
        }, autoplaySpeed);
      };
      
      startAutoplay();
      
      return () => {
        if (autoplayTimerRef.current) {
          clearTimeout(autoplayTimerRef.current);
        }
      };
    }
    
    return undefined;
  }, [autoplay, autoplaySpeed, next, slideCount]);
  
  // 拖拽事件处理
  const handleTouchStart = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      if (!draggable) return;
      
      if (isAnimating) return;
      
      setIsDragging(true);
      
      if ('touches' in e) {
        setTouchStartX(e.touches[0].clientX);
      } else {
        setTouchStartX(e.clientX);
      }
      
      setTouchDeltaX(0);
    },
    [draggable, isAnimating]
  );
  
  const handleTouchMove = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      if (!draggable || !isDragging) return;
      
      let clientX = 0;
      
      if ('touches' in e) {
        clientX = e.touches[0].clientX;
      } else {
        clientX = e.clientX;
      }
      
      const delta = clientX - touchStartX;
      setTouchDeltaX(delta);
      
      if (!fade && effect === 'scrollx') {
        const percentageDelta = (delta / (containerRef.current?.offsetWidth || 1)) * 100;
        setTransform(currentSlide * 100 - percentageDelta);
      }
    },
    [draggable, isDragging, touchStartX, currentSlide, fade, effect]
  );
  
  const handleTouchEnd = useCallback(() => {
    if (!draggable || !isDragging) return;
    
    setIsDragging(false);
    
    const threshold = 30; // 最小滑动距离阈值
    
    if (touchDeltaX > threshold) {
      prev();
    } else if (touchDeltaX < -threshold) {
      next();
    } else {
      // 回到原始位置
      setTransform(currentSlide * 100);
    }
  }, [draggable, isDragging, touchDeltaX, prev, next, currentSlide]);
  
  // 鼠标事件处理
  const handleMouseDown = handleTouchStart;
  const handleMouseMove = handleTouchMove;
  const handleMouseUp = handleTouchEnd;
  const handleMouseLeave = handleTouchEnd;
  
  const handleDotClick = (index: number) => {
    setSlide(index);
  };
  
  return (
    <CarouselContainer
      ref={containerRef}
      theme={theme}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={draggable ? handleMouseDown : undefined}
      onMouseMove={draggable ? handleMouseMove : undefined}
      onMouseUp={draggable ? handleMouseUp : undefined}
      onMouseLeave={draggable ? handleMouseLeave : undefined}
      style={{ cursor: draggable ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
    >
      <SlideContainer
        $fade={fade}
        $speed={speed}
        $easing={easing}
        $transform={transform}
        theme={theme}
      >
        {React.Children.map(children, (child, index) => (
          <Slide
            $fade={fade}
            $active={index === currentSlide}
            theme={theme}
            style={adaptiveHeight ? { height: 'auto' } : {}}
          >
            {child}
          </Slide>
        ))}
      </SlideContainer>
      
      {dots && slideCount > 1 && (
        <DotsContainer $position={dotPosition} theme={theme}>
          {Array.from({ length: slideCount }).map((_, index) => (
            <Dot
              key={index}
              $active={index === currentSlide}
              $isDuration={isDotDuration}
              $duration={autoplaySpeed}
              theme={theme}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </DotsContainer>
      )}
      
      {arrows && slideCount > 1 && (
        <>
          <ArrowButton
            $direction="prev"
            theme={theme}
            onClick={prev}
            type="button"
            aria-label="上一个"
          >
            {'<'}
          </ArrowButton>
          <ArrowButton
            $direction="next"
            theme={theme}
            onClick={next}
            type="button"
            aria-label="下一个"
          >
            {'>'}
          </ArrowButton>
        </>
      )}
    </CarouselContainer>
  );
}; 