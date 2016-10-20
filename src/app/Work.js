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
          EEA
        </div>
      )
    },
    {
      title: 'myCPD',
      content: (
        <div>
          myCPD
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
