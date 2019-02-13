import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

// Action Creator is a function that creates or
// returns a plain JS object to create 'actions'

//Action Creator
export const fetchPostsAndUsers= () => async dispatch => {
  // await key is going to essentially make sure that it waits for the API request to be
  // completed before it moves on and does anything else.
  await dispatch(fetchPosts())
}; // end of fetchPostsAndUsers()

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  })
}; // end of fetchPosts()

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
}; // end of fetchUser()

// *** this is before refactoring the code ***
//  export const fetchPosts = () => {
//    return async function (dispatch, getState) {
//      const response = await jsonPlaceholder.get('./posts')

//      dispatch({
//        type: 'FETCH_POSTS',
//        payload: response.data <- to only get blog posts and
//                                  nothing else.
//                                  console.log(response)
//                                  look inside the API
//                                  only thing you want is the
//                                  data property
//      })
//    }
//  }
