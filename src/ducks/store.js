import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import breakingBadReducer from './breakingBadReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
  characters: breakingBadReducer,
  user: userReducer,

})

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxPromiseMiddleware))
)
