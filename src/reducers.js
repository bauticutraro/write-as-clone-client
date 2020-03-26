import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// reducers
import authReducer from './containers/Auth/authReducer';
import postsReducer from './containers/Posts/postsReducer';
import articleReducer from './containers/Article/articleReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'isAuth']
};

export default () =>
  combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    posts: postsReducer,
    article: articleReducer
  });
