import React from "react";
import { Provider } from "react-redux";

import store from "./redux";
import { Home } from "./screens/home";

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
