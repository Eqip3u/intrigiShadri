import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    return (
        <li>
          <p>Тайтл заметки: {this.props.title}</p>
          <p>Текст : {this.props.text}</p>
          <img src={this.props.img} />
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