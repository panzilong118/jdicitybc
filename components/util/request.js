import axios from 'axios';
import { BASE_API_PREFIX } from 'src/config';
import { PATHS, history } from 'src/router';

axios.defaults.withCredentials = true;

function request(url, options) {
  const method = (options.method || 'get').toLowerCase();
  const opts = {
    url,
    method,
    baseURL: options.baseURL || BASE_API_PREFIX,
    headers: options.headers || {}
  };
  const optionData = options.data || {};
  if (method === 'get') opts.params = optionData;
  else opts.data = optionData;
  return axios(opts)
    .then((res) => {
      const response = res || {};
      const { status } = response;
      if (status === 200) { // http请求没问题
        const { data, code } = response.data;
        if (code === 200) { // 如果接口请求没问题直接返回data，有问题则将错误信息全部返回
          return Promise.resolve(data);
        }
        // 登录超时，或用户没有群组 跳登录
        if (code === 101 || code === 515) {
          history.push(PATHS.LOGIN);
        }
        return Promise.reject(response.data || '服务器错误');
      }
      return Promise.reject(new Error(res.msg));
    })
    .catch((err) => {
      if (!err.code) { // 如网络原因错误，打印信息
        // console.error(err.message);
      }
      return Promise.reject(err);
    });
}

// module.exports = request;
export default request;
