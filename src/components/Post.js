import React, { Component } from 'react';

class Post extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    const id = this.props.match.params.post_id;
    this.setState({
      id
    });
  }
  render() {
    return <div>{this.state.id}</div>;
  }
}

export default Post;
