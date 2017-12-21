export const addBlog = (blog) => ({
  type: 'ADD_BLOG',
  blog
})
export const startBlog = () => ({
  type: 'START_BLOG'
})

export const addComment = (comment) => ({
  type: 'ADD_COMMENT',
  comment
})

export const startComment = () => ({
  type: 'START_COMMENT'
})

export const deleteBlog = (blog) => ({
  type: 'DELETE_COMMENT'
})

export const toggleView = (view) => ({
  type: 'TOGGLE_VIEW',
  view
})

