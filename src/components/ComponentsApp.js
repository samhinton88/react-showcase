import React, { Component } from 'react';

import Card from './Card';
import Avatar from './Avatar';
import Banner from './Banner';

class ComponentsApp extends Component {



  render() {
    const grad = `repeating-linear-gradient(45deg, transparent, transparent 5px,
        rgba(143, 77, 63, 0.25) 5px, rgba(143, 77, 63, 0.25) 10px),
        radial-gradient(circle at 50% 0,
        rgba(255,0,0,.5),
        rgba(255,0,0,0) 70.71%),
      radial-gradient(circle at 6.7% 75%,
        rgba(0,0,255,.5),
        rgba(0,0,255,0) 70.71%),
      radial-gradient(circle at 93.3% 75%,
        rgba(0,255,0,.5),
        rgba(0,255,0,0) 70.71%) beige`
    return (
      <div>

        <h2 style={{color: 'black'}}>Components</h2>
        <h3>Banner</h3>
        <Banner background='../../assets/veg-big.jpeg'/>
        <h3>Card</h3>
        <Card avatar='../../assets/veg.jpeg' detail='This is the detail' title='test card' background={grad}/>
        <h3>avatar</h3>
        <Avatar user='../../assets/sam.jpg'/>

      </div>
    )
  }
}
export default ComponentsApp
