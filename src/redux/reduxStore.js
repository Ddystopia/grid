import { createStore, combineReducers, applyMiddleware } from 'redux'
import { tableReducer } from './tableReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  tableReducer,
})
const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store // for debug, delete for production
export default store
