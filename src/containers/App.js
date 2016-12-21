import React, {Component} from 'react'
import { fetchPosts, createPost, deletePost } from '../actions';
import {connect} from 'react-redux'
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList'
import '../stylesheet/style.css'

class App extends Component {
    
    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <AddTodo
                    createPost={this.props.createPost}
                />
                
                <TodoList 
                    listTodo = {this.props.allTodos}
                    deletePost = {this.props.deletePost}
                />

            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    allTodos: state.todos.all
  };
}

export default connect(mapStateToProps, { fetchPosts, createPost, deletePost })(App)