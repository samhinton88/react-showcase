import React, { Component } from 'react';

class NavbarButton extends Component {


  render() {
    const { label } = this.props;

    return (
      <button className="navbar-btn" onClick={this.props.onClick}>
        { label }
      </button>
    )
  }
}

export default NavbarButton;
