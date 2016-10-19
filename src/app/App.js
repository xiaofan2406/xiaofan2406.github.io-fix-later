import React from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import routes from 'src/routes';


import './App.css';
import Header from './Header';


/* Use functions rather than constant elements for better debugging */
function App() {
  return (
    <Router>
      <div className="App-root">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-main" >
          {routes.map(({ pattern, exactly, component }) => (
            <Match
              pattern={pattern}
              exactly={exactly}
              key={pattern}
              component={component}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}


export default App;
