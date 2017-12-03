import {
  NavView
} from './navview'
import {
  BlogView
} from './blogsview'
import {
  Storage
} from './storage'
import {
  queryBlogs
} from './query'


function init() {
  const container = document.getElementById('container')
  let storage = Storage
  Storage.navView = new NavView(container)
  Storage.blogView = new BlogView(container)
  Storage.container = container
  container.appendChild(Storage.navView.render())
  queryBlogs()
}
window.addEventListener('load', init)