import React, { Component } from 'react';
import SkillCard from '../SkillCard';
import data from './db';
import { gridWave } from '../../helpers/animation_helper';




class Dashboard extends Component {
  state = {
    skillData: data,
    focusItem: null,
  }

  renderSkillCards() {
    const skillCards = gridWave(
      this.state.skillData,
      SkillCard,
      3,
      'swipe-left'
    )

    return skillCards
  }

  render() {
    return (
      <div className='dashboard'>

        <div className='dashboard-main'>
          {this.renderSkillCards()}
        </div>
      </div>
    )
  }
}

export default Dashboard;
