import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

class NavbarHeader extends Component {


  render() {

    return (
      <Navbar inverse={this.props.inverse}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Sam Hinton - React</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav >
            <NavItem eventKey={1} href="#">Link</NavItem>
          </Nav>
        </Navbar>
    )
  }
}

export default NavbarHeader;
