import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import breakingBadReducer from './breakingBadReducer'
import userReducer from './userReducer'
import projectsReducer from './projectsReducer'
import modelsReducer from './modelsReducer'


const rootReducer = combineReducers({
  characters: breakingBadReducer,
  user: userReducer,
  projects: projectsReducer,
  models: modelsReducer

})

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxPromiseMiddleware))
)

// composeWithDev
