/*
 * @author:      冯炎
 * @update:      20171201
 * @description: 操作cookie,提供get和set、del方法
 * */
export default class Cookies {

  /*
   * 通过key值获取cookie
   * */
  get(key) {
    if (typeof window === 'undefined') return;
    const getCookie = document.cookie.replace(/[ ]/g, '');   // 获取cookie，去空格
    const arrCookie = getCookie.split(';');   //  以;分号做分隔生成数组
    let cookie = '';    //  获取cookie
    arrCookie.map(_cookie => {    // 遍历cookie，获取指定的cookie值，并返回
      const cookieArr = _cookie.split('=');
      if (cookieArr[0] === key) {
        cookie = cookieArr[1];
      }
    });
    return cookie;
  }

  getFromServer(key, req) {
    if (typeof window === 'undefined') return;
    const getCookie = req.get('cookie');   // 获取cookie，去空格
    const arrCookie = getCookie.split(';');   //  以;分号做分隔生成数组
    let cookie = '';    //  获取cookie
    arrCookie.map(_cookie => {    // 遍历cookie，获取指定的cookie值，并返回
      const cookieArr = _cookie.split('=');
      if (cookieArr[0] === key) {
        cookie = cookieArr[1];
      }
    });
    return cookie;
  }

  /*
   * 设置cookie
   * time有效时间为选填项
   * domain归属域为选填项
   * */
  set(key, value, time, domain) {
    if (typeof window === 'undefined') return;
    let expires = '';
    let domains = '';
    let cookies = `${key}=${value};`;
    if (time) {
      const date = new Date();
      date.setTime(date.getTime() + time * 24 * 3600 * 1000);
      expires = `expires=${date.toGMTString()};`;
      cookies += expires;
    }
    if (domain) {
      domains = `path=/;domain = ${domain};`;
      cookies += domains;
    }
    document.cookie = cookies;
  }

  /*
   * 通过设置cookie的有效时间小于当前，删除cookie
   * domain为先填项，如果设置了domain，则删除cookie时需要传入domain
   * */
  del(key, domain) {
    if (typeof window === 'undefined') return;
    const date = new Date();
    let domains = '';
    date.setTime(date.getTime() - 1000);
    if (domain) {
      domains = `;path=/;domain = ${domain};`;
    }
    document.cookie = `${key}=del;expires =${date.toGMTString()}${domains}`;
  }
}
