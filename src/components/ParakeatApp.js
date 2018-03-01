import React, { Component } from 'react';

import ParakeatLogo from './ParakeatLogo';

class ParakeatApp extends Component {
  state = {
    mousePos: {x: null, y: null}
  }

  handleMouseMove = (e) => {
    this.setState({mousePos: {x: e.clientX, y: e.clientY}})
  }

  render() {
    console.log(this.parakeatPupil)

    return(
      <div style={{ textAlign: 'center'}} onMouseMove={this.handleMouseMove}>
        <div
          className={'full-width'}
          style={
            {
              backgroundSize: 'stretch',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top center',
              backgroundImage: 'linear-gradient(0deg, rgba(35,172,166,.85),rgba(255,255,255,0)), url(https://www.instock.nl/app/uploads/2016/07/RubendeRuijter_InstockDH-51_klein.jpg)',
              padding: '0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              opacity: '1',
              paddingBottom: '30px',
              paddingTop: '30px'
            }

        }

        >
        <div
          className='circle-logo-wrapper'
          style={
            {
              height: '200px',
              width: '200px',
              borderRadius: '50%',
              backgroundColor: 'rgba(237, 237, 237, 1)',
              display: 'flex',
              alignItems: 'center',
              padding: '0px',
              marginBottom: '15px',
              marginTop: '10px'
            }

          }
        >
          <ParakeatLogo watching mousePos={this.state.mousePos} elRef={(e) => this.parakeatPupil = e}/>

        </div>
          <h1>Parakeat</h1>

          <h2

            style={
              {
                textShadow: '2px 2px 1px rgba(135, 135, 135, .3)',
                color: 'white',
                marginBottom: '20px',
                marginTop: '20px',
                fontFamily: '"Courier New", Courier, monospace',
                fontWeight: '400',
                fontSize: '64'
              }
            }
          >
            Dine off the beaten track
          </h2>
        </div>

      </div>
    )
  };
};

export default ParakeatApp;
