import React, { Component } from 'react';

import ParakeatLogo from './ParakeatLogo';
import Iphone from './Iphone';
import ParakeatMarker from './ParakeatMarker';

class ParakeatApp extends Component {
  state = {
    mousePos: {x: null, y: null}
  }

  handleMouseMove = (e) => {
    this.setState({mousePos: {x: e.clientX, y: e.clientY}})
  }

  render() {


    return(
      <div style={{ textAlign: 'center'}} onMouseMove={this.handleMouseMove}>
        <div
          className={'full-width'}
          style={
            {
              backgroundSize: 'stretch',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top center',
              opacity: '0',
              backgroundImage: 'linear-gradient(-90deg, rgba(35,172,166,.85),rgba(255,255,255,0)), url(https://www.instock.nl/app/uploads/2016/07/RubendeRuijter_InstockDH-51_klein.jpg)',
              padding: '0',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              opacity: '1',
              paddingBottom: '40px',
              paddingTop: '40px',
              paddingLeft: '20px'

            }

        }

        >
        <div
          style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}
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
                marginBottom: '0px',
                marginTop: '10px',
                marginRight: '20px',
                marginLeft: '30px',
                boxShadow: '1px 2px 10px rgba(0, 0, 0, .7)'
              }

            }
          >
            <ParakeatLogo watching mousePos={this.state.mousePos} elRef={(e) => this.parakeatPupil = e}/>
          </div>
          </div>
          <div>
            <h1
              style={
                {
                  textShadow: '2px 2px 1px rgba(0, 0, 0, .9)',
                  marginRight: '20px'
                }
              }
            >
              Parakeat
            </h1>
            <h2
            style={
              {
                textShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                color: 'rgba(250, 250, 250, .9)',
                marginBottom: '20px',
                marginTop: '20px',
                marginLeft: '20px',
                marginRight: '20px',
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


        <div
          className='divider full-width'
          style={
            {
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundImage: 'linear-gradient(101deg, rgba(192, 88, 5, .51), rgba(35,172,166,.85)), url(../../assets/veg-big.jpeg)',
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              height: '472px'
            }
          }
        >

        <div
          style={
              {
                boxShadow: '1px 1px 2px black',
                marginRight: '150px',
                backgroundImage: 'linear-gradient(-10deg, rgba(153, 171, 131, 0.1), url(../../assets/map_newcastle.png)',
                width: '250px',
                height: '400px'

              }
          }
        >
          <img src='../../assets/map_newcastle.png' />
        </div>



        </div>
        <div
          className='content-wrapper full-width'
          style={
            {
              background: 'linear-gradient(90deg, rgba(137, 218, 89, .5), rgba(255,255,255,0))',
              width: '100vw',
              height: '400px',
              marginTop: '20px',



            }
          }
        >



        </div>


      </div>
    )
  };
};
//'linear-gradient(-90deg, rgba(35,172,166,.85),rgba(255,255,255,0)), url(https://www.instock.nl/app/uploads/2016/07/RubendeRuijter_InstockDH-51_klein.jpg)'
export default ParakeatApp;
