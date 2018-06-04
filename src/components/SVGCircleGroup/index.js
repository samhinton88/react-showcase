import React, { Component } from 'react';
import style from './style.css';

class SVGCircleGroup extends Component {

  renderCircles = () => {
    const { size = 400, discs = 5, timer, colour: { r, g, b, a=0.2 } } = this.props;
    const pos = [size / 2, size / 2];

    const discStore = [];

    for (let i=0;i<discs;i++) {
      const multiplier = (discs / (i + 1)) / (discs / i) + 1;

      const radius = timer ? (timer * multiplier) : (size / 20) * (i + 1) + size / 4;

      discStore
        .push(
          <circle
            style={
              {
                animationName: 'squeeze-ripple',
                animationDelay: `${i/8}s`,
                animationDuration: '0.2s',
                transformOrigin: '50% 50%'
              }
            }
            key={i}
            cx={pos[0]}
            cy={pos[1]}
            r={radius}
            fill={`rgba(${r + (i * i) }, ${g + (i * i)}, ${b + (i * i)}, ${a})`}
          />
          )
    }

    return discStore
  }


  render() {
    const {
      timer,
      canvasPos,
      colour: { r, g, b},
      small,
      size = 400
    } = this.props;



    return(
      <div
        style={
          {
            width: size ,

            borderRadius: '50%',
            backgroundColor: 'transparent',
            // position: 'absolute',
            // top: canvasPos[0],
            // left: canvasPos[1]
          }
        }>
        <svg width={size} height={size} >
              {this.renderCircles()}
              {this.props.children}
        </svg>
      </div>
    )
  }
}

export default SVGCircleGroup;
