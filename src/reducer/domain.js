const DOMAIN_LOADING = 'global/domain/loading';
const DOMAIN_LOAD_SUCCESS = 'global/domain/success';;
const DOMAIN_LOAD_FAIL = 'global/domain/fail';

export default function (state = {domains:[]}, action = {}) {
    switch (action.type) {
        case DOMAIN_LOADING:
            return {
              ...state,
              loading: true
          }
        case DOMAIN_LOAD_SUCCESS:
            return {
              ...state,
              loading: false,
              loaded: true,
              domains: action.result.data
          }
        case DOMAIN_LOAD_FAIL:
          return {
            ...state,
            loading: false,
            loaded: false,
            error: action.msg
        }
        default:
            return state
	}
}

export function getDomain () {
  return {
    types: [DOMAIN_LOADING, DOMAIN_LOAD_SUCCESS, DOMAIN_LOAD_FAIL],
    promise: (client) => client.get('/passport/logout')
  }
}
export function getAllDoamins () {
  return (dispatch, getState) => {
    const domain = getState().domain
    return domain.domains || [];
  }
}
export function getDomainByType (type) {
  return (dispatch, getState) => {
    const domain = getState().domain;
    const domains = domain.domains||[];
    for(var i = 0; i < domains.length; i++) {
      if(domains[i].domainType == type) return domains[i].domain;
    }
    return "";
  }
}

export function getMainDomain () {
  return (dispatch, getState) => {
    const domain = getState().domain;
    const domains = domain.domains||[];
    for(var i = 0; i < domains.length; i++) {
      if(domains[i].domainType == "1") return domains[i].domain;
    }
    return "";
  }
}
export function getPassportDomain () {
   return (dispatch, getState) => {
    const domain = getState().domain;
    const domains = domain.domains||[];
    for(var i = 0; i < domains.length; i++) {
      if(domains[i].domainType == "5") return domains[i].domain;
    }
    return "";
  }
}
export function getPlatformPassportDomain () {
   return (dispatch, getState) => {
    const domain = getState().domain;
    const domains = domain.domains||[];
    for(var i = 0; i < domains.length; i++) {
      if(domains[i].domainType == "9") return domains[i].domain;
    }
    return "";
  }
}
export function getMPassportDomain () {
   return (dispatch, getState) => {
    const domain = getState().domain;
    const domains = domain.domains||[];
    for(var i = 0; i < domains.length; i++) {
      if(domains[i].domainType == "8") return domains[i].domain;
    }
    return "";
  }
}
export function getShopDomain () {
   return (dispatch, getState) => {
    const domain = getState().domain;
    const domains = domain.domains||[];
    for(var i = 0; i < domains.length; i++) {
      if(domains[i].domainType == "3") return domains[i].domain;
    }
    return "";
  }
}
export function getBuyerDomain () {
   return (dispatch, getState) => {
    const domain = getState().domain;
    const domains = domain.domains||[];
    for(var i = 0; i < domains.length; i++) {
      if(domains[i].domainType == "2") return domains[i].domain;
    }
    return "";
  }
}
export function getMBuyerDomain () {
   return (dispatch, getState) => {
    const domain = getState().domain;
    const domains = domain.domains||[];
    for(var i = 0; i < domains.length; i++) {
      if(domains[i].domainType == "6") return domains[i].domain;
    }
    return "";
  }
}

export function getPlatformDomain () {
   return (dispatch, getState) => {
    const domain = getState().domain;
    const domains = domain.domains||[];
    for(var i = 0; i < domains.length; i++) {
      if(domains[i].domainType == "4") return domains[i].domain;
    }
    return "";
  }
}
