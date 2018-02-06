import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader';



class App extends Component {
  render() {
    return (
      <div>
        <NavbarHeader />
        <button />
        {this.props.children}
      </div>
    )
  }
}

export default App;
