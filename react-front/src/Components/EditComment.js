import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
export class EditComment extends Component {

  render() {
    return (
      <div>
        <h3>Kommentoi</h3>
        <textarea />
        <button onClick={this.props.onClick}>Lähetä kommenttisi</button>
      </div>)
  }
}

EditComment.propTypes = {
  onClick: PropTypes.func
}


