export const getFavorites = (userId) => {
  return(dispatch) => {
    fetch(`https://mentor-app-api.herokuapp.com/${userId}/favorites`)
    .then(resp => resp.json())
    .then(data => dispatch(setFavorites(data)))
  }
}

export const setFavorites = (favorites) => ({
  type: 'SET_FAVORITES',
  payload: favorites
})

