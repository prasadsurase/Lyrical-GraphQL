import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongs from './../queries/fetchSongs';
import deleteSong from './../queries/deleteSong';

class SongsList extends Component {
  renderSongs() {
    return this.props.data.songs.map(({id, title}) => {
      return(
        <li key={id} className="collection-item">
          {title}
          <i onClick={() => this.onSongDelete(id)} className="material-icons">delete</i>
        </li>
      )
    });
  }

  onSongDelete(id){
    this.props.mutate({
      variables: {id: id},
      refetchQueries: [{query: fetchSongs}]
    })
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

export default graphql(deleteSong)(
  graphql(fetchSongs)(SongsList)
);