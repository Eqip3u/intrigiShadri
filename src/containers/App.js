import React, {Component} from 'react'
import { 
    fetchPosts, fetchPostsSuccess, fetchPostsFailure,
    createPost, createPostSuccess, createPostFailure,
    deletePost
} from '../actions';
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
                    postsList = {this.props.postsList}
                    deletePost = {this.props.deletePost}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    postsList: state.todos.postsList,
    newPost: state.todos.newPost
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
        deletePost
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)