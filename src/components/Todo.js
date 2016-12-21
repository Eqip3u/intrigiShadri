import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {

  onDeleteClick() {
    this.props.deletePost(this.props._id)
  }

  render() {
    return (
        <li>
          <p>Тайтл заметки: {this.props.title}</p>
          <p>Текст : {this.props.text}</p>
          <img src={this.props.img} />
          <button className='btn btn-danger pull-xs-right' onClick={this.onDeleteClick.bind(this)}>
            Удалить
          </button>
          <br />
        </li>
    );
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};