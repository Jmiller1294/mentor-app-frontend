export const checkLoggedInStatues = () => {
  return(dispatch) => {
    fetch("http://localhost:3001/logged_in", {
      credentials: "include"
    })
    .then(resp => resp.json())
    .then(data => dispatch(setCurrentUser(data)))
  }
}

const setCurrentUser = (data) => ({
  type: "SET_CURRENT_USER",
  payload: data
})

