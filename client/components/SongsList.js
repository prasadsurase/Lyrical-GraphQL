import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from "react-apollo";

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
          {this.renderSongs()}
        </div>
      )
    }
  }
}

const songsQuery = gql`
{
  songs{
    id
    title
  }
}
`;

export default graphql(songsQuery)(SongsList);