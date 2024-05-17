import React, { Component } from "react";
import { graphql } from "react-apollo";
import likeLyricMutation from "../queries/likeLyric";

class LyricsList extends Component{
  constructor(props){
    super(props)
  }

  onLyricLike(id, likes) {
    this.props.mutate({
      variables: {
        id: id
      },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          __typename: 'LyricType',
          id: id,
          likes: likes + 1
        }
      }
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({id, content, likes}) => {
      return (
        <li key={id} className="collection-item">
          <div>
          {content}
          <i onClick={() => this.onLyricLike(id, likes)} className="material-icons">thumb_up</i>
          {likes}
          </div>
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