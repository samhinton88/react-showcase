import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

class SkillCard extends Component {
  state = {
    shouldWiggle: false,
  }

  componentDidMount() {
    if (this.props.userNarrative.userNarrative.includes(this.props.data)) {
      this.setState({ shouldWiggle: false});
      return
    }

    if (this.props.data.skillName === 'React') {
      this.wiggleTimer = setTimeout(() => {
        this.setState({ shouldWiggle: true })
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

    const {
      distanceFromOrigin: dist,
      data: { color },
    } = this.props;


    if (this.state.shouldWiggle) {
      return {
        animationName: 'wiggle',
        animationDuration: '0.5s',
        backgroundColor: color
      }
    }


    const duration = String((dist + 1 * (dist)) + 2 );
    return {
      animationName: 'skillWave',
      animationDuration: duration + 's',
      backgroundColor: color,
    }
  }

  handleClick = () => {
    this.props.setFocus(this.props.data);
    this.props.updateUserNarrative(this.props.data);
  }


  render() {
    const { skillName } = this.props.data;

    return (
      <div className='skill-card' style={this.renderStyle()}>
        <a onClick={this.handleClick}><h3>{ skillName }</h3></a>
      </div>
    )
  }
}

function mapStateToProps(state) {

  return { userNarrative: state.userNarrative }
}

export default connect(mapStateToProps, actions)(SkillCard);
