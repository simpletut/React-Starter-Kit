import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import postsReducer from './postsReducer';
import postReducer from './postReducer';

export default combineReducers({
    form: formReducer,
    posts: postsReducer,
    post: postReducer
});