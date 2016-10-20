import React from 'react';
import axios from 'axios';
import preAxios from 'hocs/pre-axios';

import Display from './Display';


function Me() {
  const lines = [
    {
      title: 'Xiaofan Wu',
      content: (
        <div>
          My digital name is xiaofan2406. Find me easily in different platform by this name
        </div>
      )
    },
    {
      title: 'I write code',
      content: (
        <div>
          I am trying to become a full-stack JavaScript developer.
          Also interested in game development and software engineering
        </div>
      )
    },
    {
      title: 'I play games',
      content: (
        <div>
          I play CS:GO and Overwatch casually. The Witcher 3 is my favorite game.
        </div>
      )
    }
  ];
  return (
    <Display
      header="Who am I"
      lines={lines}
    />
  );
}

Me.propTypes = {
  // from preAxios
  data: React.PropTypes.object.isRequired
};


export default preAxios({
  preload() {
    return axios.get('https://api.github.com/users/xiaofan2406');
  }
})(Me);
