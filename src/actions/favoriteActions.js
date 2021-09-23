export const getFavorites = (userId) => {
  return(dispatch) => {
    fetch(`http://localhost:3001/users/${userId}/favorites`)
    .then(resp => resp.json())
    .then(data => dispatch(setFavorites(data)))
  }
}

export const setFavorites = (favorites) => ({
  type: 'SET_FAVORITES',
  payload: favorites
})
