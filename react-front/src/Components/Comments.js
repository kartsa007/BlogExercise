import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Storage } from './Storage'
import { EditComment } from './EditComment'
import { Comment } from './Comment'

export class Comments extends Component {

  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
    this.propTypes = {
      comments: PropTypes.string.isRequired
    }
  }

  doContent(comments) {
    let content = []
    let key = 1
    if (comments && comments.length) {
      for (let comment of comments) {
        content.push(<Comment key={key++} comment={comment}/>)
      }
    }

    if (Storage.user && !this.state.edit) {
      content.push(
        <button key={key++} onClick={() => {
          this.setState({edit: true})
        }}>Kommentoi</button>)
    }
    if (this.state.edit) {
      content.push(<EditComment key={key++}/>)
    }
    return content
  }

  render() {
    return (
      <div>
        {this.doContent(this.props.comments)}
      </div>
    )
  }

}

Comments.propTypes = {
  comments: PropTypes.string.isRequired
}