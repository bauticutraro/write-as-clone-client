import * as constants from './postsConstants';

const initialState = {
  list: [],
  loading: true,
  error: null
};
   
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_POSTS_START:
      return { ...state, list: [], loading: true, error: null };

    case constants.GET_POSTS_SUCCESS:
      return {
       ...state,
        list: payload.list,
        loading: false,
        error: null
    };

    case constants.GET_POSTS_FAILURE:
      return { ...state, loading: false, error: payload.error };
      
    default:
      return state;
  }
};
   