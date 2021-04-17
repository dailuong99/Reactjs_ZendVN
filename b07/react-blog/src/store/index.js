import { createStore, applyMiddleware, combineReducers } from 'redux';

import usersReducer from './users/reducer';
import postsReducer from './posts/reducer';
import authReducer from './auth/reducer';

import reduxThunk from 'redux-thunk';
import logger from 'redux-logger'

const rootReducer = combineReducers({
    Users: usersReducer,
    Posts: postsReducer,
    Auth: authReducer
})

const arrayMiddlewares = [reduxThunk];

// if (process.env.NODE_ENV === 'development') {
arrayMiddlewares.unshift(logger);
// }

// const middleWares = applyMiddleware(...arrayMiddlewares)

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log('store', store.getState());
export default store;