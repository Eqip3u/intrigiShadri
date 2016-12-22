import React, { Component} from 'react'
import Todo from './Todo'

export default class TodoList extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        const { posts, loading, error } = this.props.postsList

        posts.reverse()

        if(loading){
            return <div className='container'><h1>posts</h1><h3>Loading...</h3></div>
        } else if(error){
            return <div>Error: {error.message}</div>
        }

        return (          
            <ul>
                {posts.map((todo, index) => 
                    <Todo 
                        {...todo} 
                        deletePost = {this.props.deletePost}  
                        key = {index}
                        fetchPosts = {this.props.fetchPosts}
                    />
                    )}
            </ul>
        );
    }
}