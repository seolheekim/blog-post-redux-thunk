import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchPostsAndUsers }       from '../actions';
import UserHeader           from './UserHeader';

class PostList extends Component {
  //life cycle method that is calling the action creator
  componentDidMount() {
    this.props.fetchPostsAndUsers()
  };

  // renderList() helper method will have lots of 'logic' to render the list
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div key={post.id} className="item">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2> {post.title} </h2>
              <p> {post.body} </p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    })
  };

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    )
  };// end of render()
}; //end of 'PostList' class component

// Remember anytime you want to get data from the Redux side
// into the React side.
// You always going to define mapStateToProps()
// then pass it off to connect()

// Inside combineReducers() we assigned our postsReducer()
// to 'posts' key. So it means that 'state' object is going to
// have a property called 'posts' that holds all the data.

// When mapStateToProps() is ran it will return a 'new object'
// with property 'posts' and that object is going to show up
// as the props object inside of PostList() component.
const mapStateToProps = (state) => {

  return { posts: state.posts }
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);