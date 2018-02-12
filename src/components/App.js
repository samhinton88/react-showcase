import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarHeader from './NavbarHeader';
import Dashboard from './Dashboard';
import SkillDetail from './SkillDetail';
import StoryTeller from './StoryTeller';
import BulbScreen from './BulbScreen';



class App extends Component {
  state = {
    navThemeInverse: false,
  }



  render() {
    const { focussedSkill } = this.props

    return (
      <div className='app'>


        <BulbScreen />


      </div>
    )
  }
}

        // {focussedSkill ? <SkillDetail skill={focussedSkill}/> :<Dashboard />}
function mapStateToProps(state) {
  return {
    focussedSkill: state.skill.focusedSkill,
    userNarrative: state.userNarrative
  }
}

export default connect(mapStateToProps)(App);
