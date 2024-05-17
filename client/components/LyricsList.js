import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import likeLyricMutation from "../queries/likeLyric";

class LyricsList extends Component{
  constructor(props){
    super(props)
  }

  onLyricLike(id) {
    this.props.mutate({
      variables: {
        id: id
      }
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({id, content, likes}) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <i onClick={() => this.onLyricLike(id)} className="material-icons">thumb_up</i>
          {likes}
        </li>
      )
    });
  }

  render(){
    return (
      <div>
        <h5>Lyrics:</h5>
        <ul>
          {this.renderLyrics()}
        </ul>
      </div>
    )
  }
}

export default graphql(likeLyricMutation)(LyricsList);