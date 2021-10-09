export const getEvents = (userId) => {
  return(dispatch) => {
    fetch(`https://mentor-app-api.herokuapp.com/users/${userId}/event_registrations`)
    .then(resp => resp.json())
    .then(events => dispatch(setEvents(events)))
  }
}

export const setEvents = (events) => ({
  type: 'SET_EVENTS',
  payload: events
})

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
