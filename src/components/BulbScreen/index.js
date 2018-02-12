// Grid to display messages through animated divs
import React, { Component } from 'react';

import Bulb from '../Bulb';
import {A, S, square, line} from './map_helper'

class BulbScreen extends Component {
  state = {
    char: square,
  }

  renderBulbMap(mode = false) {
    const gridWidth = 9;



    const {char} = this.state;
    const stringMap = char.map((coord) => {
      const [x,y] = coord
      return `${x}${y}`
    })

    let map = [];

    for (let i = 0; i < 81; i ++) {
      const xPos = i % gridWidth;
      const yPos = Math.floor(i / gridWidth );

      const gridPos = String(xPos) + String(yPos)


      const lit = stringMap.includes(gridPos) ? true : false;


      map.push(<Bulb gridPos={'pos' + gridPos} lit={lit} key={gridPos} mode={mode}/>)

    }



    return map;

  }

  render() {

    return (
      <div className='bulb-screen'>
        {this.renderBulbMap(true)}
      </div>
    )
  }
}

export default BulbScreen;
