import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

import '../stylesheet/style.css'

class App extends Component {
    render() {
        const { dispatch, visibleTodos } = this.props;

        return (
            <div>
                <AddTodo
                    onAddClick={(title, text, image) =>
                        dispatch(addTodo(title, text, image))
                    }
                />
                
                <TodoList
                    todos={visibleTodos}
                />
            </div>
        );
    }
}

function select(state) {
  return {
    visibleTodos: state.todos
  };
}

export default connect(select)(App);