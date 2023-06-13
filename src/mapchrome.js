import * as React from 'react';
import Map from 'react-map-gl';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'

const Mapchrome = () =>{
    <div>
    return <ReactMapGL
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: '100vw', height: '100vh'}}
    mapStyle="mapbox://styles/mapbox/streets-v11"
    mapboxAccessToken={process.env.MAPBOX_TOKEN}
  />;
  </div>
}
export default Mapchrome