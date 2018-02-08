import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarHeader from './NavbarHeader';
import Dashboard from './Dashboard';
import SkillDetail from './SkillDetail'



class App extends Component {
  state = {
    navThemeInverse: false
  }

  render() {
    const { focussedSkill } = this.props

    return (
      <div>
        {focussedSkill ? <SkillDetail skill={focussedSkill}/> :<Dashboard />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { focussedSkill: state.skill.focusedSkill}
}

export default connect(mapStateToProps)(App);
