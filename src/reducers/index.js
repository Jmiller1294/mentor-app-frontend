import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
}

const INITIAL_STATE = {
  currentUser: null,
  accountInfo: null,
  loggedIn: false,
  mentors: [],
  events: [],
  appointments: [],
  favorites: [],
  date: '',
  location: '',
  time: '',
  isActive: false
}

export const rootReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "CREATE_USER":
      return {
        ...state,
        currentUser: action.payload.user,
        loggedIn: true
      }
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload.user
      }
    case "SET_ACCOUNT_INFO":
      return {
        ...state,
        accountInfo: action.payload
      }
    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload.user,
        loggedIn: action.payload.logged_in
      }
    case "LOGOUT":
      return INITIAL_STATE; 
    case "SET_MENTORS":
      return {
        ...state,
        mentors: action.payload
      }
    case "SET_ATTENDEES":
      return {
        ...state,
        events: action.payload
      }
    case "SET_AVATAR":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          avatar: action.payload
        }
      }
    case "SET_APPOINTMENTS":
      return {
        ...state,
        appointments: action.payload
      }
    case "SET_FAVORITES":
      return {
        ...state,
        favorites: action.payload
      }
    case "SET_DATE":
      return {
        ...state,
        date: action.payload
      }
    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload
      }
    case "SET_TIME":
      return {
        ...state,
        time: action.payload
      }
    case "TOGGLE_ACTIVE":
      return {
        ...state,
        isActive: !state.isActive
      }
    default: 
      return state;
  }
}

export default persistReducer(persistConfig, rootReducer);