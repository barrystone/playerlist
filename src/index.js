import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { searchPlayers, requestPlayers } from "./reducers";
import "tachyons";
import "@material-ui/core";

const logger = createLogger();

const rootReducer = combineReducers({ searchPlayers, requestPlayers });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
