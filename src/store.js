import { createStore, combineReducers, applyMiddleware } from 'redux'
import artists from './reducers'
import logger from 'redux-logger'
const reducers = combineReducers({ artists })
export default createStore(reducers, applyMiddleware(logger))
