import React from "react";
import styles from "../styles/MapSection.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import markerIcon from "../images/markerIcon.svg";
import "leaflet/dist/leaflet.css";
import "../styles/Marker.css";

const MapSection = () => {
  const position = [8.1386, 5.1026]; // [latitude, longitude]
  const zoomLevel = 13;

//   const myIcon = L.icon({
//     iconUrl: {markerIcon},
//     iconSize: [38, 38],
//     iconAnchor: [19, 38],
//     popupAnchor: [0, -38],
//   });

  return (
    <div>
      <div className={`${styles.mapSection}`}>
        <MapContainer
          style={{ height: "100vh" }}
          center={position}
          zoom={zoomLevel}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={position}
            alt=""
            className={`${styles.customMarker}`}
          >
            <Popup>
              <div>
                <h3>Location Name</h3>
                <p>Address: 1234 Main St.</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapSection;
