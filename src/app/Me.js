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
          <p>I am a junior developer based in Melbourne.</p><p> I aim to becoming a
            full-stack <code>JavaScript</code> developer.</p>
          <p>Game development and Software Engineering are my secondary interests.</p>
        </div>
      )
    },
    {
      title: 'I write code',
      content: (
        <div>
          I enjoy developing with <code>React</code> and <code>Vue</code>
          as front-end frameworks,
          and <code>Express</code> or <code>Koa</code> as backend server.
        </div>
      )
    },
    {
      title: 'I play games',
      content: (
        <div>
          I play <code>CS:GO</code> and <code>Overwatch</code> casually.
          <code>The Witcher 3</code> is my favorite game.
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
