/**
 * 深度合并对象
 * @param target 目标对象
 * @param source 源对象
 * @returns 合并后的对象
 */
export const deepMerge = <T extends Record<string, any>, U extends Record<string, any>>(
  target: T,
  source: U
): T & U => {
  const result = { ...target } as T & U;

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (
        source[key] &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key])
      ) {
        if (!target[key]) {
          Object.assign(result, { [key]: source[key] });
        } else {
          result[key as keyof (T & U)] = deepMerge(target[key], source[key]) as any;
        }
      } else {
        Object.assign(result, { [key]: source[key] });
      }
    }
  }

  return result;
};

/**
 * 过滤对象中的空值
 * @param obj 要过滤的对象
 * @returns 过滤后的对象
 */
export const filterEmpty = <T extends Record<string, any>>(obj: T): Partial<T> => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      acc[key as keyof T] = value;
    }
    return acc;
  }, {} as Partial<T>);
};

/**
 * 选择对象中的指定属性
 * @param obj 源对象
 * @param keys 要选择的属性
 * @returns 选择后的对象
 */
export const pick = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  return keys.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {} as Pick<T, K>);
}; 