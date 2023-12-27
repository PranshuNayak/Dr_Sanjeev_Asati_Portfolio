import React,{useMemo,useState} from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function Map() {
  const style = {
    width:'100%',
    height:'50vh'
  }
  const lat = 22.75307524812589
  const lng = 75.90285450182196
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBrN - P7VeHEBAc0Q_cL9ynIfxDl5IkpLRc",
  });
  const center = useMemo(
    () => ({ lat: lat, lng: lng }),
    []
  );
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={style}
      center={center}
      zoom={17}
    >
      <Marker position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  ) : (
    <h1>Loading Map...</h1>
  );
}

export default Map;
