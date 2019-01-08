import { createStore, combineReducers, applyMiddleware } from 'redux'
import artists from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const reducers = combineReducers({ artists })
export default createStore(reducers, applyMiddleware(logger, thunk))
