import React, { Component } from 'react';

class Banner extends Component {
  render() {
    const { background } = this.props;

    return (

      <div
        className='banner'
        style={
          {
            flexDirection: 'column',
            backgroundImage: `linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url(${background})`
          }
        }

      >
        <h1>Your Commercial Concern</h1>
        <p className='wiggler'>your call to action</p>

      </div>
    )
  }
}

export default Banner;
