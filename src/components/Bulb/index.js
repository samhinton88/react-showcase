import React, { Component } from 'react';

class Bulb extends Component {

  render() {
    const {lit, gridPos} = this.props
    const backgroundColor = lit ? 'red' : 'white'

    const style = {
      gridArea: gridPos,
      backgroundColor: backgroundColor
    }

    return (
      <div className='bulb' style={style}>
        {this.props.mode ? gridPos : null}
      </div>
    )
  }
}

export default Bulb;
