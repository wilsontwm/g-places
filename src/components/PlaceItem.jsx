import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const selectPlaceById = (state, placeId) => {
  return state.places.find((place) => place.id === placeId);
};

const PlaceItem = ({ id, onSelectPlace }) => {
  const place = useSelector((state) => selectPlaceById(state, id));

  const { name } = place;

  const dispatch = useDispatch();

  const handleOnClick = () => {
    onSelectPlace(place);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" onClick={handleOnClick}>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default PlaceItem;
