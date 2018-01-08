import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { NewBlog } from './NewBlog'
import { Blogs } from './Blogs'

export class BlogView extends Component {
  render() {
    if (this.props.view === 'Edit') {
      return (<NewBlog></NewBlog>)
    } else {
      return (<Blogs></Blogs>)
    }
  }
}

BlogView.propTypes = {
  view: PropTypes.string
}