import React, { Component } from 'react';

class Banner extends Component {
  render() {
    const { background } = this.props;
    const content = this.props.content ? this.props.content : {brand: 'your brand', copy: 'your call to action'};

    return (

      <div
        className='banner full-width'
        style={
          {
            flexDirection: 'column',
            background: `${background}`
          }
        }

      >
        {this.props.children}
        <h1>{content.brand}</h1>

        <p className='wiggler call-to-action'>{content.copy}</p>

        <svg style={{position: "absolute", right: '-70px', bottom: '40px'}} >
          <circle cx='100' cy='100' r='100' fill='rgba(255, 255, 255, 1)'/>
        </svg>
        <svg style={{position: "absolute", right: '50px', bottom: '0px'}} >
          <circle cx='120' cy='140' r='100' fill='rgba(255, 255, 255, 1)'/>
        </svg>
        <svg style={{position: "absolute", right: '-60px', bottom: '80px'}} >
          <circle cx='200' cy='110' r='100' fill='rgba(255, 255, 255, 1)'/>
        </svg>
        <svg style={{position: "absolute", right: '-100px', bottom: '-40px', transform: 'rotate(-45deg)'}}>
          <rect width="450" height="200" style={
            {
              fill:"rgba(255,255,255, 1);stroke-width:3;stroke:rgb(0,0,0)",

            }
          }
          />
        </svg>
        <svg style={{position: "absolute", left: '-70px', bottom: '40px'}} >
          <circle cx='100' cy='100' r='100' fill='rgba(255, 255, 255, 1)'/>
        </svg>
        <svg style={{position: "absolute", left: '50px', bottom: '0px'}} >
          <circle cx='120' cy='140' r='100' fill='rgba(255, 255, 255, 1)'/>
        </svg>
        <svg style={{position: "absolute", left: '-60px', bottom: '80px'}} >
          <circle cx='200' cy='110' r='100' fill='rgba(255, 255, 255, 1)'/>
        </svg>
        <svg style={{position: "absolute", left: '-100px', bottom: '-40px', transform: 'rotate(-45deg)'}}>
          <rect width="450" height="200" style={
            {
              fill:"rgba(255,255,255, 1);stroke-width:3;stroke:rgb(0,0,0)",

            }
          }
          />
        </svg>

      </div>
    )
  }
}

export default Banner;
