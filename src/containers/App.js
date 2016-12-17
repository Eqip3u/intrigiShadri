import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo, VisibilityFilters } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

import '../stylesheet/style.css'

class App extends Component {
    render() {
        const { dispatch, visibleTodos } = this.props;

        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                        dispatch(addTodo(text))
                    }
                />
                
                <TodoList
                    todos={visibleTodos}
                />
            </div>
        );
    }
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
        return todos;
  }
}

// Какие именно props мы хотим получить из приходящего, как аргумент глобального состояния?
// Обратите внимание: используйте https://github.com/faassen/reselect для более лучшей производительности.
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

// Оборачиваем компонент `App` для внедрения  в него функции `dispatch` и состояния
export default connect(select)(App);