import React from 'react';
// import { Storage } from '../utils/Storage';
import { Blog } from './Blog';

export class Blogs extends React.Component {
  render() {
    return (
      <div>
        <h2>Blogikirjoituksia</h2>
        {(() => {
          const blogs = [];
          if (Storage.blogs) {
            for (let i = 0; i < Storage.blogs.length; i += 1) {
              const blog = Storage.blogs[i];
              blogs.push(<Blog key={i} blog={blog} />);
            }
          }
          return blogs;
        })()}
      </div>);
  }
}

export default Blogs;
