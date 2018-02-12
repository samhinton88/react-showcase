import React, { Component } from 'react';

class Bulb extends Component {

  render() {
    const {lit, gridPos} = this.props
    const backgroundColor = lit ? 'red' : 'white'

    const style = {
      gridArea: gridPos,
      backgroundColor: backgroundColor
    }
    console.log(style)

    return (
      <div className='bulb' style={style}>
        {gridPos}
      </div>
    )
  }
}

export default Bulb;
