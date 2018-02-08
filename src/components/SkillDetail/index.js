import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SkillDetail extends Component {


  handleClick = () => {
    this.props.resetFocus()
  }

  render() {
    console.log(this.props)
    const { skillName, color, tagLine } = this.props.skill
    return (
      <div className='skill-detail' style={{backgroundColor: color}} onClick={this.handleClick}>
        <div className='skill-detail-top'>
          <h1>{ skillName }</h1>
        </div>
        <div className='skill-detail-main'>
          <div className='skill-detail-main-head'>
            <p>{tagLine}</p>
          </div>

        </div>
      </div>
    )
  }
}


export default connect(null, actions)(SkillDetail);
