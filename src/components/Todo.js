import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {

  onDeleteClick() {
    this.props.deletePost(this.props._id);
    this.props.fetchPosts();
  }
  
  render() {
    return (

          <div className='col-xs-4 span3 grey  ' >
             <p className='center'>{this.props.title}</p>
             <div>
                <p className='text-xs-left'>{this.props.text}</p>
                <img src={this.props.img} className='img-fluid image-element-class'/>
             </div>
          </div>

    );
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};