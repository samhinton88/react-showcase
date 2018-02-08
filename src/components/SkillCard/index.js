import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class SkillCard extends Component {
  state = {
    shouldWiggle: false
  }

  componentDidMount() {
    if (this.props.skill.skillName === 'React') {
      this.wiggleTimer = setTimeout(() => {
        this.setState({shouldWiggle: true})
      },
      10000)

    }
  }

  componentWillUnmount() {
    if (this.wiggleTimer) {
      clearTimeout(this.wiggleTimer)
    }
  }

  renderStyle() {
    const { style, xPos, yPos, skill: { color } } = this.props;

    if (!style) {
      return {backgroundColor: '#fff'}
    }

    if (this.state.shouldWiggle) {
      return {
        animationName: 'wiggle',
        animationDuration: '0.5s',
        backgroundColor: color
      }
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
    this.props.setFocus(this.props.skill);
    this.props.updateUserNarrative(this.props.skill);
  }


  render() {
    const { skillName } = this.props.skill;

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
