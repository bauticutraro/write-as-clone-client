import { combineReducers } from 'redux';
// reducers
import authReducer from './containers/Auth/authReducer';
import postsReducer from './containers/Posts/postsReducer';

export default () =>
  combineReducers({
    auth: authReducer,
    posts: postsReducer
  });
