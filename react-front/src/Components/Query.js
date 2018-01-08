import { Storage } from './Storage'

function queryBlogs (okResponse, errResponse) {
  
  let headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', '*/*')
  console.log(headers)
  let url = '/blog'
  let init = {
    method: 'get',
    headers: headers
  }
  fetch(url, init)
    .then((response) => {
      console.log('got response')
      return response.json()
    }).then((data) => {
      okResponse(data)
    })
}

function postBlog (blog) {
  
  blog.date = new Date().toISOString()
  let headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', '*/*')
  console.log(headers)
  // Display the key/value pairs
  for (var pair of headers.entries()) {
    console.log(pair[0] + ': ' + pair[1])
  }
  let url = '/blog'
  let init = {
    method: 'post',
    headers: headers,
    body: JSON.stringify(blog)
  }
  fetch(url, init)
    .then((response) => {
      console.log('Got response to Blog post')
      return response.json()
    }).then((data) => {
      console.log('Got data' + data)
      blog.id = data.id
    })
}
  
function postComment(comment) {
  let headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', '*/*')
  console.log(headers)
  // Display the key/value pairs
  for (var pair of headers.entries()) {
    console.log(pair[0] + ': ' + pair[1])
  }
  let url = '/comment'
  let init = {
    method: 'post',
    headers: headers,
    body: JSON.stringify(comment)
  }
  fetch(url, init)
    .then((response) => {
      console.log('Got response to Blog post')
      return response.json()
    }).then((data) => {
      console.log('Got data' + data)
      comment.id = data.id
    })
}
  
function postData(url, data, ok, err) {
  let headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', '*/*')
  let init = {
    method: 'post',
    headers: headers,
    body: JSON.stringify(data)
  }
  fetch(url, init)
    .then((response) => {
      console.log('Got response to Login post')
      return response.json()
    }).then((data) => {
      ok(data)
    }).catch(err)
}

export { queryBlogs, postBlog, postComment, postData }
  