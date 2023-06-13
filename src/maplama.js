import { useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'
const Maplama=()=>{
    var mapboxtoken="pk.eyJ1IjoiY2hyaXM0NzIiLCJhIjoiY2w1aG9lbXc2MDA2dzNrcDdtdnZmZW5zdiJ9.IsSZ6GZXKBaDkBOzIWZPcw";
    const [viewport, setViewport] = useState({
        width:"400px",
        height:"400px",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
    });
    return(
    //     <div style={{ height: "100vh", width: "100%" }}>
    //   <ReactMapGL
    //     {...viewport}
    //     mapboxApiAccessToken={mapboxtoken}
    //     width="100%"
    //     height="100%"
    //     transitionDuration="200"
    //     mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
    //     onViewportChange={(viewport) => setViewport(viewport)}
        
    //   ></ReactMapGL>
    //   </div>
    <div>
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
        onViewportChange={nextViewport=>setViewport(nextViewport)}
        
        />
    </div>
    )
}
export default Maplama