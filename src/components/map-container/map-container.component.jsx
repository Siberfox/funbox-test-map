import React, { useState } from "react";

import {
  MapWrapper,
  MapBlock,
  NavPanel,
  SearchField,
  NavList,
  NavItem,
} from "./map-container.styles";

import { YMaps, Map, Placemark, Polyline } from "react-yandex-maps";

const MapContainer = () => {
  const [mapConfig, setMapConfig] = useState({
    center: {
      lat: 59.94,
      lng: 30.35,
    },
    zoom: 12,
  });

  const [markers, setMarkers] = useState([
    [59.94, 30.35],
    [59.93, 30.3],
    [59.93, 30.37],
  ]);

  const dragMarker = (e, target) => {
    setMarkers(
      markers.map((item, indx) => {
        if (indx === target) {
          return e.get("target").geometry.getCoordinates();
        }
        return item;
      })
    );
  };

  return (
    <MapWrapper>
      <NavPanel>
        <SearchField type="search" placeholder="Новая точка маршрута" />
        <NavList className="nav-list">
          {markers.map((marker) => (
            <NavItem>{marker.join(",")}</NavItem>
          ))}
        </NavList>
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
          >
            <Polyline
              geometry={markers}
              options={{
                balloonCloseButton: false,
                strokeColor: "#000",
                strokeWidth: 4,
                strokeOpacity: 0.5,
              }}
            />
            {markers.map((marker, index) => (
              <Placemark
                onDrag={(e) => dragMarker(e, index)}
                geometry={marker}
                options={{ draggable: true }}
              />
            ))}
          </Map>
        </YMaps>
      </MapBlock>
    </MapWrapper>
  );
};

export default MapContainer;
