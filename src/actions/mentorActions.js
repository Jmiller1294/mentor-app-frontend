export const getUserMentors = (userId) => {
  return(dispatch) => {
    console.log('inside')
    fetch(`https://mentor-app-api.herokuapp.com/users/${userId}/bookings`)
    .then(resp => resp.json())
    .then(data => dispatch(setUserMentors(data)))
  }
}

export const setUserMentors = (data) => ({
  type: "SET_MENTORS",
  payload: data
})

