import { REMOVE_ARTIST, GET_ARTIST } from '../actions'

const init = [
  { id: 1, name: 'Drake', genre: 'hip-hop' },
  { id: 2, name: 'Fugees', genre: 'hip-hop' },
  { id: 3, name: 'A Tribe Called Quest', genre: 'hip-hop' }
]

export default function songs(state = init, { type, payload }) {

  switch (type) {

    case GET_ARTIST:
      return payload

    case REMOVE_ARTIST:
      return [...state.filter(artist => artist.id !== payload)]

    default:
      return state
  }
}
