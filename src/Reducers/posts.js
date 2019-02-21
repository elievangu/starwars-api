//npm import

//local import

const initialState = {
  isFetching: false,
  posts: []
}

const posts = (state = initialState, action) => {
  switch (action.type) {

    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      })

    default:
      return state
  }
}

export default posts;