import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Autocomplete from "../components/Autocomplete";
import GoogleMap from "../components/GMap";
import PlaceList from "../components/PlaceList";

import { connect } from "react-redux";

function mapStateToProps(state) {
  const { places } = state;
  return { places };
}

function Home(props) {
  const [center, setCenter] = useState({
    lat: 3.139003,
    lng: 101.686855,
  });

  useEffect(() => {
    if (props.places?.length > 0) {
      const lastPlace = props.places[props.places.length - 1];
      setCenter({
        lat: lastPlace.latitude,
        lng: lastPlace.longitude,
      });
    }
  }, [props.places]);

  const onSelectPlace = (place) => {
    if (place) {
      setCenter({
        lat: place.latitude,
        lng: place.longitude,
      });
    }
  };

  return (
    <div className="">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 6 }}
      >
        <Grid item>
          <Typography component="h1" variant="h5" sx={{ m: 1 }}>
            Search your location here...
          </Typography>
        </Grid>
        <Grid item>
          <Autocomplete />
        </Grid>
        {props.places?.length > 0 && (
          <div style={{ width: "100%" }}>
            <Typography component="h1" variant="h5" sx={{ mt: 10 }}>
              Your searched places
            </Typography>
            <Grid
              container
              component="section"
              sx={{ height: "400px", width: "100%" }}
            >
              <Grid item xs={12} sm={6} md={8}>
                <div style={{ height: "100%" }}>
                  <GoogleMap places={props.places} center={center} />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <PlaceList onSelectPlace={onSelectPlace} />
              </Grid>
            </Grid>
          </div>
        )}
      </Grid>
    </div>
  );
}

export default connect(mapStateToProps)(Home);
