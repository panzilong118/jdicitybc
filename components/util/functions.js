export function getColumn(title, dataIndex, width) {
  return { title, dataIndex, width };
}

export function jsonParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return '';
  }
}

// 获取跳转链接
export function getPath(hash) {
  const { origin, pathname } = window.location;
  return `${origin}${pathname}#${hash}`;
}

/**
 * 倒序输出array
 * @param {array} arr 待遍历的数组
 * @param {function} handler (item, idx) => { // todo }
 * */
export function reverseMap(arr, handler) {
  const len = arr.length - 1;
  const result = [];
  for (let i = len; i >= 0; i--) {
    result.push(handler(arr[i], i));
  }
  return result;
}
