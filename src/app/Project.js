import React from 'react';
import axios from 'axios';
import preAxios from 'hocs/pre-axios';

import Display from './Display';


function Project(props) {
  const lines = [
    {
      title: 'react-starter-kit',
      content: (
        <div>
          react-starter-kit
        </div>
      )
    },
    {
      title: 'vue-starter-kit',
      content: (
        <div>
          vue-starter-kit
        </div>
      )
    },
    {
      title: 'vue-vue',
      content: (
        <div>
          vue-vue
        </div>
      )
    }
  ];
  console.log(props.data);
  return (
    <Display
      header="Personal Projects"
      lines={lines}
    />
  );
}

Project.propTypes = {
  // from preAxios
  data: React.PropTypes.array.isRequired
};


export default preAxios({
  preload() {
    return Promise.all([
      axios.get('https://api.github.com/repos/xiaofan2406/react-starter-kit'),
      axios.get('https://api.github.com/repos/xiaofan2406/vue-starter-kit'),
      axios.get('https://api.github.com/repos/xiaofan2406/vue-vue')
    ]);
  }
})(Project);
