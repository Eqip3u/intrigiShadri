import React, {Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='inputText' placeholder='Введите текст заметки' />
        <input type='text' ref='inputTitle' placeholder='Введите текст тайтла' />
        <input type='text' ref='inputImage' placeholder='Ссылка на картинку' />
        <button onClick={e => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }

  handleClick() {
    const textNote = this.refs.inputText;
    const textTitle = this.refs.inputTitle;
    const textImage = this.refs.inputImage;

    const text = textNote.value.trim();
    const title = textTitle.value.trim();
    const image = textImage.value.trim();

    this.props.onAddClick(title, text, image);

    textNote.value = '';
    textTitle.value = '';
    textImage.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};