import React, { Component } from 'react';
import SkillCard from '../SkillCard';
import data from './db';


class Dashboard extends Component {
  state = {
    skillData: data,
    focusItem: null
  }


  renderSkillCards() {
    const skillCards = this.state.skillData.map((skill, index) => {

      const xPos = index % 3;
      const yPos = Math.floor(index / 3);

      return (

        <SkillCard
          key={ index }
          xPos={ xPos }
          yPos={ yPos }
          skill={ skill }
          style={ true }
        />
      )
    });

    return skillCards

  }

  render() {
    return (
      <div className='dashboard'>
        <h2 style={{color: 'black'}}>Dashboard</h2>
        <div className='dashboard-main'>
          {this.renderSkillCards()}
        </div>
      </div>
    )
  }
}

export default Dashboard;
