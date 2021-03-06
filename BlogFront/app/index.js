import {
  NavView
} from './navview'
import {
  BlogView
} from './blogsview'
import {
  storage
} from './storage'
import {
  queryBlogs
} from './query'


function init() {
  const container = document.getElementById('container')
  storage.navView = new NavView(container)
  storage.blogView = new BlogView(container)
  storage.navView.storage = storage
  storage.blogView.storage = storage
  container.appendChild(storage.navView.render())
  queryBlogs()
}
window.addEventListener('load', init)
