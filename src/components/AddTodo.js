import React, {Component } from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {}

  if(!values.title) {
    values.title = 'Аноним'
  }

  if(!values.text) {
    errors.text = 'Напиши хоть что-нибудь!'
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
    <label className='form-control-label'>{label}</label>

    <input {...input} className={`form-control ${touched && invalid ? 'form-control-danger' : ''}`}  placeholder={label} type={type}/>

    <div className='form-control-feedback'>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>

  </div>
)

class AddTodo extends Component {
   constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  } 

  onSubmit(props) {
    this.props.createPost(props);
    this.props.fetchPosts();
  }

  

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
  
    return (
      <div className='formSubmit'>
      <SweetAlert
                  show={this.state.show}
                  type='success'
                  title='Отлично!'
                  text='Ваша сплетня опубликована!'
                  onConfirm={() => this.setState({ show: false })}
                />  
            <img className='img-fluid' src='http://rgho.st/8nfjV4PYS/image.png' />       

            <div className='col-xs-10'>
              <h1>Напиши сплетенку!</h1>

         </div> 
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className='row grey '>
            <div className='col-xs-7 col-md-7 col-lg-9 vcenter rounded form' > 
              <Field name='title' type='text' component={renderField} label='Имя'/>

              <Field name='img' type='text' component={renderField} label='Картинка' />
              <p> Отправь URL ссылку на картинку или гифку! <a href='https://support.google.com/websearch/answer/118238?hl=ru'>
                  HOW TO </a></p> 

              <Field name='text'  type='text' component={renderField} label='Текст' />
            </div>
            <div className='col-xs-12 col-md-12 col-lg-12 form'> 

                <button onClick={() => this.setState({ show: true })} className='btn btn-outline-primary btn-lg' type='submit' disabled={submitting || pristine}>Отправить!</button>
            </div>
            </div>

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