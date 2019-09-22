import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} initialCenter={{
            lat: 41.707792,
            lng: 44.764569
          }}
           zoom={15}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyC-52_t8BayUa6HdEhBrIrtXz79VRXoS90")
})(MapContainer)
