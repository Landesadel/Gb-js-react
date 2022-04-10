import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { profileReducer } from './profile';
import { conversationsReducer } from './conversations';
import { messagesReducer } from './messages';
import { logger, botMessage, timeScheduler } from './middlewares';
import thunk from 'redux-thunk';

export const store = createStore(
   combineReducers({
      profile: profileReducer,
      conversations: conversationsReducer,
      messages: messagesReducer,
   }),
   compose(
      applyMiddleware(thunk, logger, botMessage, timeScheduler),
      window.__REDUX_DEVTOOLS_EXTENSION__
         ? window.__REDUX_DEVTOOLS_EXTENSION__()
         : (args) => args
   )
);