import React, { Component } from 'react';
import SVGCircleGroup from '../SVGCircleGroup';
import style from './style.css';
import ReactEye from '../ReactEye';
import SignIn from '../SignIn';
import SignInForm from '../SignInForm';

class ShowcaseFront extends Component {


  render() {
    const { displayMode } = this.props;


    return (
      <div className='showcase-front'>
        <div className='showcase-entry-section'>
          <SVGCircleGroup colour={{r:38, g:37, b:109,a:0.6}} pos={[200,200]} discs={5} >

          </SVGCircleGroup>
          <div className='react-eye-container'>
            <ReactEye stroke='white' wandering/>
          </div>
          {/*<SignIn />*/}
          <SignInForm />
        </div>
      </div>
    )
  }
}

export default ShowcaseFront
