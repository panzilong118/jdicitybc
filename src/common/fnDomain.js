/**
 * 为商城提供域名
 * @param {*域名数据源} domainArrDS
 */
function fnDomain(domainArrDS){
  var domainlist = {};
  var domainArr = domainArrDS && domainArrDS instanceof Array ?domainArrDS:[];
  for (var i = 0; i < domainArr.length; i++) {
      if (domainArr[i].domainType == 1) {
        domainlist.main = domainArr[i].domain;
      }
      if (domainArr[i].domainType == 2) {
        domainlist.buyer = domainArr[i].domain;
      }
      if (domainArr[i].domainType == 3) {
        domainlist.shop = domainArr[i].domain;
      }
      if (domainArr[i].domainType == 4) {
        domainlist.platform = domainArr[i].domain;
      }
      if (domainArr[i].domainType == 5) {
        domainlist.passport = domainArr[i].domain;
        }
      if (domainArr[i].domainType == 6) {
        domainlist.mBuyer = domainArr[i].domain;
      }
      if (domainArr[i].domainType == 7) {
        domainlist.mShop = domainArr[i].domain;
      }
      if (domainArr[i].domainType == 8) {
        domainlist.mPassport = domainArr[i].domain;
      }
      if (domainArr[i].domainType == 13) {
        domainlist.mMain = domainArr[i].domain;
      }
    }
  return domainlist;
}

export default fnDomain;