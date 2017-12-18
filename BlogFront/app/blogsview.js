'use strict'

function BlogView(container) {
  this.container = container
  this.renderEditView = () => {
    let blog = {}

    blog.author = {name: ''}
    blog.header = ''
    blog.text = ''
    blog.comments = []
    const h = document.createElement('h2')
    h.innerText = 'Uusi blogi'
    const author = document.createElement('input')
    author.type = 'text'
    author.addEventListener('input', (e) => {
      blog.author.name = e.target.value
    })
    const blogHeader = document.createElement('input')
    blogHeader.addEventListener('input', (e) => {
      blog.header = e.target.value
    })
    const blogText = document.createElement('textarea')
    blogText.addEventListener('input', (e) => {
      blog.text = e.target.value
    })
    const button = document.createElement('button')
    button.addEventListener('click', (e) => {
      console.log('')
      this.storage.addBlog(blog)
    })
    button.innerText = 'Lisää blogikirjoitus'
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
    if (typeof this.active !== 'undefined') {
      container.removeChild(this.active)
      this.active = undefined
    }
    this.active = edit
    this.container.appendChild(edit)
  }

  this.renderCommentEdit  = (blog, div, replaced) => {

    let comment = {}

    comment.author = {name: ''}
    comment.text = ''
    comment.blogId = blog.id

    const edit = document.createElement('div')
    const author = document.createElement('input')
    author.type = 'text'
    author.addEventListener('input', (e) => {
      comment.author.name = e.target.value
    })
    const commentText = document.createElement('textarea')
    commentText.addEventListener('input', (e) => {
      comment.text = e.target.value
    })
    const button = document.createElement('button')
    button.addEventListener('click', (e) => {
      console.log('')
      this.storage.addComment(comment, blog)
      div.replaceChild(replaced, edit)
      let commentEl = this.renderComment(comment)
      div.appendChild(commentEl)
    })
    button.innerText = 'Lisää kommentti'
    edit.appendChild(document.createTextNode('Kommentoija:'))
    edit.appendChild(author)
    edit.appendChild(document.createElement('br'))
    edit.appendChild(document.createTextNode('Kommentti'))
    edit.appendChild(commentText)
    edit.appendChild(document.createElement('br'))
    edit.appendChild(button)
    return edit
  }

  this.renderComment = (comment) => {
    let div = document.createElement('div')
    let p1 = document.createElement('p')
    div.appendChild(p1)
    p1.innerText = comment.author.name + ': ' + comment.text
    return div
  }

  this.renderComments = (blog) => {

    let div = document.createElement('div')
    let addButton = document.createElement('button')
    addButton.innerText = 'Kommentoi'
    addButton.addEventListener('click', (e) => {
      console.log(e)
      let edit = this.renderCommentEdit(blog, div, addButton)
      div.insertBefore(edit, div.childNodes[0])
      div.replaceChild(edit, addButton)
    })
    div.appendChild(addButton)

    for (let comment of blog.comments) {
      div.appendChild(this.renderComment(comment))
    }
    return div
  }

  this.renderBlog = (blog, mode) => {
    let div = document.createElement('div')
    if (typeof mode !== 'undefined') {
      let button = document.createElement('button')
      button.addEventListener('click', (e) => {
        console.log('')
        this.storage.deleteBlog(blog)
      })
      button.innerText = 'Poista blogikirjoitus'
      div.appendChild(button)
    }
    let header = document.createElement('h2')
    header.innerText = blog.header
    div.appendChild(header)
    let p = document.createElement('p')
    p.innerText = blog.text
    div.appendChild(p)
    let author = document.createElement('p')
    author.innerText = blog.author.name
    div.appendChild(author)
    let comments = this.renderComments(blog)
    div.appendChild(comments)
    return div
  }

  this.renderBlogs = (blogs, mode) => {
    let view = document.createElement('div')
    const h2 = document.createElement('h2')
    h2.innerText = 'Viimeisimmät blogit'
    view.appendChild(h2)
    for (let blog of blogs) {
      let blogView = this.renderBlog(blog, mode)
      view.appendChild(blogView)
    }
    if (typeof this.active !== 'undefined') {
      container.removeChild(this.active)
      this.active = undefined
    }
    this.container.appendChild(view)
    this.active = view
  }
}

export {
  BlogView
}
