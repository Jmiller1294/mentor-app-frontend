export const startCreateUser = (data) => {
  return (dispatch) => {
    fetch("https://mentor-app-api.herokuapp.com/registrations", {
      method: "POST",
      //credentials: "include",
      headers: { 
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(data => dispatch(finishCreateUser(data)))
    .catch((error) => {
      console.error('Error:', error);
    });
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
    fetch("https://mentor-app-api.herokuapp.com/logged_in", {
      //credentials: "include"
    })
    .then(resp => resp.json())
    .then(data => dispatch(setCurrentUser(data)))
  }
}


export const setAccountInfo = (data) => ({
  type: "SET_ACCOUNT_INFO",
  payload: data
})

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
    fetch("https://mentor-app-api.herokuapp.com/sessions", {
      method: "POST",
      //credentials: "include",
      headers: { 
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: data.email.toLowerCase(), password: data.password })
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
    fetch("https://mentor-app-api.herokuapp.com/logout", {
      method: "DELETE",
      //credentials: "include"
    })
    .then(() => dispatch(finishLogout()))
  }
}

//logout action creator
export const finishLogout = () => ({
  type: "LOGOUT"
})

export const setAvatar = (data) => ({
  type: "SET_AVATAR",
  payload: data
})






