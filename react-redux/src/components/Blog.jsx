import React from 'react';
import { PropTypes } from 'prop-types';
import { Comments } from './Comments';
import { getData } from '../utils//Query';

export class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.comments = [];
  }

  componentDidMount() {
    getData(`/blog/${this.props.blog.id}/comment`, (data) => {
      this.comments = data;
      this.setState({});
    }, () => {

    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.blog.header}</h2>
        <div>{this.props.blog.text}</div>
        <div>By {this.props.blog.author}</div>
        <Comments blogId={this.props.blog.id} comments={this.comments} />
      </div>);
  }
}
export default Blog;

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
