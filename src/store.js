import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger' //middlew
import rootReducer from './root_reducer'

// setup middlewares which is an array 
const middlewares = [logger];

// in order to get the REDUX store to work & middleware
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the store, pass in combined reducers and middleware
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)))

export default store;