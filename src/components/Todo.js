import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    return (
        <li>
          <p>Тайтл заметки: {this.props.title}</p>
          <p>Текст : {this.props.text}</p>
          <p>Картинка: {this.props.image}</p>
          <br />
        </li>
    );
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};