//npm import

//local import

const initialState = {
  page: 0,
  pageNumber: 0
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    
    case 'RECEIVE_PAGE_NUMBER':
      return Object.assign({}, state, {
        pageNumber: action.pageNumber
      })
    
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        page: 1
      })
    
    case 'PREVIOUS_PAGE':
      return (
        Object.assign({}, state, {
          page: state.page - 1 < 1 ?
          1 : state.page - 1
        })
      )
        
    case 'NEXT_PAGE':
      return (
        Object.assign({}, state, {
          page: state.page + 1 > state.pageNumber ?
          state.pageNumber : state.page + 1
        })     
      )
    
    default:
      return state
  }
}

export default counter;