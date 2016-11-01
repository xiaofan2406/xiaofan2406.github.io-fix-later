import React from 'react';
import Home from './Home/Home'; // version 1
import Portfolio from './Portfolio/Portfolio'; // version 2


function Version({ location }) {
  const version = location.query && location.query.v;

  switch (version) {
    case '1':
      return <Home location={location} />;
    case '2':
      return <Portfolio location={location} />;
    default:
      return <Home location={location} />;
  }
}

Version.propTypes = {
  location: React.PropTypes.object.isRequired
};


export default Version;
