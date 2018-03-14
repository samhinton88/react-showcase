import React, { Component } from 'react';

import Card from './Card'

class ComponentsApp extends Component {


  render() {
    return (
      <div>
        <h2 style={{color: 'black'}}>Components</h2>
        <Card avatar='../../assets/veg.jpeg' detail='This is the detail' title='test card' background='#999'/>
      </div>
    )
  }
}
export default ComponentsApp
