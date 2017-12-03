'use strict'

let Storage = {
  get mode () {
    return this._mode
  },
  set mode (mode) {
    this._mode = mode
    if (mode === 'EditBlog') {
      this.blogView.renderEditView()
    }
    if (mode === 'BlogView') {
      this.blogView.blogView()
    }
  },
  get author () {
    return this._author
  },
  set author (value) {
    this._author = value
  },
  set blogText (text) {
    this._blogText = text
  },
  get blogText () {
    return this._blogText
  },
  set blogs(data) {
    this._blogs = data
    this.blogView.renderBlogs(data)
  },
  get blogs() {
    return this._blogs
  }
}

export { Storage }
