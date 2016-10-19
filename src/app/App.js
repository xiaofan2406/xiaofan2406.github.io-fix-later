import React from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';

import './App.css';
import Header from './Header';
import Content from './Content';


function App() {
  return (
    <Router>
      <div className="App-root">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-main" >
          <Match pattern="*" component={Content} />
        </div>
      </div>
    </Router>
  );
}


export default App;
