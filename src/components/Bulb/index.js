import React, { Component } from 'react';

class Bulb extends Component {
  state = {
    lit: this.props.lit,
    classes: ''
  }

  renderClass = () => {
    return 'bulb'
  }

  componentDidMount() {
    this.setState({classes: 'bulb'})
  }

  render() {
    const {lit, gridPos} = this.props

    const backgroundColor = lit ? 'blue' : 'white'
    const animationName = lit ? 'fadeIn' : null

    const style = {
      backgroundColor,
      animationName,
      animationDuration: '4s'
    }


    return (
      <div className={this.state.classes} style={style}>
        {this.props.mode ? gridPos : null}
      </div>
    )
  }
}

export default Bulb;
