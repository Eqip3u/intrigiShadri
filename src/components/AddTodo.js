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
    errors.text = 'Напиши хоть что ни будь!'
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
       <div className='row'>
            <div className='col-xs-10'>
              <h1>Напиши сплетенку!</h1>
            </div>
            <div className='col-xs-2'>
              <img src='https://psv4.vk.me/c812732/u230868199/docs/c9aa4c3d044b/pisos.png?extra=cKAmQAf2iCpeIKEPtUtQI52Z0IPKS5gMwkBSNF6DfWhBxh_m3TiOfcXK2euhvofoFtve32ad7dtcM_jG4uGhNFD5zFZYS0Iz1QFdk4Axv5I9MyZYSMhLvgt6ig' height='100' width='120' alt='писос'/>
            </div>
          </div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className='row'>
            <div className='col-xs-8 col-md-8 col-lg-10 vcenter grey'> 
              <Field name='title' type='text' component={renderField} label='Имя'/>

              <Field name='img' type='text' component={renderField} label='Картинка' />
              <p> Отправь URL ссылку на картинку или гифку! <a href='https://support.google.com/websearch/answer/118238?hl=ru'>
                  HOW TO </a></p> 

              <Field name='text'  type='text' component={renderField} label='Текст' />
            </div>
            <div className='col-xs-4 col-md-4 col-lg-2 vcenter '> 
              <div className='top'>
                <button onClick={() => this.setState({ show: true })} className='btn btn-outline-primary btn-lg' type='submit' disabled={submitting || pristine}>Отправить!</button>
                
              </div>
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