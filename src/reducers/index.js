import { combineReducers } from 'redux'
import { ADD_TODO, VisibilityFilters } from '../actions/index'

const { SHOW_ALL } = VisibilityFilters;

const initialState = [
    {
        title: 'Название первой заметки по дефолту',
        text: 'Текст первой заметки',
        image: 'Ссылка на картинку(1 заметка)'
    },
    {
        title: 'Название второй заметки по дефолту',
        text: 'Текст второй заметки',
        image: 'Ссылка на картинку(2 заметка)'
    }
]

function viewAllTodos(state = SHOW_ALL) {
    return state
}


function todos(state = initialState, action) {

  switch (action.type) {

    case ADD_TODO:
        return [...state, {
            title: action.title,
            text: action.text,
            image: action.image
        }];

    default:
        return state;
  }
}

const todoApp = combineReducers({
    viewAllTodos,
    todos
})

export default todoApp;