//npm import

//local import

const initialState = {
  isFetching: false,
  previous:'',
  next:'',
  posts: []
}

const posts = (state = initialState, action) => {
  switch(action.type) {

    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        previous: action.previous,
        next: action.next,
        posts: action.posts 
      })
       
    default:
      return state
  }
}

export default posts;