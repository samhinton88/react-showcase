// Grid to display messages through animated divs
import React, { Component } from 'react';

import Bulb from '../Bulb';
import {A, S, square, line, T, test, C} from './map_helper'

class BulbScreen extends Component {
  state = {
    char: S,
    seq: [A,T,S],
    index: 0,

  }

  componentDidMount() {

    this.timer = setInterval(() => {
      if (!this.state.seq[this.state.index]) {
        clearInterval(this.timer)
        return
      }

      this.setState(
        {
          char: this.state.seq[this.state.index],
          index: this.state.index + 1
        }
      )
    },
    4000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
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
      const backgroundColor = lit ? 'blue' : 'white'

      map.push(
        <Bulb
          gridPos={'pos' + gridPos}
          lit={lit}
          key={`${gridPos}${this.state.index}`}
          mode={mode}
        />
      )

    }

    return map;

  }

  render() {


    return (
      <div className='bulb-screen' >
        {this.renderBulbMap(false)}
      </div>
    )
  }
}

export default BulbScreen;
