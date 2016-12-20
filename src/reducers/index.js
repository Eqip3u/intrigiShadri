import { combineReducers } from 'redux'
import { FETCH_POSTS } from '../actions/index'

const initialState = {
    all: [],
    post: null
}


function todos(state = initialState, action) {

  switch (action.type) {

    case FETCH_POSTS:
        return { ...state, all: action.payload.data}

    default:
        return state;
  }
}

const todoApp = combineReducers({
    todos
})

export default todoApp;