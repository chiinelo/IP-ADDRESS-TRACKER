import React from "react";
import styles from "../styles/MapSection.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/Marker.css";

const MapSection = (props) => {
  const position = [props?.lat, props?.long];
  const zoomLevel = 13;

  if (!position) {
    console.log("work");
  }
  const markerIcon = L.icon({
    iconUrl: "src/images/markerIcon.ico",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

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
          <Marker position={position} icon={markerIcon}>
            <Popup>
              <div>
                <h3>{props.country}</h3>
                <p>{props.city}.</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapSection;
