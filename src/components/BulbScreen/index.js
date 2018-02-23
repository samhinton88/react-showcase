// Grid to display messages through animated divs
import React, { Component } from 'react';
import makeGrid from '../../helpers/grid_generation_helper';

import Bulb from '../Bulb';
import {A, S, square, line, T, test, C} from './map_helper'

class BulbScreen extends Component {
  state = {
    char: test,
    seq: [S, A],
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

  renderBulbMap(data, mode = false) {
    const {char} = this.state;
    const {map, positions} = data;

    const stringMap = char.map((pos) => {
      return `${pos[0]}${pos[1]}`
    })


    const bulbMap = positions.map((pos) => {
      const lit = stringMap.includes(pos) ? true : false;

      return (
        <Bulb
          gridPos={'pos' + pos}
          lit={lit}
          key={`${pos}${this.state.index}`}
          mode={mode}
        />

      )
    })

    return bulbMap;

  }

  render() {
    const { size } = this.props;
    const { template, map, positions } = makeGrid(size);

    const style = {
      color: 'black',
      animation: 'fadeIn',
      display: 'grid',
      gridGap: '0px 0px',
      animationDuration: '0.5s',
      gridTemplateColumns: `repeat(${size}, 1fr)`,
      gridTemplateRows: `repeat(${size}, 1fr)`,
      gridTemplateAreas: template
    }

    return (
      <div className='bulb-screen' style={style}>
        {this.renderBulbMap({map, positions}, false)}
      </div>
    )
  }
}

export default BulbScreen;
