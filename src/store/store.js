import { combineReducers,applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer } from './userReducer';

const middlewares=applyMiddleware(thunk,logger);
const rootReducer=combineReducers({userReducer});

export const store=createStore(rootReducer,middlewares);