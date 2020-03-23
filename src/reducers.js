import { combineReducers } from 'redux';
// reducers
import authReducer from './containers/Auth/authReducer';
import postsReducer from './containers/Posts/postsReducer';
import articleReducer from './containers/Article/articleReducer';

export default () =>
  combineReducers({
    auth: authReducer,
    posts: postsReducer,
    article: articleReducer
  });
