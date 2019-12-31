import { SET_USER } from '../actions/types';
import { SET_AUTH_LOADING } from '../actions/types';

const initialState = {
  user: {
    displayName: null,
    email: null,
    emailVerified: null,
    photoURL: null,
    isAnonymous: null,
    uid: null,
    providerData: null
  },
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload
      };
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: payload
      };
    default:
      return state;
  }
}
