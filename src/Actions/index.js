//npm import
import axios from 'axios';

//local import
import { store } from '../index';

//Synchronous Action Creators


export const prevPage = () => {
  return {
    type: 'PREVIOUS_PAGE'

  }
}


export const nextPage = () => {
  return {
    type: 'NEXT_PAGE',
    
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
    type: 'REQUEST_POSTS',
    category
  }
}

export const receivePosts = (json) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: json.data.results,
    previous: json.data.previous,
    next: json.data.next
  }
}


//asynchronous Actions Creators

export const fetchPosts = (category) => {
  
  return (dispatch) => {
    dispatch(requestPosts(category))

    return axios.get(`https://swapi.co/api/${category}/.json`)
    .then(
      json => dispatch(receivePosts(json))
    )   
  }
}

export const fetchPrevPage = (dispatch) => {
  return (dispatch) => {

    return axios.get(`${store.getState().posts.previous}`)
    .then(
      json => dispatch(receivePosts(json))
    )
  }
}

export const fetchNextPage = (dispatch) => {
  return (dispatch) => {
    
    return axios.get(`${store.getState().posts.next}`)
    .then(
      json => dispatch(receivePosts(json))
    )
}
  }
  



