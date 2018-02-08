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

    return (
      <div>
        {this.props.focusedSkill ? <SkillDetail/> :<Dashboard />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { focusedSkill: state.skill.focusedSkill}
}

export default connect(mapStateToProps)(App);
