import { createStore } from "redux";

import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  // this line of code will help us to see reduc dev tools in browsers it will allow redux dev tools extensions
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;