'use strict'
import { postBlog, postComment } from './query'

class Storage  {
  get mode () {
    return this._mode
  }
  set mode (mode) {
    this._mode = mode
    if (mode === 'EditBlog') {
      this.blogView.renderEditView()
    }
    if (mode === 'BlogView') {
      this.blogView.renderBlogs(this.blogs)
    }
    if (mode === 'SuperUser') {
      this.blogView.renderBlogs(this.blogs, mode)
    }
  }
  get author () {
    return this._author
  }
  set author (value) {
    this._author = value
  }
  set blogText (text) {
    this._blogText = text
  }
  get blogText () {
    return this._blogText
  }
  set blogs(data) {
    this._blogs = data
    this.blogView.renderBlogs(data)
  }

  get blogs() {
    return this._blogs
  }

  addBlog(blog) {
    this._blogs.push(blog)
    this.mode = 'BlogView'
    postBlog(blog)
  }

  deleteBlog(blog) {
    let index = this._blogs.indexOf(blog)
    if (index >= 0) {
      this._blogs.splice(index, 1)
      this.mode = 'SuperUser'
    }
  }

  addComment(comment, blog) {
    blog.comments.push(comment)
    postComment(comment)
  }

  changeMode() {
    if (this.mode === 'SuperUser') {
      this.mode = 'BlogView'
    } else {
      this.mode = 'SuperUser'
    }
  }
}

let storage = new Storage()
export { storage }
