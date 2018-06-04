import React, { Component } from 'react';

class Card extends Component {


  render() {
    const { title, background, detail, avatar } = this.props;
    const backgroundWithImage = `${background} url("../../../assets/veg.jpeg")`

    return (
      <div className='card' style={{background: background}}>
        <div className='card-category'>{title}</div>
        <div className='card-description'>{detail}</div>
        <img className='card-user' src={avatar} />
      </div>
    )
  }
}

export default Card;
