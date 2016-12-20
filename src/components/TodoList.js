import React, { Component} from 'react'
import Todo from './Todo'

export default class TodoList extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        const todoList = this.props.todos;

        return (          
            <ul>
                {todoList.map((todo, index) => 
                    <Todo {...todo} key = {index} />
                    )}
            </ul>
        );
    }
}