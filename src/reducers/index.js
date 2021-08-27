const INITIAL_STATE = {
  currentUser: null,
  loggedIn: false,
  mentors: [],
  events: [],
  date: '',
  location: '',
  time: '',
  isActive: false
}

export const userReducer = (state = INITIAL_STATE, action) => {
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
        currentUser: action.payload.user,
        loggedIn: action.payload.logged_in
      }
    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload.user,
        loggedIn: action.payload.logged_in
      }
    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
        loggedIn: false
      }
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
    case "SET_DATE":
      console.log(action.payload)
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