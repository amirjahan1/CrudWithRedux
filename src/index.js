import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import { store , persistor} from "./Redux/Store";
import {BrowserRouter as Router} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
              <App />
              </PersistGate>
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
