import React, { Component } from 'react'
import { Blog } from './Blog'
import { postData } from './Query'
import { Storage } from './Storage'

export class EditBlog extends Component {
  constructor(props) {
    super(props)
    this.blog = {}
    this.okResponse = this.okResponse.bind(this)
  }

  okResponse() {
    this.props.actions.addBlog()
  }

  render() {
		return (
			<div>
        <div>
        Otsikko:
        <br/>
        <input type='text' 
          onInput={(e) => {
            this.blog.header = e.target.value
            this.setState({})}}/>
        <br/>
        Blogiteksti
        <br/>
        <textarea 
          onInput={(e) => {
            this.blog.text = e.target.value
            this.setState({})}}/>
        <br/>
        <button onClick={
          (e) => {
            this.blog.authorId = Storage.user.id
            this.blog.date = new Date().toISOString()
            postData('/blog', this.blog, this.okResponse)
          }
        }>Talleta</button>
        </div>
        <Blog blog={this.blog}/>
			</div>)
	}
}
