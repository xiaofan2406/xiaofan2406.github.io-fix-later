import React from 'react';
import { Provider } from 'react-redux';
import 'animate.css';

import './reset.css';
import App from './app/App';
import configureStore from './store';


const store = configureStore();

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}


export default Root;
