import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongs from './../queries/fetchSongs';

class SongsList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return(
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      )
    });
  }

  render() {
    if(this.props.data.loading) {
      return(
        <div>Loading...</div>
      )
    }
    else {
      return (
        <div>
          <Link to="/" className="btn-floating btn-large right">
            <i className="material-icons">back</i>
          </Link>
          <ul>
            {this.renderSongs()}
          </ul>
          <Link to="/songs/new" className="btn-floating btn-large red right">
            <i className="material-icons">add</i>
          </Link>
        </div>
      )
    }
  }
}

export default graphql(fetchSongs)(SongsList);