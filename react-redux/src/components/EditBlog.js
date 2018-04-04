import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { postData } from '../utils/Query';
// import { Storage } from '../utils/Storage';

export class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.blog = {};
    this.okResponse = this.okResponse.bind(this);
  }

  okResponse() {
    this.props.actions.addBlog();
  }

  render() {
    return (
      <div>
        <div>
        Otsikko:
          <br />
          <input
            type="text"
            onInput={(e) => {
              this.blog.header = e.target.value;
              this.setState({});
}}
          />
          <br />
        Blogiteksti
          <br />
          <textarea
            onInput={(e) => {
              this.blog.text = e.target.value;
              this.setState({});
}}
          />
          <br />
          <button onClick={
            () => {
              this.blog.author = Storage.user.name;
              this.blog.date = new Date().toISOString();
              postData('/blog', this.blog, () => this.okResponse());
            }
          }
          >Talleta
          </button>
        </div>
      </div>);
  }
}

EditBlog.propTypes = {
  actions: PropTypes.object
};

export default EditBlog;
