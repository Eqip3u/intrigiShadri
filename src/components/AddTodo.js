import React, {Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index'

class AddTodo extends Component {

  onSubmit(props) {
    this.props.createPost(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Добавить новый пост</h3>

          <div className='form-group'>
            <label>Название поста</label>
            <Field name='title' component='input' type='text' />
          </div>

          <div className='form-group'>
            <label>Текст картинки</label>
            <Field name='text' component='input' type='text' />
          </div>

          <div className='form-group'>
            <label>URL картинки</label>
            <Field name='img' component='input' type='text' />
          </div>

          <button className='btn btn-primary' type='submit'>Отправить</button>
        </form>
      </div>
    );
  }

}

export default reduxForm({
  form: 'PostsNewForm',
}, null, { createPost } )( AddTodo );