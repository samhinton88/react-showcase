import React, { Component } from 'react';

class ParakeatLogo extends Component {
  // renderTarget() {
  //   const {x, y} = this.props.mousePos;
  //   console.log('asf')
  //   return <circle className='parakeat-pupil-track' fill='#13aca7' cx={x -700} cy={y + 300} r="5"/>
  // }

  render() {
    const {x, y} = this.props.mousePos;
    console.log(x,y)
    return (

      <svg
        /*x="0px" y="0px"*/
        viewBox="-233 359.7 127.3 122.2"
        height={this.props.small ? "50" : "200"}
        stroke="#13aca7"
        fill="#13aca7"
      >

        <g>
          <g>
            <path d="M-122.9,419.5c0-24.7-19-45.1-43.2-47.4l-4.4-0.2l-4.4,0.2c-24.2,2.2-43.2,22.6-43.2,47.4
              c0,26.2,21.3,47.6,47.6,47.6h4.4v-18.4c12.3-2,21.8-12.2,22.8-24.8h20.4L-122.9,419.5L-122.9,419.5z M-174.9,458
              c-19.3-2.2-34.3-18.6-34.3-38.5s15-36.3,34.3-38.5v36.4v6.5v25.2V458z M-166.1,439.7v-13.5h13.5
              C-154.2,432.9-159.4,438.1-166.1,439.7z M-166.1,415.1V381c17.8,2,32.1,16.2,34.1,34.1C-132,415.1-166.1,415.1-166.1,415.1z"/>
            <circle fill='#13aca7' cx="-188.8" cy="404.9" r="6.9"/>
            <circle ref={this.props.elRef}className='parakeat-pupil' fill='white' cx="-188.8" cy="404.9" r="2"/>

         {/*   {this.renderTarget()}*/}
          </g>
        </g>
      </svg>

    )
  }
}

export default ParakeatLogo;