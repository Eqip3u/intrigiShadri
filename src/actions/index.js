import axios from 'axios'

/*
 * api
 * //intrigishadri.herokuapp.com/api
 * //localhost:8080/api
 */

const API_URL = '//intrigishadri.herokuapp.com/api';

/*
 * action types
 */

export const CREATE_POST = 'CREATE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const DELETE_POST = 'DELETE_POST';

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

export function createPost(props) {

  const req = axios.post(`${API_URL}/notes`, props)

  return {
    type: CREATE_POST,
    payload: req
  }
}

export function deletePost (id) {
  const req = axios.delete(`${API_URL}/notes/${id}`)

  return {
    type: DELETE_POST,
    payload: req
  }
}