import * as constants from './articleConstants';

const initialState = {
  list: [],
  loading: true,
  error: null
};
   
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_ARTICLE_START:
      return { ...state, list: [], loading: true, error: null };

    case constants.GET_ARTICLE_SUCCESS:
      return {
       ...state,
        list: payload.list,
        loading: false,
        error: null
    };

    case constants.GET_ARTICLE_FAILURE:
      return { ...state, loading: false, error: payload.error };
      
    default:
      return state;
  }
};
   