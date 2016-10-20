import React from 'react';
import axios from 'axios';
import preAxios from 'hocs/pre-axios';

import Display from './Display';


function Work() {
  const lines = [
    {
      title: 'EEA',
      content: (
        <div>
          <p>I work for Engineering Education Australia.</p>
          <p>One of my responsibilities is maintianing the official
            <code><a rel="noopener noreferrer" target="_blank" href="http://eeaust.com.au/">EEA website</a></code></p>
        </div>
      )
    },
    {
      title: 'myCPD',
      content: (
        <div>
          <p><code><a rel="noopener noreferrer" target="_blank" href="http://mycpd.engineersaustralia.org.au/">myCPD</a></code> is a LMS that provides training to professional engineers.</p>
          <p>I look after this product. My tasks include active maintenance
          and implementing and deploy new features.</p>
        </div>
      )
    }
  ];
  return (
    <Display
      header="Where do I work"
      lines={lines}
    />
  );
}

Work.propTypes = {
  // from preAxios
  data: React.PropTypes.object.isRequired
};


export default preAxios({
  preload() {
    return axios.get('https://api.github.com/users/xiaofan2406');
  }
})(Work);
