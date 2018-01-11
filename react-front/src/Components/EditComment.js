import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
export class EditComment extends Component {

  render() {
    return (
      <div>
        <h3>Kommentoi</h3>
        <textarea onBlur={(e) => {
          this.comment = e.target.value
        }}/>
        <button onClick={() => {
          this.props.commit(this.comment)
        }}>Lähetä kommenttisi</button>
      </div>)
  }
}

EditComment.propTypes = {
  commit: PropTypes.func
}


