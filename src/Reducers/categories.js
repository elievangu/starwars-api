//npm import

//local import


const selectCategory = (state = '', action) => {
  switch(action.type) {

    case 'SHOW_HOME':
      return action.category

    case 'SHOW_PEOPLE':
      return action.category

    case 'SHOW_PLANETS':
      return action.category

    case 'SHOW_SPECIES':
      return action.category

    case 'SHOW_STARSHIPS':
      return action.category

    case 'SHOW_VEHICLES':
      return action.category

    default:
      return state
  }
}

export default selectCategory;

