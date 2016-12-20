import axios from 'axios'

//intrigishadri.herokuapp.com
//localhost:8080/api
const API_URL = 'intrigishadri.herokuapp.com';


/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const FETCH_POSTS = 'FETCH_POSTS';

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