import React, {Component} from 'react';


class Lid extends Component {

  render() {
    const {
      cx,
      cy,
      rx,
      ry
    } = this.props.geometry;

    const {
      fill,
      stroke,
      style
    } = this.props.styledata;

    const { className } = this.props;


    return(
      <ellipse
        className={`react-lid ${className}`}
        cx={ cx }
        cy={ cy }
        rx={ rx }
        ry={ ry }
        stroke={ stroke }
        fill={ fill }
        style={ style }
      />

    )
  }
}

export default Lid;
