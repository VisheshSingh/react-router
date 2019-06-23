import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  // componentDidMount() {
  // this.getPosts()
  //   .then(data => {
  //     this.setState({
  //       posts: [...data]
  //     });
  //   })
  //   .catch(err => console.log(err.message));
  // }

  // getPosts = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const posts = await response.json();
  //   return posts;
  // };

  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div key={post.id} className="card post">
            <div className="card-content">
              <Link to={'/' + post.id}>
                <h4 className="pink-text darken-3">{post.title}</h4>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <p className="center">No posts yet...</p>
    );
    return (
      <div className="container">
        <h3 className="center">Home</h3>
        {postList}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps)(Home);
