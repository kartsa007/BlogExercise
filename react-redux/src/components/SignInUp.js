import React, { Component } from 'react';
import { Form, Text } from 'react-form';
import { PropTypes } from 'prop-types';

// import { postData } from '../utils//Query';

export class SignInUp extends Component {
  constructor(props) {
    super(props);
    this.userResponse = this.userResponse.bind(this);
    this.okResponse = this.okResponse.bind(this);
  }

  userResponse() {
    if (!this.userName.value) {
      console.log();
    }
    if (!this.passwd.value) {
      console.log();
    }
    return true;
  }

  checkUserName() {
    console.log('');
  }

  okResponse(response) {
    if (response.status === 'ok') {
      this.props.actions.signedIn(response);
    } else {
      this.errText = 'Kirjautuminen epäonnistui';
      this.userName.value = '';
      this.passwd.value = '';
      this.setState({});
    }
  }

  render() {
    console.log('SignInUp');
    return (
      <Form>
        {formApi => (
          <form onSubmit={formApi.submitForm}>
            <label htmlFor="user">Käyttäjätunnus:
              <Text field="Käyttäjätunnus:" id="user" />
            </label>
            <label htmlFor="password">Salasana:
              <Text type="password" id="password" />
            </label>
          </form>)}
      </Form>);
  }
}

export default SignInUp;
