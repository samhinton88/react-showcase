import React, { Component } from 'react';

class Card extends Component {


  render() {
    const { title, background, detail, avatar } = this.props;

    return (
      <div className='card' style={{background}}>
        <div className='card-category'>{title}</div>
        <div className='card-description'>{detail}</div>
        <img className='card-user' src={avatar} />
      </div>
    )
  }
}

export default Card;
