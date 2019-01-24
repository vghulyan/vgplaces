import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN } from "../actions/actionTypes";

const initialStaet = {
    token: null,
    expirtyDate: null
};

const reducer = (state = initialStaet, action) => {
  switch(action.type) {
      case AUTH_SET_TOKEN:
          return {
            ...state,
            token: action.token,
            expirtyDate: action.expirtyDate
      };
      case AUTH_REMOVE_TOKEN:
          return {
              ...state,
              token: null,
              expirtyDate: null
          };
      default: return state;
  }
};

export default reducer;