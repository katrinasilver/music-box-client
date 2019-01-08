import axios from 'axios'
export const ADD_ARTIST = 'ADD_ARTIST'
export const REMOVE_ARTIST = 'REMOVE_ARTIST'
export const GET_ARTIST = 'GET_ARTIST'

export const getArtists = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:5000/artists`)
      dispatch({
        type: GET_ARTIST,
        payload: res.data
      })
    } catch(err) {
      console.log(err)
    }
  }
}

export const removeArtist = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:5000/artists/${id}`)
    .then(res => {
      dispatch({
        type: REMOVE_ARTIST,
        payload: id
      })
    }).catch(err => console.log(err))
  }
}
