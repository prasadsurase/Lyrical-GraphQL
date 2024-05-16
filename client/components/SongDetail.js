import React, { Component} from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import fetchSong from './../queries/fetchSong';

class SongDetail extends Component{
  renderSong() {
    return (
      <div>
        Song Details:
        Id: <div>{this.props.data.song.id}</div>
        Title: <div>{this.props.data.song.title}</div>
      </div>
    );
  }
  render(){
    if(this.props.data.loading) {
      return(
        <div>Loading...</div>
      )
    }
     else {
      return (
        <div>
          <Link to="/">Back</Link>
          {this.renderSong()}
        </div>
      )
    }
  }
}

export default graphql(fetchSong, {
  options: (props) => {return { variables: {id: props.params.id }}}
})(SongDetail);