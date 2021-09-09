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

export const getMentors = (userId) => {
  return(dispatch) => {
    console.log('inside')
    fetch(`http://localhost:3001/users/${userId}/bookings`)
    .then(resp => resp.json())
    .then(data => dispatch(setMentors(data)))
  }
}

export const setMentors = (data) => ({
  type: "SET_MENTORS",
  payload: data
})

export const getEvents = (userId) => {
  return(dispatch) => {
    fetch(`http://localhost:3001/users/${userId}/attendances`)
    .then(resp => resp.json())
    .then(events => dispatch(setEvents(events)))
  }
}

export const setEvents = (events) => ({
  type: 'SET_ATTENDEES',
  payload: events
})

export const createAttendance = (userId, event) => {
  fetch(`http://localhost:3001/users/${userId}/attendances`, {
    method: "POST",
    credentials: "include",
    headers: { 
      "Content-type": "application/json",
    },
      body: JSON.stringify(event)
  })
  .then(resp => resp.json())
  .then(event => console.log(event))
}

export const deleteAttendance = (userId, eventId) => {
  fetch(`http://localhost:3001/users/${userId}/attendances/${eventId}`, {
    method: "DELETE",
  })
}

export const setDate = (date) => ({
  type: 'SET_DATE',
  payload: date
})

export const setLocation = (location) => ({
  type: 'SET_LOCATION',
  payload: location
})

export const setTime = (time) => ({
  type: 'SET_TIME',
  payload: time
})

export const toggleActive = (time) => ({
  type: 'TOGGLE_ACTIVE'
})

