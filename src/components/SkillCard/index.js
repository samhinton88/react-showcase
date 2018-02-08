import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class SkillCard extends Component {
  state = {
    focus: false
  }

  renderStyle() {
    const { style, xPos, yPos, skill: { color } } = this.props;

    if (!style) {
      return {backgroundColor: '#fff'}
    }

    const dist = xPos + yPos;
    const duration = String((dist + 1 * (dist)) + 2 );
    return {
      animationName: 'skillWave',
      animationDuration: duration + 's',
      backgroundColor: color,
    }
  }

  handleClick = () => {
    this.props.setFocus(this.props.skill)
  }


  render() {
    const { skillName } = this.props.skill;
    console.log(this.props)

    return (
      <div className='skill-card' style={this.renderStyle()}>
        <a onClick={this.handleClick}><h3>{ skillName }</h3></a>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(null, actions)(SkillCard);
// .skill-card {
//   padding: 10px;
//   border-radius: 10%
//   background-color: red;
//   animation-name: example;
//   animation-duration: 4s;
// }
