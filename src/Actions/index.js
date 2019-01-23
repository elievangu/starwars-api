//npm import
import axios from 'axios';

//Synchronous Action Creators


export const prevPage = () => {
  return {
    type: 'PREVIOUS_PAGE'
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


export const showHome = () => {
  return {
    type: 'SHOW_FILMS',
    category:'film'
  }
}

export const showPeople = () => {
  return {
    type: 'SHOW_PEOPLE',
    category:'people'
  }
}

export const showPlanets = () => {
  return {
    type: 'SHOW_PLANETS',
    category:'planets'
  }
}

export const showSpecies = () => {
  return {
    type: 'SHOW_SPECIES',
    category:'species'
  }
}

export const showStarships = () => {
  return {
    type: 'SHOW_STARSHIPS',
    category:'starships'
  }
}

export const showVehicles = () => {
  return {
    type: 'SHOW_VEHICLES',
    category:'vehicles'
  }
}

//asynchronous Actions Creators

export const fetchPosts = (category, page) => {
  return (dispatch) => {
    dispatch(requestPosts(category))

    return axios.get(`https://swapi.co/api/${category}/${page}/.json`)
      .then(
        res => dispatch(receivePosts(category, res.data))
      )
  }
}