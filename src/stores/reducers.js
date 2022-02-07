import { combineReducers } from "redux";

import placesReducer from "./places";

const rootReducer = combineReducers({
  places: placesReducer,
});

export default rootReducer;
