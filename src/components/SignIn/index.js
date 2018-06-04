import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';
import Style from './style.css';

import * as actions from '../../actions';
console.log(actions)


class SignIn extends Component {


  handleSignupFormSubmit = ({email, password}) => {
    // need to do something to log user in
    console.log('in handleSubmit')
    console.log(email, password)
    console.log(this.props)
    this.props.signupUser({email, password});
  }

  handleSigninFormSubmit = ({email, password}) => {
    // need to do something to log user in
    console.log('in handleSubmit')
    console.log(email, password)
    console.log(this.props)
    this.props.signinUser({email, password});
  }

  render() {


    return (
      <div className='sign-in-container'>
        <div className='sign-in'>
        <button className='close-btn'>✖</button>
          <h2 className='sign-in-welcome-header'>{"\uD83D\uDE34"}</h2>
          <SignInForm onSubmit={this.handleSigninFormSubmit}/>

        </div>

      </div>
   )
  }
}

function mapStateToProps(state) {

  return { errorMessage: state.auth.error };
}
// new version of redux from also requires the use of connect
export default connect(mapStateToProps, actions)(SignIn);
