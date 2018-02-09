import React, { Component } from 'react';
import { connect } from 'react-redux';

import SkillCard from '../SkillCard';
import StoryTeller from '../StoryTeller';
import data from './db';
import { gridWave } from '../../helpers/animation_helper';




class Dashboard extends Component {
  state = {
    skillData: data,
    focusItem: null,
  }

  renderSkillCards() {
    const { userNarrative: {userNarrative: narrative} } = this.props;

    const mode = narrative.length > 0 ? 'quiet' : 'top-left'

    const skillCards = gridWave(
      this.state.skillData,
      SkillCard,
      3,
      mode
    )

    return skillCards
  }

  render() {

    return (
      <div className='dashboard'>

        <div className='dashboard-main'>
          {this.renderSkillCards()}
        </div>
        <div className="dashboard-lower">
          <StoryTeller />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { userNarrative: state.userNarrative }
}

export default connect(mapStateToProps)(Dashboard);
