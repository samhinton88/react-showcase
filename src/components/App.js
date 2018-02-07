import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader';



class App extends Component {
  state = {
    navThemeInverse: false
  }



  render() {
    return (
      <div>
        <NavbarHeader inverse={this.state.navThemeInverse}/>
        <button
          onClick={() => this.setState({navThemeInverse: !this.state.navThemeInverse})}
          className='nav-theme-toggle btn-primary'
        >
          Change my Nav
        </button>
        {this.props.children}
      </div>
    )
  }
}

export default App;
