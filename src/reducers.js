import { combineReducers } from 'redux';
// reducers
import postsReducer from './containers/Posts/postsReducer';

export default () =>
  combineReducers({
    posts: postsReducer
  });
