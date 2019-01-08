//npm import

//local import

const initialState = {
  isFetching: false,
  items: []
}
const posts = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true
      })

    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts 
      })
      
    default:
      return state
  }
}

export default posts;