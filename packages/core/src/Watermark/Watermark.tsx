import React, { useEffect, useRef, useState, CSSProperties } from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@pixie-ui/theme';

export interface Font {
  /**
   * 字体颜色
   * @default 'rgba(0,0,0,.15)'
   */
  color?: string;
  /**
   * 字体大小
   * @default 16
   */
  fontSize?: number;
  /**
   * 字体粗细
   * @default 'normal'
   */
  fontWeight?: 'normal' | 'light' | 'weight' | number;
  /**
   * 字体类型
   * @default 'sans-serif'
   */
  fontFamily?: string;
  /**
   * 字体样式
   * @default 'normal'
   */
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique';
  /**
   * 指定文本对齐方向
   * @default 'center'
   */
  textAlign?: CanvasTextAlign;
}

export interface WatermarkProps {
  /**
   * 水印的宽度，content 的默认值为自身的宽度
   * @default 120
   */
  width?: number;
  /**
   * 水印的高度，content 的默认值为自身的高度
   * @default 64
   */
  height?: number;
  /**
   * 是否将水印传导给弹出组件如 Modal、Drawer
   * @default true
   */
  inherit?: boolean;
  /**
   * 水印绘制时，旋转的角度，单位 °
   * @default -22
   */
  rotate?: number;
  /**
   * 追加的水印元素的 z-index
   * @default 9
   */
  zIndex?: number;
  /**
   * 图片源，建议导出 2 倍或 3 倍图，优先级高 (支持 base64 格式)
   */
  image?: string;
  /**
   * 水印文字内容
   */
  content?: string | string[];
  /**
   * 文字样式
   */
  font?: Font;
  /**
   * 水印之间的间距
   * @default [100, 100]
   */
  gap?: [number, number];
  /**
   * 水印距离容器左上角的偏移量，默认为 gap/2
   */
  offset?: [number, number];
  /**
   * 子组件
   */
  children?: React.ReactNode;
}

// 默认字体配置
const defaultFont: Font = {
  color: 'rgba(0,0,0,.15)',
  fontSize: 16,
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
  fontStyle: 'normal',
  textAlign: 'center',
};

// 容器组件
const WatermarkContainer = styled.div<{
  theme: Theme;
}>`
  position: relative;
  width: 100%;
  height: 100%;
`;

// 水印遮罩层
const WatermarkMask = styled.div<{
  zIndex: number;
}>`
  position: absolute;
  inset: 0;
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: none;
  overflow: hidden;
  background-repeat: repeat;
  background-position: 0 0;
`;

/**
 * 生成水印图案
 */
const useWatermark = ({
  width = 120,
  height = 64,
  rotate = -22,
  image,
  content,
  font = defaultFont,
  gap = [100, 100],
  offset,
}: WatermarkProps) => {
  const [base64Url, setBase64Url] = useState<string>('');
  const fontConfig = { ...defaultFont, ...font };
  
  // 计算偏移量，默认为间距的一半
  const offsetLeft = offset?.[0] ?? gap[0] / 2;
  const offsetTop = offset?.[1] ?? gap[1] / 2;

  // 创建 canvas 并绘制水印
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // 创建离屏 canvas，提高清晰度
    const ratio = 3;
    const canvasWidth = (width + gap[0]) * ratio;
    const canvasHeight = (height + gap[1]) * ratio;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    // 设置背景为透明
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // 绘制水印内容
    if (image) {
      // 绘制图片水印
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.referrerPolicy = 'no-referrer';
      img.onload = () => {
        ctx.save();
        ctx.translate(canvasWidth / 2, canvasHeight / 2);
        ctx.rotate((rotate * Math.PI) / 180);
        
        const imgWidth = width * ratio;
        const imgHeight = height * ratio;
        ctx.drawImage(
          img,
          -imgWidth / 2,
          -imgHeight / 2,
          imgWidth,
          imgHeight
        );
        
        ctx.restore();
        setBase64Url(canvas.toDataURL());
      };
      img.src = image;
    } else if (content) {
      // 绘制文字水印
      const texts = Array.isArray(content) ? content : [content];
      
      ctx.save();
      ctx.translate(canvasWidth / 2, canvasHeight / 2);
      ctx.rotate((rotate * Math.PI) / 180);
      
      // 配置字体样式
      const fontSize = fontConfig.fontSize! * ratio;
      ctx.font = `${fontConfig.fontStyle} ${fontConfig.fontWeight} ${fontSize}px ${fontConfig.fontFamily}`;
      ctx.fillStyle = fontConfig.color!;
      ctx.textAlign = fontConfig.textAlign!;
      
      // 绘制多行文本
      const lineHeight = fontSize * 1.5;
      const startY = -((texts.length - 1) * lineHeight) / 2;
      
      texts.forEach((text, index) => {
        ctx.fillText(text, 0, startY + index * lineHeight);
      });
      
      ctx.restore();
      setBase64Url(canvas.toDataURL());
    }
  }, [width, height, rotate, image, content, font, gap, offset]);

  // 返回水印样式
  const watermarkStyle: CSSProperties | undefined = base64Url
    ? {
        backgroundImage: `url(${base64Url})`,
        backgroundSize: `${width + gap[0]}px ${height + gap[1]}px`,
        backgroundPosition: `${offsetLeft}px ${offsetTop}px`,
      }
    : undefined;

  return watermarkStyle;
};

