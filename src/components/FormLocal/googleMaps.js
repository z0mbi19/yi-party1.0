import React from 'react';

import { useGoogleMaps } from "react-hook-google-maps";

// import { Container } from './styles';

function GoogleMaps() {
    const { ref, map, google } = useGoogleMaps(
        
        "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
        {
          center: { lat: -15.4646, lng: -47.5546 },
          zoom: 3,
        },
      );
  return <div ref={ref} style={{ width: 200, height: 300 }} />;
}

export default GoogleMaps;