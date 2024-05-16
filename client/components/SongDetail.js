import React, { Component} from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";
import LyricCreate from "./LyricCreate";
import LyricsList from "./LyricsList";
import fetchSong from './../queries/fetchSong';

class SongDetail extends Component{
  renderSong() {
    const song = this.props.data.song;
  
    return (
      <div>
        <h4>Song Details</h4>
        Title: <span>{song.title}</span>
        <LyricsList lyrics={song.lyrics}/>
        <LyricCreate songId={song.id}/>
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