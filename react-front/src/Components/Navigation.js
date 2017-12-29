import React, { Component } from 'react'

export class Navigation extends Component {
 render() {
    console.log(this.props)
    return (
      <nav style={{ width: '30%', backgroundColor: 'grey' }}>
        <div>
          <button onClick={() => {this.props.action('Super', 'Blogi näkymä')}}>Super Mode</button>
        </div>
        <div>
          <button onClick={() => {this.props.action('Edit', 'Blogi näkymä')}}>
          {this.props.button2Text}
          </button>
        </div>
      </nav>
    )
  }
}
