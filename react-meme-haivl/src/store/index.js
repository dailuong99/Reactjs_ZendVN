import { createStore, applyMiddleware, combineReducers } from 'redux';

import usersReducer from './users/reducer';
import postsReducer from './posts/reducer';
import authReducer from './auth/reducer';
import categoriesReducer from './categories/reducer';

import reduxThunk from 'redux-thunk';
import logger from 'redux-logger'

const rootReducer = combineReducers({
    Posts: postsReducer,
    Categories: categoriesReducer,
    Users: usersReducer
})

const arrayMiddlewares = [reduxThunk];

// if (process.env.NODE_ENV === 'development') {
arrayMiddlewares.push(logger);
// }

const middleWares = applyMiddleware(...arrayMiddlewares)

const store = createStore(rootReducer, middleWares);

export default store;