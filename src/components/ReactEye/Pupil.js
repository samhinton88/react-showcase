import React, { Component } from 'react';

class Pupil extends Component {

  render() {

    const { geometry: { cx, cy, rx, ry } } = this.props;


    return (
      <ellipse
        className="pupil"
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        stroke="black"
        fill="black"/>
    )
  }
}

export default Pupil;
