export const getAppointments = (UserId) => {
  return(dispatch) => {
    fetch(`https://mentor-app-api.herokuapp.com/${UserId}/appointments`)
    .then(resp => resp.json())
    .then(data => dispatch(setAppointments(data)))
  }
}

export const setAppointments = (data) => ({
  type: 'SET_APPOINTMENTS',
  payload: data
})
