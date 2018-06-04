import React, { Component } from 'react';
import inlineStyles from './inline_styles';
import ReactEye from '../ReactEye';

class FourCardSquare extends Component {
  state = {
    hovered: [false, false, false, false],
    gradientAngle: 0,
    bulgeTimer: 0,
    timer: 0
  }

  componentDidMount() {
    let multiplier = 1,
        growing = true,
        bulges = 0;


    this.timer = setInterval(() => {
      const { gradientAngle, bulgeTimer, timer } = this.state


      if (bulges === 1 ) {
        this.setState({gradientAngle: gradientAngle + 0.2, timer: timer + 0.01})
        return
      } else if (bulgeTimer > 100 && growing) {
        multiplier = -1;
        growing = false;
        bulges++
      } else if (bulgeTimer < 0 && !growing) {
        multiplier = 1;
        growing = true;
      }

      this.setState({gradientAngle: gradientAngle + 0.1, bulgeTimer: bulgeTimer + (multiplier * 0.5), timer: timer + 0.01})
    }, 10)

  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  renderStyle = () => {
    const { inlineStyle } = this.props;
    const { gradientAngle, timer} = this.state
    console.log(((Math.sin(timer) * 50) + 50 ), timer)

    const defaultStyle = {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      width: '100vw',
      gridColumnGap: '10px',
      gridRowGap: '20px',
      backgroundImage: `linear-gradient(${gradientAngle}deg,red, #ae81ff 40%, white, #d1ecfa 60%, green)`,
      // backgroundColor: 'white',
      // backgroundImage: `linear-gradient(100deg,red, #ae81ff 40%, white, #d1ecfa 60%, green)`,
      backgroundSize: '200% auto',
      backgroundPosition: `${((Math.sin(timer) * 50) + 50 )}%`
      // backgroundPosition: `80%`
      // gridTemplateColumns: ''
    };
    return inlineStyle || defaultStyle;
  }

  handleClick = (object) => {

  }


  render() {
    return (
      <div style={this.renderStyle()}>


        <PlainCard pos={0} handleClick={this.handleClick}>
          <svg width="400" height="400">
            <circle cx='200' cy='200' r={this.state.bulgeTimer * 2} fill='rgba(255, 10, 10, 0.8)'/>
            <circle cx='200' cy='200' r={this.state.bulgeTimer * 1.5} fill='rgba(255, 255, 255, 0.8)'/>
            <circle cx='200' cy='200' r={this.state.bulgeTimer / 2} fill='white'/>
          </svg>
        </PlainCard>
        <PlainCard pos={1} handleClick={this.handleClick}>
          <SwellingCircleGroup discs={5} colour={{r:10, g:10, b:100}} timer={this.state.bulgeTimer}/>
          <div style={{position: 'absolute'}}><ReactEye stroke='white'/></div>
        </PlainCard>

        <PlainCard pos={2} handleClick={this.handleClick}>
          <SwellingCircleGroup colour={{r:250, g:50, b:50}} timer={this.state.bulgeTimer}/>

        </PlainCard>
        <PlainCard pos={3} handleClick={this.handleClick}>
          <SwellingCircleGroup colour={{r:250, g:50, b:50}} timer={this.state.bulgeTimer}/>
        </PlainCard>

      </div>
    )
  }
}

class SwellingCircleGroup extends Component {

  renderCircles = () => {
    const { discs, rgba, pos = [200, 200], timer, colour: { r, g, b } } = this.props;

    const discStore = [];

    for (let i=0;i<discs;i++) {
      const multiplier = (discs / (i + 1)) / (discs / i) + 1;
      console.log('multiplier', multiplier, 'at i', i)
      discStore
        .push(
          <circle key={i} cx={pos[0]} cy={pos[1]} r={timer * multiplier } fill={`rgba(${r + (i * i) }, ${g + (i * i)}, ${b + (i * i)}, 0.2)`}/>
          )
    }

    return discStore
  }


  render() {
    const { timer, pos = [200, 200], colour: { r, g, b} } = this.props;

    return(
      <svg width="400" height="400">
            {/*<circle cx={pos[0]} cy={pos[1]} r={timer * 2} fill={`rgba(${r}, ${g}, ${b}, 0.8)`}/>
            <circle cx={pos[0]} cy={pos[1]} r={timer * 1.5} fill={`rgba(${r}, ${g}, ${b}, 0.8)`}/>
            <circle cx={pos[0]} cy={pos[1]} r={timer } fill={`rgba(${r}, ${g}, ${b}, 0.8)`}/>
            <circle cx={pos[0]} cy={pos[1]} r={timer / 1.5} fill={`rgba(${r}, ${g}, ${b}, 0.8)`}/>
            <circle cx={pos[0]} cy={pos[1]} r={timer / 2} fill='white'/>*/}
            {this.renderCircles()}
      </svg>
    )
  }
}

class PlainCard extends Component {

  renderStyle = () => {
    const { inlineStyle } = this.props;


    const defaultStyle = {
      width: '400px',
      height: '400px',
      // boxShadow: '-10px 10px 20px rgba(0, 0, 0, 0.2)',
      background: 'transparent',
      margin: '20px',
      borderRadius: '50%'
      // border: '0.2px solid rgba(100, 100, 100, 0.05)'
    }

    return inlineStyle || defaultStyle;
  }

  render() {
    const { handleClick, pos } = this.props;

    return (
      <div style={this.renderStyle()} onClick={handleClick(pos) || null}>
        {this.props.children}
      </div>
    )
  }
}

export default FourCardSquare;


