import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li>
        {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};