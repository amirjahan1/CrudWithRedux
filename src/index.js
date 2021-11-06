import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./Redux/Store";
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Provider store={store}>
              <App />
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
