import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './style.css'


const renderField = (field) => (
    <div>
      <input
        {...field.input}
        type="email"
        placeholder='email'
        className='auth-form-input'
        />


    </div>
  )


let SignInForm = props => {

  const { handleSubmit } = props;


  return (
    <form onSubmit={handleSubmit} className='auth-form'>
      <div className='auth-form-section'>
        <Field name='email' placeholder='email' component={renderField} />
      </div>
      <div className='auth-form-section'>
        <Field name='password' placeholder='password' component='input' type='password' className='auth-form-input'/>
      </div>
      <button type='submit' className='btn-sign-in'>sign in</button>
    </form>
  );
}

SignInForm = reduxForm({
  form: 'sign-in'
})(SignInForm);

export default SignInForm;
