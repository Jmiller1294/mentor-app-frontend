import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { eventReducer } from './eventReducer';
import { mentorReducer } from './mentorReducer';
import { userReducer } from './userReducer';

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  mentor: mentorReducer
})

export default persistReducer(persistConfig, rootReducer);