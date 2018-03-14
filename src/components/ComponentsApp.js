import React, { Component } from 'react';

import Card from './Card';
import Avatar from './Avatar';

class ComponentsApp extends Component {


  render() {
    return (
      <div>
        <h2 style={{color: 'black'}}>Components</h2>
        <h3>Card</h3>
        <Card avatar='../../assets/veg.jpeg' detail='This is the detail' title='test card' background='#999'/>
        <h3>avatar</h3>
        <Avatar user='../../assets/sam.jpg'/ >

      </div>
    )
  }
}
export default ComponentsApp
