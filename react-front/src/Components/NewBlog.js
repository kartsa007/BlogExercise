import React, { Component } from 'react'
import { postBlog } from './Query'

export class NewBlog extends Component {

  constructor(props) {
    super(props)
    this.state = { errText: '' }
    this.dataOk = this.dataOk.bind(this)
    this.save = this.save.bind(this)
    this.blog = { author: {} }
  }

  dataOk() {
    if (typeof this.blog.author.name === 'undefined') {
      this.setState({ errText: 'Tekijä puuttuu' })
      return false
    }
    if (typeof this.blog.header === 'undefined') {
      this.setState({ errText: 'Otsikko puuttuu' })
      return false
    }
    if (typeof this.blog.text === 'undefined') {
      this.setState({ errText: 'Blogissa pitää olla jotain asiaa' })
      return false
    }
    return true
  }

  clearErr() {
    if (this.state.errText.length) {
      this.setState({ errText: '' })
    }
  }

  save() {
    if (this.dataOk()) {
      console.log('Data ok')
    }
    postBlog(this.blog)
  }
  render() {
    return (
      <div>
        <h2>Uusi Blogi</h2>
        <br />
        Otsikko:
        <input onInput={(e) => {
          this.clearErr()
          this.blog.header = e.target.value
        }} />
        <br />
        Tekijä:
        <input onInput={(e) => {
          this.clearErr()
          this.blog.author.name = e.target.value
        }} />
        <br />
        Blogiteksti:
        <textarea onInput={(e) => {
          this.clearErr()
          this.blog.text = e.target.value
        }} />
        <br />
        <button onClick={this.save}>Talleta blogi</button>
        <h3>{this.state.errText}</h3>
      </div>)
  }
}
