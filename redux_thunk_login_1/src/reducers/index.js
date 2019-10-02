import memberReducer from './memberReducer'
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const rootReducer = (history) => combineReducers(
   {
      memberReducer:memberReducer,
      router: connectRouter(history)
   }
)

export default rootReducer

