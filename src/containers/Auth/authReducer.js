import * as constants from './authConstants';

const initialState = {
  user: {},
  isAuth: false,
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.REGISTER_START:
    case constants.LOGIN_START:
      return { ...state, list: [], loading: true, error: null };

    case constants.REGISTER_SUCCESS:
    case constants.LOGIN_SUCCESS:
      localStorage.setItem('token', payload.user.token);
      return {
        ...state,
        user: { ...payload.user },
        isAuth: true,
        loading: false,
        error: null
      };

    case constants.REGISTER_FAILURE:
    case constants.LOGIN_FAILURE:
      return { ...state, loading: false, error: payload.error };

    default:
      return state;
  }
};
