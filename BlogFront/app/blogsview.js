'use strict'

import { postBlog } from './query'

function BlogView(parent) {
  this.parent = parent
  this.renderBlogs = (blog) => {
    let div = document.createElement('div')
    let header = document.createElement('h2')
    header.innerText = blog.header
    div.appendChild(header)
    let p = document.createElement('p')
    p.innerText = blog.text
    div.appendChild(p)
    let author = document.createElemen('p')
    author.innerText = blog.author
    div.appendChild(author)
    this.active = div
    return div
  }

  this.renderEditView = () => {
    if (typeof this.editView === 'undefined') {
      const h = document.createElement('h2')
      h.innerText = 'Uusi blogi'
      const author = document.createElement('input')
      author.type = 'text'
      const blogHeader = document.createElement('input')
      const blogText = document.createElement('textarea')
      const button = document.createElement('button')
      button.addEventListener('click', (e) => {
        console.log('')
        postBlog()
      })
      button.innerText = 'Lisää bogikirjoitus'
      const edit = document.createElement('div')
      edit.appendChild(h)
      edit.appendChild(document.createTextNode('Tekijä:'))
      edit.appendChild(author)
      edit.appendChild(document.createElement('br'))
      edit.appendChild(document.createTextNode('Blogiotsikko'))
      edit.appendChild(blogHeader)
      edit.appendChild(document.createElement('br'))
      edit.appendChild(document.createTextNode('Blogiteksti'))
      edit.appendChild(blogText)
      edit.appendChild(document.createElement('br'))
      edit.appendChild(button)
      this.editView = edit
      this.active = edit
      this.parent.appendChild(edit)
    }
  }
  this.renderBlogs = (blogs) => {
    let view = document.createElement('div')
    const h2 = document.createElement('h2')
    h2.innerText = 'Viimeisimmät blogit'
    view.appendChild(h2)
    for (let blog of blogs) {
      let blogView = this.blockView(blog)
      view.appendChild(blogView)
    }
    if (typeof this.active !== 'undefined') {
      document.removeChild(this.active)
      this.actine = undefined
    }
    this.parent.appendChild(view)
    this.active = view
  }
}

export {
  BlogView
}
