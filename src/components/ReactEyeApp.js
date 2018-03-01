import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactEye from './ReactEye';




class ReactEyeApp extends Component {
  state = {
    reactLogoRect: null,
    windowDimensions: { width: 0, height: 0},
    wandering: false
  }

  componentDidMount() {

    this.setState({ reactLogoRect: this.inputElement.getBoundingClientRect() })
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
    this.setState({ wandering: !this.state.wandering })
  }


  handleResize() {
    this.setState({ reactLogoRect: this.inputElement.getBoundingClientRect() })
  }

  /*clientRect={this.state.reactLogoRef ? this.state.reactLogoRef.getBoundingClientRect() : null}*/
  render() {
    const { focussedSkill } = this.props;
    console.log(this.state.wandering)

    return (
      <div className='app'>
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

export default connect(mapStateToProps)(ReactEyeApp);
