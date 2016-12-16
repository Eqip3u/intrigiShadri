import {ADD_TODO} from '../constants/constants'

export function addTodo(date){
    return{
        type: ADD_TODO,
        playload: date
    }
}