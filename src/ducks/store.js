import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './userReducer'
import modelsReducer from './modelsReducer'
import firebaseReducer from './firebaseReducer'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  // characters: breakingBadReducer,
  user: userReducer,
  // projects: projectsReducer,
  models: modelsReducer,
  firebase: firebaseReducer

})

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxPromiseMiddleware))
)

// composeWithDev
