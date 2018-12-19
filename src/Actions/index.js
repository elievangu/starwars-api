
export const prevPage = () => {
  return {
    type: 'PREVIOUS_PAGE',
  }
}

export const nextPage = () => {
  return {
    type: 'NEXT_PAGE'
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const VisibilityFilters = {

  SHOW_FILMS: 'SHOW_FILMS',
  SHOW_PEOPLE: 'SHOW_PEOPLE',
  SHOW_PLANETS: 'SHOW_PLANETS',
  SHOW_SPECIES: 'SHOW_SPECIES',
  SHOW_STARSHIPS: 'SHOW_STARSHIPS',
  SHOW_VEHICLES: 'SHOW_VEHICLES'
}