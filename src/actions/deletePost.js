const deletePost = id => {
  return {
    type: 'DELETE POST',
    id
  };
};

export default deletePost;
