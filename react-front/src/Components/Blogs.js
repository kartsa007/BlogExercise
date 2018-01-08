import React from 'react'
import { Storage } from './Storage'
import { Blog } from './Blog'

export class Blogs extends React.Component {
  render() {
    return (
      <div>
        <h2>Blogikirjoituksia</h2>
        {(() => {
          let blogs = []
          if (Storage.blogs) {
            for (let i = 0 ; i < Storage.blogs.length; i++) {
              let blog = Storage.blogs[i]
              blogs.push(<Blog key={i} blog={blog}/>)
            }
          }
          return blogs
        })()}
      </div>)
  }
}
