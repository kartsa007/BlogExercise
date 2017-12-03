'use strict'
import { Storage } from './storage'

function queryBlogs () {

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
      if (data) {
        Storage.blogs = data
      }    
    })
}

function postBlog () {
  let headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', '*/*')
  console.log(headers)
  // Display the key/value pairs
  for (var pair of headers.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
  let url = '/blogs'
  let init = {
    method: 'post',
    headers: headers,
    body: JSON.stringify({
      text: 'Tesi',
      header: 'blogheader',
      author: 'Jussi'
    })
  }
  fetch(url, init)
    .then(responseOk).then(responseJsonData)
}

export { queryBlogs, postBlog }
