import React, { Component } from 'react';

class SkillCard extends Component {

  renderStyle() {
    const { style, xPos, yPos } = this.props;

    if (!style) {
      return {backgroundColor: '#fff'}
    }
    const duration = String(xPos + yPos)
    return {

      animationName: 'example',
      animationDuration: duration + 's'
    }
  }

  render() {
    const { skillName } = this.props.skill;
    console.log(this.props)
    // const { skillName } = this.props.data;
    return (
      <div className='skill-card' style={this.renderStyle()}>
        <h3>{ skillName }</h3>
        <div>
          <p>Inside div one</p>
        </div>
        <div>
          <p>Inside div two</p>
        </div>
        <img></img>
      </div>
    )
  }
}

export default SkillCard;
// .skill-card {
//   padding: 10px;
//   border-radius: 10%
//   background-color: red;
//   animation-name: example;
//   animation-duration: 4s;
// }
