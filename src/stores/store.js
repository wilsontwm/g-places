import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

// const composedEnhancer = composeWithDevTools(
//   // Add whatever middleware you actually want to use here
//   applyMiddleware()
//   // other store enhancers if any
// );

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
