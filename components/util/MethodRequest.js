/**
 * 1. direct access to method [get|post|patch|put|delete]
 * 2. set baseURL
 */

class MethodRequest {
  constructor(baseURL) {
    const requestFactory = (url, data, method) => request(url, {
      baseURL,
      method,
      data
    });

    // map method request
    ['get', 'post', 'patch', 'put', 'delete'].forEach((method) => {
      this[method] = (url, data) => requestFactory(url, data, method);
    });
  }
}

export default MethodRequest;
