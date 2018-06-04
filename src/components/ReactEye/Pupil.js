import React, { Component } from 'react';

class Pupil extends Component {

  render() {

    const { geometry: { cx, cy, rx, ry }, stroke } = this.props;



    return (
      <ellipse
        className="pupil"
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        stroke={stroke}
        fill={stroke}/>
    )
  }
}

export default Pupil;
