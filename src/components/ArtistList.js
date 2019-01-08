import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' // this is called on your mapDispatchToProps so you dont have to type dispatch on your methods
import { removeArtist } from '../actions' //for line 28

const ArtistList = ({ artists, removeArtist }) => {
  const list = artists.map((artist) => {
    return <li
      className="list-group-item d-flex justify-content-between align-items-center"
      key={artist.id}>
        { artist.name }
        <section>
          <span className="badge badge-primary badge-pill">{ artist.genre }</span>
          <a className="badge badge-danger badge-pill text-white ml-2"
          onClick={() => removeArtist(artist.id)}>Remove</a>
        </section>
      </li>
  })

  return <ul className="list-group">{ list }</ul>
}

const mapStateToProps = (state) => {
  return { artists: state.artists }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeArtist }, dispatch) // for line 6 and 15
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)
