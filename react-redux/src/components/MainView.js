import React from 'react';
import { PropTypes } from 'prop-types';
import { SignInUp } from './SignInUp';
import { Blogs } from './Blogs';
import { EditBlog } from './EditBlog';

const MainView = ({ view }) => {
  let output;

  if (view === 'SignIn') {
    output = (
      <SignInUp
        url="signin"
        actions={this.props.actions}
        buttonText="Kirjaudu"
      />);
  } else if (view === 'Edit') {
    output = (<EditBlog actions={this.props.actions} />);
  } else {
    output = (<Blogs />);
  }
  return output;
};

MainView.propTypes = {
  view: PropTypes.string,
};

export default MainView;
