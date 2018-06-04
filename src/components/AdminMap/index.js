import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import AdminMapMarker from '../AdminMapMarker';

class AdminMap extends Component {

  render() {

    return(
      <div style={ {height: '500px', width: '100%'}}>

        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{ key: "AIzaSyC6_lotlpthxcUkaoA1chwmjcnKEmNhlQk"}}
        >
          {this.props.children}
        </GoogleMapReact>
      </div>
    )
  }
}


export default AdminMap;
