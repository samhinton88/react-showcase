import React, { Component } from 'react';

import Pupil from './Pupil';
import Lid from './Lid';
import helpers from '../../helpers/react_eye_helpers';


class ReactEye extends Component {
  state = {
    anchorPosition: { x: 50, y: 50},
    awake: true,
    wakingUp: false,
    watching: false,
    wandering: true,
    pupilData: { cx: 50, cy: 50, rx: 3, ry: 3 },
    lidMidData: { cx: 50, cy: 50, rx: 20, ry: 7 },
    lidLeftData: { cx: 50, cy: 50, rx: 20, ry: 7 },
    lidRightData: { cx: 50, cy: 50, rx: 20, ry: 7 },

  }

  track = helpers.track;
  stepTowards = helpers.stepTowards;
  journeyTowards = helpers.journeyTowards;

  componentDidMount() {
    if (this.props.wandering) {
      const wanderTimer = setInterval(
        () => {
          this.journeyTowards({
            x: Math.floor(Math.random() * 100 + 1),
            y: Math.floor(Math.random() * 100 + 1)
          })
        }, 5000
      );
    }
  }

  componentWillUnmount() {
    clearTimeout(this.wanderTimer);
  }

  onMouseMove = (e) => {
    if (this.props.watching) {
      const { clientX, clientY } = e;
      const { left, top, height, width } = this.props.loc;

      const {
        pupilData,
        lidRightData,
        lidMidData,
        lidLeftData
      } = this.state;


      const gposX = 100 * (clientX - left) / (width) ,
            gposY = 100 * (clientY - top) / (height);

      this.track({ x: gposX, y: gposY });
    }
  }


  wakeUp = () => {
    this.setState({ wakingUp: true, awake: true })
  }

  watchToggle = () => {
    const { watching } = this.state;

    this.setState({ watching: !watching })

  }

  renderEye() {
    const {
      pupilData,
      lidMidData,
      lidLeftData,
      lidRightData
    } = this.state;

    const { stroke } = this.props

    if (this.state.wakingUp) {
      const styleDataLeft = {
        style: { animationName: 'wake-two', animationDuration: '2s', animationFillMode: 'forwards' },
        stroke: "black",
        fill: "none"
      };

      const styleDataRight = {
        style: { animationName: 'wake-one', animationDuration: '2s', animationFillMode: 'forwards' },
        stroke: "black",
        fill: "none"
      };

      const styleDataMid = {
        style: { animationName: 'wake-middle', animationDuration: '2s', animationFillMode: 'forwards' },
        stroke: "black",
        fill: "black"
      };

      return(
        <svg viewBox="0 0 100 100">
          <Pupil
            geometry={pupilData}
            stroke={stroke}
          />
          <Lid
            geometry={lidRightData}
            styledata={styleDataRight}
          />
          <Lid
            geometry={lidMidData}
            styledata={styleDataMid}
          />
          <Lid
            geometry={lidLeftData}
            styledata={styleDataLeft}
          />
        </svg>
      )
    }

    if (!this.state.awake) {
      return (
        <svg viewBox="0 0 100 100">
          <ellipse cx="50" cy="50" rx="20" ry="7" stroke={stroke} fill="black"/>
        </svg>
      )
    }

    return (
      <svg viewBox="0 0 100 100" style={{zIndex: 9}}>
          <Pupil
            geometry={pupilData}
            stroke={stroke}
          />
          <Lid
            className="one"
            geometry={lidRightData}
            styledata={{fill: 'none', stroke, style: null}}/>
          <Lid
            geometry={lidMidData}
            styledata={{fill: 'none', stroke, style: null}}/>
          <Lid
            className="two"
            geometry={lidLeftData}
            styledata={{fill: 'none', stroke, style: null}}/>
        </svg>
      )
  }

  render() {
    return (
      <div >
        <div  ref={this.props.inputRef} className="react-eye" onMouseMove={this.onMouseMove}>
          {this.renderEye()}
        </div>
      </div>
    );
  }
}

       // {<button onClick={this.wakeUp}>wake</button>
       // }<button onClick={this.watchToggle}>toggle watching</button>
export default ReactEye;
