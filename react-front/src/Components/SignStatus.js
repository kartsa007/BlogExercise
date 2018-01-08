import React, { Component } from 'react'
import { postSignIn } from './Query'
import img from '../../public/ajax-loader.gif'

export class SignStatus extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    if (this.props.errText) {
      return (
        <div>
          {this.props.errText}
        </div>
      )
    }
    if (this.props.status) {
      return (
        <div>
          <img src='img'/>
        </div>
      )
  
    }
		return (
			<div>
        <button type='submit'>{this.props.buttonText}</button>
			</div>)
	}
}
