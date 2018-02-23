
import React, { Component } from 'react';

class ReactEye extends Component {
  state = {
    pupilPosX: 50,
    pupilPosY: 50,
    awake: true,
    wakingUp: true,
    watching: false,
    lidHozPos: { x: 50, y: 50 },
    lidLeftPos: { x: 50, y: 50 },
    lidRightPos: { x: 50, y: 50 }

  }

  onMouseMove = (e) => {
    if (this.state.watching) {
      const {left, top} = this.props.loc;

      const { clientX, clientY } = e;
      const { pupilPosX, pupilPosY } = this.state;
      const gposX = (clientX - left) / 4.3,
            gposY = (clientY - top) / 4.3
      const glanceDistanceX = (gposX - 50) / 13
      const glanceDistanceY = (gposY - 50) / 13
      const glanceX = 50 + glanceDistanceX
      const glanceY = 50 + glanceDistanceY
      this.setState({ pupilPosX: glanceX, pupilPosY: glanceY })
    };

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
      pupilPosX,
      pupilPosY,
      lidHozPos,
      lidLeftPos,
      lidRightPos
    } = this.state;

    if (this.state.wakingUp) {
      const style2 = {animationName: 'wake-one', animationDuration: '2s',animationFillMode: 'forwards'};
      const style1 = {animationName: 'wake-two', animationDuration: '2s',animationFillMode: 'forwards'};
      const styleMiddle = {animationName: 'wake-middle', animationDuration: '5s', animationFillMode: 'both'};




      return(
        <svg viewBox="0 0 100 100">
          <circle className='react-pupil' cx={pupilPosX} cy={pupilPosY} r="3" fill="black"/>
          <ellipse className="wake-middle" style={style1}cx={lidHozPos.x} cy={lidHozPos.y} rx="20" ry="7" stroke="black" fill="none"/>
          <ellipse className="wake-one" style={style2}cx={lidLeftPos.x} cy={lidLeftPos.y} rx="20" ry="7" stroke="black" fill="none"/>
          <ellipse className="wake-two" style={styleMiddle} cx={lidRightPos.x} cy={lidRightPos.y} rx="20" ry="7" stroke="black" fill="black"/>
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
          <circle className='react-pupil' cx={pupilPosX} cy={pupilPosY} r="3" fill="black"/>
          <ellipse className="one" cx="50" cy="50" rx="20" ry="7" stroke="black" fill="none"/>
          <ellipse className="two" cx="50" cy="50" rx="20" ry="7" stroke="black" fill="none"/>
          <ellipse className="three" cx="50" cy="50" rx="20" ry="7" stroke="black" fill="none"/>
        </svg>
      )
  }

  render() {


    return (
      <div ref={this.props.inputRef}>
        <button onClick={this.wakeUp}>wake</button>
        <button onClick={this.watchToggle}>toggle watching</button>

        <div className="react-eye" onMouseMove={this.onMouseMove}>
          {this.renderEye()}
        </div>
      </div>
    );
  }
}

export default ReactEye;

