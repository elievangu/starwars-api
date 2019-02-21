//npm import

//local import

const initialState = 1

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_PAGE_NUMBER':
      return action.pageNumber
    
    default:
      return state
  }
}

export default counter;