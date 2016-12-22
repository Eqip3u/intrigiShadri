import React, {Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {}

  if(!values.title) {
    errors.title = 'Заполни тайтл пидор'
  }

  if(!values.text) {
    errors.text = 'Напиши текст пидор'
  }

  if(!values.img) {
    errors.img = 'Вставь картинку пидор'
  }

  return errors
}

const warn = values => {
  const warnings = {}

  if(values.title === '') {
    warnings.title = 'zapolni epta...'
  }
  
  return warnings
}

const renderField = ({ input, label, type, meta: {touched, error, invalid, warning}}) => (
  <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
    <label>{label}</label>

    <input {...input} className={`form-control ${touched && invalid ? 'form-control-danger' : ''}`} placeholder={label} type={type}/>

    <div className='form-control-feedback'>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>

  </div>
)

class AddTodo extends Component {

  onSubmit(props) {
    this.props.createPost(props);
    this.props.fetchPosts();
  }

  render() {
    const { handleSubmit, submitting } = this.props;
  
    return (
      <div className='formSubmit'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <h1>Add post</h1>

          <Field name='title' type='text' component={renderField} label='Title' />

          <Field name='text' type='text' component={renderField} label='Text' />

          <Field name='img' type='text' component={renderField} label='Img' />

          <button className='btn btn-primary' type='submit' disabled={submitting}>Send</button>

        </form>
      </div>
    );
  }

}

export default reduxForm({
  form: 'PostsNewForm',
  validate,
  warn
})( AddTodo );