/**
 * 水印组件
 * @param props 组件属性
 * @returns 水印组件
 */
export const Watermark: React.FC<WatermarkProps> = ({
  width = 120,
  height = 64,
  inherit = true,
  rotate = -22,
  zIndex = 9,
  image,
  content,
  font,
  gap = [100, 100],
  offset,
  children,
}) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const watermarkStyle = useWatermark({
    width,
    height,
    rotate,
    image,
    content,
    font,
    gap,
    offset,
  });

  // 监听水印 DOM 变化，防止水印被篡改
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const watermarkElement = container.querySelector('[data-watermark]');
    
    if (!watermarkElement) return;
    
    // 创建 DOM 变化观察器
    const observer = new MutationObserver((mutations) => {
      // 处理水印 DOM 变化
      mutations.forEach((mutation) => {
        // 如果水印被删除，重新添加
        if (mutation.type === 'childList' && mutation.removedNodes.length > 0) {
          Array.from(mutation.removedNodes).forEach((node) => {
            if (node === watermarkElement) {
              container.appendChild(watermarkElement.cloneNode(true));
            }
          });
        }
        
        // 如果水印属性被修改，重置属性
        if (mutation.type === 'attributes' && mutation.target === watermarkElement) {
          const target = mutation.target as HTMLElement;
          if (watermarkStyle) {
            Object.keys(watermarkStyle).forEach((key) => {
              const styleKey = key as keyof CSSProperties;
              const styleValue = watermarkStyle[styleKey];
              if (styleValue !== undefined) {
                target.style[styleKey as any] = styleValue as string;
              }
            });
          }
        }
      });
    });
    
    // 启动观察
    observer.observe(container, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['style', 'class'],
    });
    
    return () => {
      observer.disconnect();
    };
  }, [watermarkStyle]);

  // 实现水印传导给弹出组件的功能
  useEffect(() => {
    if (!inherit || !watermarkStyle) return;

    // 创建全局样式，将水印添加到弹出层的容器中
    const style = document.createElement('style');
    style.setAttribute('data-watermark-global', '');
    style.innerHTML = `
      .pixie-modal-content::before,
      .pixie-drawer-content::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: ${zIndex};
        pointer-events: none;
        background-image: ${watermarkStyle.backgroundImage};
        background-size: ${watermarkStyle.backgroundSize};
        background-position: ${watermarkStyle.backgroundPosition};
        background-repeat: repeat;
      }
    `;

    document.head.appendChild(style);

    return () => {
      // 卸载时移除全局样式
      document.head.removeChild(style);
    };
  }, [inherit, watermarkStyle, zIndex]);

  return (
    <WatermarkContainer ref={containerRef} theme={theme}>
      {children}
      {watermarkStyle && (
        <WatermarkMask
          data-watermark
          style={watermarkStyle}
          zIndex={zIndex}
        />
      )}
    </WatermarkContainer>
  );
}; 