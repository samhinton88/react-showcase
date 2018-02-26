import React, { Component } from 'react';

import Pupil from './Pupil';
import Lid from './Lid';



class ReactEye extends Component {
  state = {
    pupilPosX: 50,
    pupilPosY: 50,
    awake: true,
    wakingUp: false,
    watching: true,
    wandering: true,
    lidMidData: { cx: 50, cy: 50, rx: 20, ry: 7 },
    lidLeftData: { cx: 50, cy: 50, rx: 20, ry: 7 },
    lidRightData: { cx: 50, cy: 50, rx: 20, ry: 7 },
  }

  stepTowards(pos) {
  }




  onMouseMove = (e) => {
    if (this.state.watching) {
      const { left, top, right, bottom, height, width } = this.props.loc;

      const { clientX, clientY } = e;
      const {
        pupilPosX,
        pupilPosY,
        lidRightData,
        lidMidData,
        lidLeftData
      } = this.state;


      const gposX = 100 * (clientX) / (width) ,
            gposY = 100 * (clientY - top) / (height);

      console.log("gposx and y ", gposX, gposY)
      console.log("clientX clientY", clientX, clientY)
      console.log("left right", left, right)



      const glanceDistanceX = (gposX - 50) / 6
      const glanceDistanceY = (gposY - 50) / 16
      const glanceX = 50 + glanceDistanceX
      const glanceY = 50 + glanceDistanceY
      console.log("width height",width, height)
      console.log("glances",glanceDistanceX, glanceDistanceY)

      const strainX = (gposX - 50) / 18;
      const strainY = (gposY - 50) / 18;

      lidLeftData.cy = 50 + strainX;
      lidRightData.cy = 50 - strainX;
      lidLeftData.cx = 50 - strainY;
      lidRightData.cx = 50 + strainY;

      this.setState({
        pupilPosX: glanceX,
        pupilPosY: glanceY,
        lidRightData,
        lidLeftData })
    };

  }


  wakeUp = () => {
    this.setState({ wakingUp: true, awake: true })
  }

  watchToggle = () => {
    const { watching } = this.state;

    this.setState({ watching: !watching })
  }

  wanderToggle = () => {
    let wandering = true;

    while(wandering) {
      const point = {
        x: Math.floor(Math.random() * 100 + 1),
        y: Math.floor(Math.random() * 100 + 1)
      };

      const pupilTerminusX = 50 + (point.x - 50) / 10;
      const pupilTerminusY = 50 + (point.y - 50) / 16;
      const strainTerminusX = 50 + (point.x - 50) / 18;
      const strainTerminusY = 50 + (point.y - 50) /18;

      this.stepTo(point);

    }

    this.setState({ wandering: !wandering })

  }

  renderEye() {
    const {
      pupilPosX,
      pupilPosY,
      lidMidData,
      lidLeftData,
      lidRightData
    } = this.state;

    if (this.state.wakingUp) {
      const styleDataRight = {
        style: { animationName: 'wake-two', animationDuration: '2s', animationFillMode: 'forwards' },
        stroke: "black",
        fill: "none"
      };

      const styleDataLeft = {
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
            pos={{x: pupilPosX, y: pupilPosY}}
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
          <ellipse cx="50" cy="50" rx="20" ry="7" stroke="black" fill="black"/>

        </svg>
      )
    }

    return (
      <svg viewBox="0 0 100 100">
          <Pupil
            pos={{x: pupilPosX, y: pupilPosY}}
          />
          <Lid
            className="one"
            geometry={lidRightData}
            styledata={{fill: 'none', stroke: 'black', style: null}}/>
          <Lid
            geometry={lidMidData}
            styledata={{fill: 'none', stroke: 'black', style: null}}/>
          <Lid
            className="two"
            geometry={lidLeftData}
            styledata={{fill: 'none', stroke: 'black', style: null}}/>
        </svg>
      )
  }

  render() {


    return (
      <div ref={this.props.inputRef}>
        <button onClick={this.wakeUp}>wake</button>
        <button onClick={this.watchToggle}>toggle watching</button>
        <button onClick={this.wanderToggle}>toggle wandering</button>

        <div className="react-eye" onMouseMove={this.onMouseMove}>
          {this.renderEye()}
        </div>
      </div>
    );
  }
}

export default ReactEye;
