import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostsAndUsers= () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  const userIds = _.uniq(_.map(getState().posts, 'userId'))
  userIds.forEach(id => dispatch(fetchUser(id)));
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

// ***************** NOTES *****************

// Action Creator is a function that creates or
// returns a plain JS object to create 'actions'

// REDUX-THUNK 2nd argument addition to 'dispatch' is 'getStates' argument
// that getState function is the exists in the redux store.
// It gives access to all the data inside of redux.

//Action Creator

//  await key is going to essentially make sure that it waits for the
//  API request to be completed before it moves on and does anything else.

// export const fetchPostsAndUsers= () => async (dispatch, getState) => {
//   await dispatch(fetchPosts())
//   const userIds = _.uniq(_.map(getState().posts, 'userId'))
//   userIds.forEach(id => dispatch(fetchUser(id)));
// }; // end of fetchPostsAndUsers()

// export const fetchPosts = () => async dispatch => {
//   const response = await jsonPlaceholder.get('/posts')

//   dispatch({
//     type: 'FETCH_POSTS',
//     payload: response.data
//   })
// }; // end of fetchPosts()

// export const fetchUser = id => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${id}`)

//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   })
// }; // end of fetchUser()

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

