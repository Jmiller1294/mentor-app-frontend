export const startCreateUser = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3001/registrations", {
      method: "POST",
      credentials: "include",
      headers: { 
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(data => dispatch(finishCreateUser(data)))
  }
}

const finishCreateUser = (data) => {
  return {
    type: "CREATE_USER",
    payload: data
  }
}


//checks if a user is logged in
export const checkLoggedInStatus = () => {
  return(dispatch) => {
    fetch("http://localhost:3001/logged_in", {
      credentials: "include"
    })
    .then(resp => resp.json())
    .then(data => dispatch(setCurrentUser(data)))
  }
}

//sets the current user
export const setCurrentUser = (data) => ({
  type: "SET_CURRENT_USER",
  payload: data
})

/*
starts a user login session and sends 
user data via dispatch function to the user reducer
*/
export const startLogin = (data) => {
  return(dispatch) => {
    fetch("http://localhost:3001/sessions", {
      method: "POST",
      credentials: "include",
      headers: { 
        "Content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(data => dispatch(finishLogin(data)))
  }
}

//Login action creator
export const finishLogin = (data) => ({
  type: "LOGIN",
  payload: data
})

//logs out a user 
export const logout = () => {
  return(dispatch) => {
    fetch("http://localhost:3001/logout", {
      method: "DELETE",
      credentials: "include"
    })
    .then(() => dispatch(finishLogout()))
  }
}

//logout action creator
export const finishLogout = () => ({
  type: "LOGOUT"
})

export const addMentor = (mentor, userId) => {
  return(dispatch) => {
    fetch(`http://localhost:3001/users/${userId}/bookings`, {
      method: "POST",
      credentials: "include",
      headers: { 
        "Content-type": "application/json",
      },
      body: JSON.stringify(mentor)
    })
    .then(resp => resp.json())
    .then(mentor => console.log(mentor))
  }
}

export const getMentors = (userId) => {
  return(dispatch) => {
    fetch(`http://localhost:3001/users/${userId}/bookings`)
    .then(resp => resp.json())
    .then(data => dispatch(setUserMentors(data)))
  }
}

export const setUserMentors = (data) => ({
  type: "ADD_MENTORS",
  payload: data
})


