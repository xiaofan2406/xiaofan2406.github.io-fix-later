import React from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import routes from 'src/routes';


function App() {
  return (
    <Router>
      <div className="App-root">
        {routes.map(route => (
          <Match
            key={route.pattern}
            pattern={route.pattern}
            exactly={route.exactly}
            component={route.component}
          />
        ))}
      </div>
    </Router>
  );
}


export default App;
