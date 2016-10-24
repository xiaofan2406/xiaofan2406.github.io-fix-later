import React from 'react';
import { Card } from 'antd';

import './Display.css';
import Line from './Line';
import ActiveLineDisplay from './ActiveLineDisplay';


function Display({ header, lines }) {
  return (
    <div className="Display-root">
      <Card
        title={<div className="Display-header">{header}</div>}
        className="Display-card"
        bordered={false}
      >
        {lines.map(line => (
          <Line
            key={line.title}
            line={line}
          />
        ))}
        {lines.map(line => (
          <ActiveLineDisplay key={line.title} line={line} />
        ))}
      </Card>
    </div>
  );
}

Display.propTypes = {
  header: React.PropTypes.string.isRequired,
  lines: React.PropTypes.array.isRequired
};


export default Display;
