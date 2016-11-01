import React from 'react';
import { Provider } from 'react-redux';
import 'animate.css';
import Promise from 'bluebird';

import './reset.css';
import App from './app/App';
import configureStore from './store';


global.Promise = Promise;
Promise.config({
  cancellation: true
});

const store = configureStore();

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}


export default Root;
