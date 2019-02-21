//npm import

//local import

const initialState = 1
const page = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_POSTS':
      return initialState
    
    case 'PREVIOUS_PAGE':
      
      return (
        state - 1 < 1 ?
          1 : state - 1
      )
    
    case 'NEXT_PAGE':
      return state + 1
    
    default:
      return state
  }
}

export default page;