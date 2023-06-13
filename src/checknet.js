import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { Card } from "@mui/material";
function Mapnet(){

useEffect(()=>{
    

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXM0NzIiLCJhIjoiY2w1aG9lbXc2MDA2dzNrcDdtdnZmZW5zdiJ9.IsSZ6GZXKBaDkBOzIWZPcw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [12.550343, 55.665957],
        zoom: 8
    });
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
        }));
 //   Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker()
        .setLngLat([12.554729, 55.70651])
        .addTo(map);

    // // Create a default Marker, colored black, rotated 45 degrees.
    const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
        .setLngLat([12.65147, 55.608166])
        .addTo(map);
    })
  
    return(
        
       <div style={{height:"100vh",width:"100wh"}} id="map"></div>
    )
}
export default Mapnet