import React, { Component} from 'react'
import Todo from './Todo'
import Masonry from 'react-masonry-component'

export default class TodoList extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        const { posts, loading, error } = this.props.postsList

        posts.reverse()

        if(loading){
            return <div className='container row-fluid'><h1>posts</h1><h3>Loading...</h3></div>
        } else if(error){
            return <div>Error: {error.message}</div>
        }

        const masonryOptions = {
            transitionDuration: 0
        };

        return (
            <div>
                <Masonry
                    className={'my-gallery-class'} // default ''
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    {posts.map((todo, index) => 
                        <Todo 
                            {...todo} 
                            deletePost = {this.props.deletePost}  
                            key = {index}
                            fetchPosts = {this.props.fetchPosts}
                        />
                    )}

                </Masonry>
            </div>
        );
    }
}
