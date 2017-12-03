'use strict'

import { Storage } from './storage'

function NavView (parent) {
  this.parent = parent
  this.storage = Storage
  this.render = () => {
    let div = document.createElement('div')
    div.style.height = '100vh'
    div.style.backgroundColor = 'grey'
    let btn1 = document.createElement('button')
    btn1.innerText = 'Uusi blogi'
    btn1.addEventListener('click', (e) => {
      this.storage.mode = 'EditBlog'
    })
    div.appendChild(btn1)
    parent.appendChild(div)
    return div
  }
  this.mainView = (blogs) => {
    let mainDiv = document.createElement('div')
    for (let blog of blogs) {
      let blogView = this.NavView(blog)
      mainDiv.appendChild(blogView)
    }
  }
}

export { NavView }
