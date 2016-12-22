import axios from 'axios'

/*
 * api
 * //intrigishadri.herokuapp.com/api
 * //localhost:8080/api
 */

const API_URL = '//localhost:8080/api';

/*
 * action types
 */

export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

/*
 * action creators
 */

export function fetchPosts() {

  const req = axios.get(`${API_URL}/notes`)

  return {
    type: FETCH_POSTS,
    payload: req
  }
}

export function fetchPostsSuccess(posts) {
  return{
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

export function fetchPostsFailure(error) {
  return{
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}

export function createPost(props) {

  const req = axios.post(`${API_URL}/notes`, props)

  return {
    type: CREATE_POST,
    payload: req
  }
}
export function createPostSuccess(newPost) {
  return {
    type: CREATE_POST_SUCCESS,
    payload: newPost
  }
}

export function createPostFailure(error) {
  return {
    type: CREATE_POST_FAILURE,
    payload: error
  }
}

export function deletePost (id) {
  const req = axios.delete(`${API_URL}/notes/${id}`)

  return {
    type: DELETE_POST,
    payload: req
  }
}

export function deletePostSuccess(deletedPost) {
  return {
    type: DELETE_POST_SUCCESS,
    payload: deletedPost
  }
}

export function deletePostFailure(error) {
  return {
    type: DELETE_POST_FAILURE,
    payload: error
  }
}