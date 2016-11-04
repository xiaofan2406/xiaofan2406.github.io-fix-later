import React from 'react';
import Anchor from 'widgets/blank-anchor';

import Display from './Display';


function Work() {
  const lines = [
    {
      title: 'EEA',
      content: (
        <div>
          <p>I work for Engineering Education Australia.</p>
          <p>One of my responsibilities is maintaining the official
            <code><Anchor href="http://eeaust.com.au/">EEA website</Anchor></code>
          </p>
        </div>
      )
    },
    {
      title: 'myCPD',
      content: (
        <div>
          <p><code><Anchor href="http://mycpd.engineersaustralia.org.au/">myCPD</Anchor></code> is a LMS that provides training to professional engineers.</p>
          <p>I look after this product for active maintenance and feature updates.</p>
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


export default Work;
