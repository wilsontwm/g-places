import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import List from "@mui/material/List";
import PlaceItem from "./PlaceItem";

const selectPlaceIds = (state) => state.places.map((pl) => pl.id);

export default function PlaceList(props) {
  const placeIds = useSelector(selectPlaceIds, shallowEqual);
  const renderedListItems = placeIds.map((placeId, index) => {
    return (
      <PlaceItem key={index} id={placeId} onSelectPlace={props.onSelectPlace} />
    );
  });

  return <List>{renderedListItems}</List>;
}
