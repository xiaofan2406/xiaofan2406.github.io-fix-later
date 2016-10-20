import React from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import routes from 'src/routes';

import './App.css';
import Header from './Header';


function App() {
  return (
    <Router>
      <div className="App-root">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-main" >
          {routes.map(route => (
            <Match
              key={route.pattern}
              pattern={route.pattern}
              exactly={route.exactly}
              component={route.component}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}


export default App;
