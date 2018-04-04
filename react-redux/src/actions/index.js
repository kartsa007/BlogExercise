import { SIGN_IN, EDIT_BLOG, POST_BLOG } from '../constants/ActionTypes';

export const singIn = user => ({
  type: SIGN_IN,
  user,
});

export const addBlog = blog => ({
  type: EDIT_BLOG,
  blog,
});

export const postBlog = blog => ({
  type: POST_BLOG,
  blog
});

export default singIn;
