import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Word from '../Word';
import ReactEye from '../ReactEye'

class SkillDetail extends Component {
  state = {
    reactLogoRect: null
  }

  componentDidMount() {

    this.setState({ reactLogoRect: this.inputElement.getBoundingClientRect()})
  }

  handleClick = () => {
    this.props.resetFocus()
  }

  render() {
    const { skillName, color, tagLine, description } = this.props.skill

    return (
      <div className='skill-detail' style={
        {
          backgroundColor: color,
          animation: 'fadeIn',
          animationDuration: '1s'
        }
      }
      >
        <div
          className='skill-detail-top'
          onClick={this.handleClick}
        >
          <h1>{ skillName }</h1>
        </div>
        <div className='skill-detail-main'>
          <div className='skill-detail-main-head'>
            <Word content={tagLine} new />
          </div>
          <div className='skill-detail-main-side'>
            <ReactEye
              inputRef={el => this.inputElement = el}
              loc={this.state.reactLogoRect}
            />
          </div>
          <div className='skill-detail-main-content'>
            {description}
          </div>

        </div>
      </div>
    )
  }
}


export default connect(null, actions)(SkillDetail);
