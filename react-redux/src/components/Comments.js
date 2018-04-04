import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Storage } from '../utils/Storage';
import { EditComment } from './EditComment';
import { Comment } from './Comment';
// import { postData } from '../utils/Query';

export class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }

  doContent(comments) {
    const content = [];
    let key = 1;
    if (comments && comments.length) {
      for (const comment of comments) {
        content.push(<Comment key={key++} comment={comment} />);
      }
    }

    if (Storage.user && !this.state.edit) {
      content.push(<button
        key={key++}
        onClick={() => {
          this.setState({ edit: true });
        }}
      >Kommentoi
                   </button>);
    }
    if (this.state.edit) {
      content.push(<EditComment
        key={key++}
        commit={(text) => {
        const comment = {
          author: Storage.user.name,
          comment: text,
          blog_id: this.props.blogId,
        };
        postData('/comment', comment);
        this.props.comments.push(comment);
        this.setState({ edit: false });
      }}
      />);
    }
    return content;
  }

  render() {
    return (
      <div>
        {this.doContent(this.props.comments)}
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  blogId: PropTypes.number.isRequired,
};

export default Comments;
