import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

import '../stylesheet/style.css'

class App extends Component {
    
    handleAddTodo = (title, text, image) => {
        const { dispatch } = this.props;
        dispatch(addTodo(title, text, image))
    }

    render() {
        return (
            <div>
                <AddTodo
                    onAddClick={this.handleAddTodo}
                />
                
                <TodoList
                    todos={this.props.allTodos}
                />
            </div>
        );
    }
}

function select(state) {
  return {
    allTodos: state.todos
  };
}

export default connect(select)(App);