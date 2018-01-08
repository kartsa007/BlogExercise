import React from 'react'
import { PropTypes } from 'prop-types'
import { Comments } from './Comments'

export class Blog extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.blog.header}</h2>
        <div>{this.props.blog.text}</div>
        <div>By {this.props.blog.author}</div>
        <Comments comment={this.props.blog.comments}/>
      </div>)
  }
}

Blog.propTypes = {
  blog: PropTypes.object
}