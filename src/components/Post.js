import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  // getPost = async id => {
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${id}`
  //   );
  //   const post = await response.json();
  //   return post;
  // };

  // componentDidMount() {
  //   const id = this.props.match.params.post_id;
  //   const post = this.getPost(id)
  //     .then(data => {
  //       this.setState({
  //         post: data
  //       });
  //     })
  //     .catch(err => console.log(err.message));
  // }

  render() {
    console.log(this.props);
    const { post, deletePost, history } = this.props;
    const postData = post ? (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <div className="section">
              <button
                onClick={() => {
                  history.push('/');
                  deletePost(post.id);
                }}
                className="btn center pink darken-3 m-2"
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p className="center">Loading post...</p>
    );
    return <div>{postData}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id == id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch({ type: 'DELETE POST', id: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
