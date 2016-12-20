import React, { Component} from 'react'
import Todo from './Todo'

export default class TodoList extends Component {

    render() {        
        return (          
            <ul>
                {this.props.listTodo.map((todo, index) => 
                    <Todo {...todo} key = {index} />
                    )}
            </ul>
        );
    }
}