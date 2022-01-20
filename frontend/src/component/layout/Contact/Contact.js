import React, { useState } from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import ReactMapGL from 'react-map-gl'

const Contact = () => {
  const [viewport, setViewport] =useState({
    
    latitude: 10.852608,
    longitude: 106.813240,
    
    zoom: 8,
    bearing:0,
    pitch:0,
  });
  return (
    <div className="contactContainer">
      <div>
      <a className="mailBtn" href="mailto:daiphu094@gmail.com">
          <Button>Contact: daiphu094@gmail.com</Button>
      </a>
    </div>
      <div className="mapbox-react">
          <ReactMapGL
            {...viewport}
            width="800px"
            height="500px"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={nextViewport=>setViewport(nextViewport)}
            mapboxApiAccessToken="pk.eyJ1IjoiZGFpcGh1IiwiYSI6ImNrd3FlMzFwdTBscGMyd3BtNm5tZ3BqejUifQ.9qMESSU0fJ-_NTcFeUm8kQ"
          />
    </div>

    
    </div>
    
  );
};

export default Contact;
