import React from 'react';
import { Card } from 'antd';

import './Display.css';
import Line from './Line';


class Display extends React.PureComponent {
  static propTypes = {
    header: React.PropTypes.string.isRequired,
    lines: React.PropTypes.array.isRequired
  };

  state = {
    activeLine: {}
  };

  displayLine = item => () => {
    this.setState({ activeLine: item });
  }

  render() {
    const { header, lines } = this.props;
    const { activeLine } = this.state;
    return (
      <div className="Display">
        <Card
          title={<div className="Display-header">{header}</div>}
          className="Display-card"
          bordered={false}
        >
          {lines.map((item, index) => (
            <Line
              line={item}
              key={index}
              onActiveLine={this.displayLine(item)}
            />
          ))}
          {lines.map(item => (
            // render all of them to fake animation?
            <div
              className={`Display-content ${item.title === activeLine.title ? 'active' : ''}`}
              key={item.title}
            >
              {activeLine.content}
            </div>
          ))}
        </Card>
      </div>
    );
  }
}


export default Display;
