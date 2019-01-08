//npm import

//local import

const pages = (state = 1, action) => {
  switch(action.type) {
    case 'PREV_PAGE':
      return state - 1
    case 'NEXT_PAGE':
      return state + 1
    default:
      return state
  }
}

export default pages;