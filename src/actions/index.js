export const ADD_ARTIST = 'ADD_ARTIST'
export const REMOVE_ARTIST = 'REMOVE_ARTIST'

export const removeArtist = (id) => {

  return {
    type: REMOVE_ARTIST,
    payload: id
  }
}
