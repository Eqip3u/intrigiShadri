import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo, fetchPosts } from '../actions';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo'
import '../stylesheet/style.css'

class App extends Component {
    
    componentWillMount(){
        this.props.fetchPosts();
    }

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
                
                <ul>
                    {this.props.allTodos.map((note, index) => 
                        <Todo {...note} key = {index} />
                    )}
                </ul>
            </div>
        );
    }
}

function select(state) {
  return {
    allTodos: state.todos.all
  };
}

export default connect(select, { fetchPosts })(App);