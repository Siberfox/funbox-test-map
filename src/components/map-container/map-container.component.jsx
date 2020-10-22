import React, { useState } from "react";

import {
  MapWrapper,
  MapBlock,
  NavPanel,
  SearchField,
} from "./map-container.styles";

import { YMaps, Map } from "react-yandex-maps";

const MapContainer = () => {
  const [mapConfig, setMapConfig] = useState({
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 12,
  });

  return (
    <MapWrapper>
      <NavPanel>
        <SearchField type="search" placeholder="Новая точка маршрута" />
        <ul className="nav-list"></ul>
      </NavPanel>
      <MapBlock>
        <YMaps>
          <Map
            defaultState={{
              center: [mapConfig.center.lat, mapConfig.center.lng],
              zoom: mapConfig.zoom,
            }}
            width={"100%"}
            height={"100%"}
          />
        </YMaps>
      </MapBlock>
    </MapWrapper>
  );
};

export default MapContainer;
