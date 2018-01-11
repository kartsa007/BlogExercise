import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {SignInUp} from './SignInUp'
import {Blogs} from './Blogs'
import {EditBlog} from './EditBlog'

export class MainView extends Component {
  render() {
    if (this.props.view == 'SignIn') {
      return (
        <SignInUp url='signin' actions={this.props.actions} buttonText='Kirjaudu'/>
      )
    } else if (this.props.view === 'Edit') {
      return(<EditBlog actions={this.props.actions}/>)
    } else {
      return (
        <Blogs/>
      )
    }
  }
}

MainView.propTypes = {
  view: PropTypes.string,
  actions: PropTypes.object
}