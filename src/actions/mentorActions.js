export const getUserMentors = (userId) => {
  return(dispatch) => {
    console.log('inside')
    fetch(`http://localhost:3001/users/${userId}/bookings`)
    .then(resp => resp.json())
    .then(data => dispatch(setUserMentors(data)))
  }
}

export const setUserMentors = (data) => ({
  type: "SET_MENTORS",
  payload: data
})

