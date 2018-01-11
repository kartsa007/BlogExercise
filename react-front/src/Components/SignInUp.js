import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
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
    if (response.status === 'ok') {
      this.props.actions.signedIn(response) 
    } else {
      this.errText = 'Kirjautuminen epäonnistui'
      this.userName.value = ''
      this.passwd.value = ''
      this.setState({})
    }
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
          }} onInput={() => {
            if (this.errText) {
              delete this.errText
              this.setState({})
            }
          }}/>
        Salasana:
          <input type='password' ref={(input) => {
            this.passwd = input
          }} onInput={() => {
            if (this.errText) {
              delete this.errText
              this.setState({})
            }
          }}/>
          <SignStatus status={this.status} errText={this.errText} buttonText={this.props.buttonText}/>
        </form>
      </div>)
  }
}

SignInUp.propTypes = {
  url: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}