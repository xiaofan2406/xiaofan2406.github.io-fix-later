import React from 'react';

import Display from './Display';


function Me() {
  const lines = [
    {
      title: 'Xiaofan Wu',
      content: (
        <div>
          <p>I am a junior developer based in Melbourne.</p><p> I aim to become a
            full-stack <code>JavaScript</code> developer.</p>
          <p>Game development and Software Engineering are my secondary interest.</p>
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


export default Me;
