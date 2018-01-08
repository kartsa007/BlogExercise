import React, { Component } from 'react'
import { SignStatus } from './SignStatus'
import { postData } from './Query'

export class SignInUp extends Component {

  constructor (props) {
    super(props)
    this.userResponse = this.userResponse.bind(this)
    this.okResponse = this.okResponse.bind(this)
  }

  userResponse() {
    if (!this.userName.value) {

    }
    if (!this.passwd.value) {

    }
    return true
  }

  checkUserName() {

  }

  okResponse(response) {
    this.props.actions.signedIn(response)
  }

  errresponse(response) {
    console.log(response)
  }

  render() {
		return (
			<div>
        <form onSubmit={(e) => {
          e.preventDefault()
          if (this.userResponse()) {
            postData(this.props.url, {
              name: this.userName.value, 
              passwd: this.passwd.value
            }, this.okResponse, this.erroResponse)
          }
        }}>
				Käyttäjätunnus:
        <input type='text' ref={(input) => {
          this.userName = input
        }}/>
        Salasana:
        <input type='password' ref={(input) => {
          this.passwd = input
        }}/>
          <SignStatus errTxt={this.errText} buttonText={this.props.buttonText}/>
        </form>
			</div>)
	}
}
