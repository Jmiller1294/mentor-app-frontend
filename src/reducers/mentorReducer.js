const INITIAL_STATE = {
  mentors: [],
}

export const mentorReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SET_MENTORS":
      return {
        ...state,
        mentors: action.payload
      }  
    default: 
      return state;
  }
}