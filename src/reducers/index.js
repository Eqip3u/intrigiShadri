import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { 
    FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE,
    CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE
 } from '../actions/index'

const initialState = {
    postsList: { 
        posts: [], 
        error: null,
        loading: false
    }
}

function todos(state = initialState, action) {
  let error;
  switch (action.type) {


    case FETCH_POSTS:
        return { ...state, postsList: {posts: [], error: null, loading: true } }
    case FETCH_POSTS_SUCCESS:
        return { ...state, postsList: {posts: action.payload, error: null, loading: false } }       
    case FETCH_POSTS_FAILURE:
        error = action.payload || {message: action.payload.message}
        return { ...state, postsList: {posts: [], error: error, loading: false } }
    

    case CREATE_POST:
        return { ...state, newPost: {...state.newPost, loading: true}}
    case CREATE_POST_SUCCESS:
        return { ...state, newPost: {post: action.payload, error:null, loading: false}}
    case CREATE_POST_FAILURE:
        error = action.payload || {message: action.payload.message}
        return { ...state, newPost: {post: null, error: null, loading: false}}
    

    default:
        return state;
  }
}

const todoApp = combineReducers({
    todos,
    form: formReducer
})

export default todoApp;