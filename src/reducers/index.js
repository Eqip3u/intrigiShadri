import { combineReducers } from 'redux'
import { ADD_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/index'

const { SHOW_ALL } = VisibilityFilters;

const initialState = [
    {
        text: 'asdsaddsa'
    },
    {
        text: 'vtoraya'
    }
]

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter

        default:
            return state
    }
}


function todos(state = initialState, action) {

  switch (action.type) {

    case ADD_TODO:
        return [...state, {
            text: action.text
        }];

    default:
        return state;
  }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;