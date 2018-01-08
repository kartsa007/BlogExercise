import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export class Comment extends Component {

  render() {
    return (
      <div>
        <p>{this.props.comment.text}</p>
        <p>{this.props.comment.author}</p>
      </div>)
  }
}

Comment.propTypes = {
  comment: PropTypes.object
}