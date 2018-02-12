import React, { Component } from 'react';
import { connect } from 'react-redux';

import TypewriterChar from '../TypewriterChar';


class Word extends Component {

  renderChars = () => {
    const chars =  this.props.content.split('');
    const mappedChars = chars.map((char, i) => {
      let style;

      if (this.props.new) {
        style =  {
            animationName: 'fadeIn',
            animationDuration: '1s',
            animationDelay: `${i / 20}s`,
            color: 'black',
            animationFillMode: 'both'
        }
      }

      return <TypewriterChar content={char} style={style} key={i}/>
    });

    return mappedChars;
  }

  render() {
    console.log('inside word render')
    return(
      <div className='word' style={{display: 'flex', flexDirection: 'row'}}>
        {this.renderChars()}
      </div>
    )
  }

}

export default Word;
