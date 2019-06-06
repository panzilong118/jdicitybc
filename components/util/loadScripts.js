import { difference } from 'lodash';

export const compareExistFiles = (tag, urls) => {
  const files = document.getElementsByTagName(tag);
  const type = tag === 'script' ? 'src' : 'href';
  const paths = [];
  for (let i = 0, len = files.length; i < len; i++) {
    paths.push(files[i].getAttribute(type));
  }
  return difference(urls, paths);
};

export const loadScripts = (scriptsArr, callback, parentArg = 'head') => {
  const scripts = compareExistFiles('script', scriptsArr);
  if (scripts.length === 0) { // 如果script都已经存在 则直接执行callback
    callback && callback();
    return;
  }
  const parent = document.getElementsByTagName(parentArg)[0]
    || document.documentElement;
  let loaded = 0;
  for (let i = 0, len = scripts.length; i < len; i++) {
    let node = document.createElement('script');
    // eslint-disable-next-line
    node.onload = node.onreadystatechange = function () {
      const rs = this.readyState;
      if (typeof rs === 'undefined' || rs === 'loaded' || rs === 'complete') {
        loaded++;
        // eslint-disable-next-line
        this.onload = this.onreadystatechange = null;
        node = null;
        if (loaded === scripts.length) {
          callback && callback();
        }
      }
    };
    node.src = scripts[i];
    parent.appendChild(node);
  }
};
