export default ( state = [], action ) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
}; // end of postReducer()

// Before
//
// export default ( state = [], action ) => {
//   if(action.type === 'FETCH_POSTS') {
//     return action.payload
//   }
//   return state;
// };

// After switch statement
//
// export default ( state = [], action ) => {
//  switch (action.type) {
//    case 'FETCH_POSTS':
//      return action.payload;
//    default:
//      return state;
//    }
//  };
//