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