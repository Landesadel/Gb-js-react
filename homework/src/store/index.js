import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { profileReducer } from './profile';
import { getPublicApiGists } from '../api/gists';
import { conversationsReducer } from './conversations';
import { messagesReducer } from './messages';
import { gistsReducer } from './gists';
import { logger, botMessage, timeScheduler, crashReporter } from './middlewares';
import thunk from 'redux-thunk';
import { getConversationApi } from '../api/conversations';

const apis = { getPublicApiGists, getConversationApi };

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['profile'],
};

const reducer = combineReducers({
   profile: profileReducer,
   conversations: conversationsReducer,
   messages: messagesReducer,
   gists: gistsReducer,
})

export const store = createStore(
   persistReducer(persistConfig, reducer ),

   compose(
      applyMiddleware(
         crashReporter,
         thunk.withExtraArgument(apis),
         logger,
         botMessage,
         timeScheduler),
      
      window.__REDUX_DEVTOOLS_EXTENSION__
         ? window.__REDUX_DEVTOOLS_EXTENSION__()
         : (args) => args
   )
);

export const persistor = persistStore(store);