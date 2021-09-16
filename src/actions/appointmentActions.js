export const getAppointments = (UserId) => {
  return(dispatch) => {
    fetch(`http://localhost:3001/users/${UserId}/appointments`)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
}

export const setAppointments = (data) => ({
  type: 'SET_APPOINTMENTS',
  payload: data
})