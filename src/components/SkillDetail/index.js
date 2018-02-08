import React, { Component } from 'react';

class SkillDetail extends Component {

  render() {
    console.log(this.props)
    const { skillName } = this.props.skill
    return (
      <div className='skill-detail'>
        <div className='skill-detail-top'>
          { skillName }
        </div>
        <div className='skill-detail-main'>

        </div>
        SkillDetail
      </div>
    )
  }
}


export default SkillDetail;
