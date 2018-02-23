import React, { Component } from 'react';

class Pupil extends Component {

  render() {
    const { pos } = this.props;


    return (
      <ellipse
        className="pupil"
        cx={pos.x}
        cy={pos.y}
        rx="3"
        ry="3"
        stroke="black"
        fill="black"/>
    )
  }
}

export default Pupil;
