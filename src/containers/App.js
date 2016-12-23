import React, {Component} from 'react'
import { 
    fetchPosts, fetchPostsSuccess, fetchPostsFailure,
    createPost, createPostSuccess, createPostFailure,
    deletePost, deletePostSuccess, deletePostFailure
} from '../actions';
import {connect} from 'react-redux'
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import '../stylesheet/style.css'

class App extends Component {

    render() {
        return (
            <div>

                <AddTodo
                    createPost={this.props.createPost}
                    fetchPosts = {this.props.fetchPosts}
                    newPost = {this.props.newPost}
                />
                
                <TodoList 
                    postsList = {this.props.postsList}
                    deletePost = {this.props.deletePost}
                    fetchPosts = {this.props.fetchPosts}
                />
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    postsList: state.todos.postsList,
    newPost: state.todos.newPost,
    deletedPost: state.todos.deletedPost
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => {
            dispatch(fetchPosts()).then((response) => {
                !response.error ? dispatch(fetchPostsSuccess(response.payload.data)) : dispatch(fetchPostsFailure(response.payload.data));
            })
        },
        createPost: (value) => {
            dispatch(createPost(value)).then((result) => {
                if(result.payload.response && result.payload.response.status !== 200) {
                    dispatch(createPostFailure(result.payload.response.data))
                }
                dispatch(createPostSuccess(result.payload.data));
            })
        },
        deletePost: (id) => {
            dispatch(deletePost(id)).then((response) => {
                !response.error ? dispatch(deletePostSuccess(response.payload)) : dispatch(deletePostFailure(response.payload));
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)