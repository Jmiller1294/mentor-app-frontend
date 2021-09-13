const INITIAL_STATE = {
  events: [],
  date: '',
  location: '',
  time: '',
  isActive: false
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SET_ATTENDEES":
      return {
        ...state,
        events: action.payload
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