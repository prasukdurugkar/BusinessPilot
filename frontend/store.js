import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./src/reducer/inventory/productReducer";

const reducer = combineReducers({ products: productsReducer });

// let initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
