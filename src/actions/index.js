import axios from 'axios'

const API_URL = 'http://localhost:8080/api';
/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const FETCH_POSTS = 'FETCH_POSTS';
/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  
};

/*
 * action creators
 */

export function fetchPosts() {
  axios.get(`${API_URL}/notes`)
    .then(function(response) {
      console.log(response)
    })
    .catch(function(error) {
      console.log(error)
    })
    
  const req = axios.get(`${API_URL}/notes`)

  return {
    type: FETCH_POSTS,
    payload: req
  }
}

export function addTodo(title, text, image) {
  return { 
    type: ADD_TODO,
    title,
    text,
    image
  };
}