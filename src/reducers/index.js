const INITIAL_STATE = {
  currentUser: null,
  loggedIn: false,
  mentors: []
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
    case "ADD_MENTOR":
      return {
        ...state,
        mentors: [...state.mentors, action.payload]
      }
    default: 
      return state;
  }
}