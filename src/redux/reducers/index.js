
// THIS IS A ROOTREDUCER FILE WHICH HELPS TO COMBINE ALL OTHER reducers functions together because we can have only one store in redux

import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
export default reducers;