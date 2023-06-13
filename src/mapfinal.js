import { Box } from "@mui/system"
import { useRef } from "react";
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'

const MapFinal = () =>{
    const mapRef = useRef();
    var path=require("./OIP.jpg")
return(
    
    <Box
    sx={{height:"100vh",
    width:"100wh",
    position:"relative"}}
    >
        <ReactMapGL
        ref={mapRef}
        mapboxAccessToken="pk.eyJ1IjoiY2hyaXM0NzIiLCJhIjoiY2w1aG9lbXc2MDA2dzNrcDdtdnZmZW5zdiJ9.IsSZ6GZXKBaDkBOzIWZPcw"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
          <Marker longitude={-116} latitude={36} anchor="bottom" >
      <img src={path} alt="image not found"/>
    </Marker>
        <NavigationControl/>
      </ReactMapGL>


    </Box>
)
}
export default MapFinal