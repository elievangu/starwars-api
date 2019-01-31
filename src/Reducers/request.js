//npm import

//local import

const category = (state = '', action) => {
  switch(action.type) {
    case 'REQUEST_POSTS':
      return action.category

    default:
      return state
  }
}

export default category;