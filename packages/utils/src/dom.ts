/**
 * 判断是否在浏览器环境
 * @returns 是否在浏览器环境
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * 获取元素的样式
 * @param element DOM元素
 * @param prop 样式属性
 * @returns 样式值
 */
export const getStyle = (element: HTMLElement, prop: string): string => {
  return window.getComputedStyle(element).getPropertyValue(prop);
};

/**
 * 添加事件监听器
 * @param element DOM元素
 * @param event 事件名称
 * @param handler 事件处理函数
 * @param options 事件选项
 */
export const addEvent = (
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): void => {
  element.addEventListener(event, handler, options);
};

/**
 * 移除事件监听器
 * @param element DOM元素
 * @param event 事件名称
 * @param handler 事件处理函数
 * @param options 事件选项
 */
export const removeEvent = (
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions
): void => {
  element.removeEventListener(event, handler, options);
}; 