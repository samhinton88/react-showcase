import React, { Component } from 'react';
import { connect } from 'react-redux';


class TypewriterChar extends Component {

  render() {
    return (
      <p style={this.props.style}>
        {this.props.content}
      </p>
    )
  }
}

export default TypewriterChar
