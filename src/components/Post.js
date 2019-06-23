import React, { Component } from 'react';

class Post extends Component {
  state = {
    post: null
  };

  getPost = async id => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await response.json();
    return post;
  };

  componentDidMount() {
    const id = this.props.match.params.post_id;
    const post = this.getPost(id)
      .then(data => {
        this.setState({
          post: data
        });
      })
      .catch(err => console.log(err.message));
  }

  render() {
    const { post } = this.state;
    const postData = post ? (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    ) : (
      <p className="center">Loading post...</p>
    );
    return <div>{postData}</div>;
  }
}

export default Post;
