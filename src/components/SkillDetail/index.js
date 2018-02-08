import React, { Component } from 'react';

class SkillDetail extends Component {

  render() {
    console.log(this.props)
    const { skillName } = this.props.skill
    return (
      <div className='skill-detail'>
        <div className='skill-detail-top'>
          <h1>{ skillName }</h1>
        </div>
        <div className='skill-detail-main'>

        SkillDetail
        </div>
      </div>
    )
  }
}


export default SkillDetail;
