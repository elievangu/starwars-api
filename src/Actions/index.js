
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


export const selectCategory= (category) => {
  return {
    type: 'SELECT_CATEGORY',
    category
  }
}

export const requestPosts = (category) => {
  return {
    type: 'REQUEST_POST',
    category
  }
}

export const receivePosts = (category, json) => {
  return {
    type: 'RECEIVE_POSTS',
    category,
    posts: json
  }
}


export const showFilms = (category) => {
  return {
    type: 'SHOW_FILMS',
    category
  }
}

export const showPeople = (category) => {
  return {
    type: 'SHOW_PEOPLE',
    category
  }
}

export const showPlanets = (category) => {
  return {
    type: 'SHOW_PLANETS',
    category
  }
}

export const showSpecies = (category) => {
  return {
    type: 'SHOW_SPECIES',
    category
  }
}

export const showStarships = (category) => {
  return {
    type: 'SHOW_STARSHIPS',
    category
  }
}

export const showVehicles = (category) => {
  return {
    type: 'SHOW_VEHICLES',
    category
  }
}

