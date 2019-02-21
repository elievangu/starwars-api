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


export const selectCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    category
  }
}

export const requestPosts = (category) => {
  return {
    type: 'REQUEST_POSTS',
    category,
    page: 1
  }
}

export const receivePosts = (json) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: json.data
  }
}

export const receivePageNumber = (json) => {
  return {
    type: 'RECEIVE_PAGE_NUMBER',
    pageNumber: json.data.count
  }
}

export const receiveChartData = (json) => {
  const array = Object.entries(json.data).filter(x => Number(x[1]))
  
  return {
    type: 'RECEIVE_CHART_DATA',
    label: json.data.name ? json.data.name : json.data.title,
    labels: array.map(x => x[0].replace(/_/g, " ").charAt(0).toUpperCase() + x[0].replace(/_/g, " ").slice(1)),
    data: array.map(x => Number(x[1]))
  }
}


//asynchronous Actions Creators

export const fetchPosts = (category) => {

  return (dispatch) => {
    dispatch(requestPosts(category))
    dispatch(getPageNumber())
    return axios.get(`https://swapi.co/api/${category}/1/.json`)
      .then(
        json => {
          dispatch(receivePosts(json))
          dispatch(receiveChartData(json))
        }
      )
  }
}

export const fetchPrevPage = (dispatch) => {
  return (dispatch) => {
    dispatch(prevPage())
    return axios.get(`https://swapi.co/api/${store.getState().category}/${store.getState().counter.page}/.json`)
      .then(
        json => {
          dispatch(receivePosts(json))
          dispatch(receiveChartData(json))
        }
      )
  }
}

export const fetchNextPage = (dispatch) => {
  return (dispatch) => {
    dispatch(nextPage())
    return axios.get(`https://swapi.co/api/${store.getState().category}/${store.getState().counter.page}/.json`)
      .then(
        json => {
          dispatch(receivePosts(json))
          dispatch(receiveChartData(json))
        } 
      )
  }
}

export const getPageNumber = (dispatch) => {
  return (dispatch) => {
    return axios.get(`https://swapi.co/api/${store.getState().category}/.json`)
    .then(
      json => {
        dispatch(receivePageNumber(json))
      }
    )
  } 
}