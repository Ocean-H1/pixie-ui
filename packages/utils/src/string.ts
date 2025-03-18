/**
 * 首字母大写
 * @param str 字符串
 * @returns 首字母大写的字符串
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 驼峰转连字符
 * @param str 驼峰字符串
 * @returns 连字符字符串
 */
export const camelToKebab = (str: string): string => {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
};

/**
 * 连字符转驼峰
 * @param str 连字符字符串
 * @returns 驼峰字符串
 */
export const kebabToCamel = (str: string): string => {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
};

/**
 * 生成唯一ID
 * @param prefix 前缀
 * @returns 唯一ID
 */
export const uniqueId = (prefix = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}; 