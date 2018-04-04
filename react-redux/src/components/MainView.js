import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignInUp } from './SignInUp';
import { Blogs } from './Blogs';
import { EditBlog } from './EditBlog';

const MainView = () => {
  console.log('MainView');
  return (
  <Switch>
    <Route path="/signup" component={SignInUp} />
    <Route path="/editblog" component={EditBlog} />
    <Route exact path="/" component={Blogs} />
  </Switch>);
};

export default MainView;
