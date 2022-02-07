import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MarkerComponent = () => (
  <div>
    <LocationOnIcon />
  </div>
);

function GoogleMap(props) {
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState(null);

  useEffect(() => {
    setCenter(props.center);
  }, [props.center]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {center && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.VITE_GOOGLE_MAPS_API_KEY }}
          center={center}
          zoom={zoom}
        >
          {props.places?.map((place) => {
            return (
              <MarkerComponent lat={place.latitude} lng={place.longitude} />
            );
          })}
        </GoogleMapReact>
      )}
    </div>
  );
}

export default GoogleMap;
