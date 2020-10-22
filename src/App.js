import React, { useState } from "react";

import GoogleMapReact from "google-map-react";

import { Map, MapNavPanel, MapWrapper } from "./App.styles.jsx";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const [mapConfig, setMapConfig] = useState({
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  });

  const mapKey = "AIzaSyAcLjLdaRerLI85DDCDyIQHr1qUflc_NwI";

  return (
    <div className="App">
      <Map>
        <MapNavPanel />
        <MapWrapper>
          <GoogleMapReact
            bootstrapURLKeys={{ key: mapKey }}
            defaultCenter={mapConfig.center}
            defaultZoom={mapConfig.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </MapWrapper>
      </Map>
    </div>
  );
}

export default App;
