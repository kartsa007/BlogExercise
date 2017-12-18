'use strict'

function NavView (container) {
  this.parent = container
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
    let btn2 = document.createElement('button')
    btn2.innerText = 'Super moode'
    btn2.addEventListener('click', (e) => {
      this.storage.changeMode()
    })
    div.appendChild(btn2)
    container.appendChild(div)
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
