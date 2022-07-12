import React from "react";
import { makeStyles } from "@material-ui/core";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = ({ longitude, latitude }) => {
  const classes = useStyles();

  const location = [latitude, longitude];

  return (
    <div className={classes.section}>
      <MapContainer center={location} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "10px 40px",
    "& .leaflet-container": {
      width: "100%",
      height: "400px",
    },
    "@media (max-width:1400px)": {
      padding: "10px 0px",
    },
  },
}));
