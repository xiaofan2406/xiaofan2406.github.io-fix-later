import React from 'react';

import './Home.css';
import Header from './Header';
import hashConfig from './hash-config';


function Home({ location }) {
  const fakeHash = location.hash || '#me';

  const Component = hashConfig.filter(item => item.hash === fakeHash)[0].component;

  return (
    <div className="Home-root">
      <div className="Home-header">
        <Header />
      </div>
      <div className="Home-main">
        <Component />
      </div>
    </div>
  );
}

Home.propTypes = {
  location: React.PropTypes.object.isRequired
};


export default Home;
