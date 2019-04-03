const INJECT_SESSION = 'express/session/INIT';
import {LOCATION_CHANGE} from "react-router-redux";


export default function (state = {session:null}, action = {}) {
    switch (action.type) {
        case INJECT_SESSION:
          	return {
	            ...state,
	            ...action.session
	        }
        default:
            return state
	}
}

export function injectSession(session) {
  return {
    type: INJECT_SESSION,
    session
  }
}
