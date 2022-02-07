const initialState = [];

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case "places/placeAdded": {
      const index = state.findIndex((place) => place.id === action.payload.id);

      if (index > -1) {
        return state;
      }

      return [...state, action.payload];
    }
    default:
      return state;
  }
}
