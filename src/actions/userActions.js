export const checkLoggedInStatues = () => {
  return(dispatch) => {
    fetch("http://localhost:3001/logged_in", {
      credentials: "include"
    })
    .then(resp => resp.json())
    .then(data => dispatch(setCurrentUser(data)))
  }
}

export const setCurrentUser = (data) => ({
  type: "SET_CURRENT_USER",
  payload: data
})

export const startLogin = (data) => {
  return(dispatch) => {
    fetch("http://localhost:3001/sessions", {
      method: "POST",
      credentials: "include",
      headers: { 
        "Content-type": "application/json",
        body: JSON.stringify(data)
      }
    })
    .then(resp => resp.json())
    .then(data => dispatch(finishLogin(data)))
  }
}

export const finishLogin = (data) => ({
  type: "LOGIN",
  payload: data
})



