import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarHeader from './NavbarHeader';
import Dashboard from './Dashboard';
import SkillDetail from './SkillDetail';
import StoryTeller from './StoryTeller';
import BulbScreen from './BulbScreen';
import ReactEye from './ReactEye';
import ParakeatLogo from './ParakeatLogo'



class App extends Component {
  state = {
    reactLogoRect: null,
    windowDimensions: { width: 0, height: 0},
    wandering: true
  }

  componentDidMount() {

    this.setState({ reactLogoRect: this.inputElement.getBoundingClientRect()})
    window.addEventListener('resize', () => {


      this.setState({
        windowDimensions: { width: window.innerWidth, height: window.innerHeight },
        reactLogoRect: this.inputElement.getBoundingClientRect()
      })
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setState({
      windowDimensions: { width: window.innerWidth, height: window.innerHeight }
    }) )
  }

  wanderToggle = () => {
    this.setState({ wandering: !this.state.wandering})
  }


  handleResize() {
    this.setState({ reactLogoRect: this.inputElement.getBoundingClientRect()})
  }

  /*clientRect={this.state.reactLogoRef ? this.state.reactLogoRef.getBoundingClientRect() : null}*/
  render() {
    const { focussedSkill } = this.props;
    console.log(this.state.wandering)

    return (
      <div className='app'>
        <div height='50px' width='50px'>
        <ParakeatLogo />
        </div>
      <button onClick={this.wanderToggle}>toggle wandering</button>
        <ReactEye
          inputRef={el => this.inputElement = el}
          loc={this.state.reactLogoRect}
          wandering={this.state.wandering ? true : false}
        />

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
