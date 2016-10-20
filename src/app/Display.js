import React from 'react';
import { Card } from 'antd';
import TransictionGroup from 'react-addons-css-transition-group';

import './Display.css';
import Line from './Line';


class Display extends React.PureComponent {
  static propTypes = {
    header: React.PropTypes.string.isRequired,
    lines: React.PropTypes.array.isRequired
  };

  state = {
    activeLine: {},
    stick: false
  };

  displayLine = item => () => {
    this.setState({ stick: false });
    this.setState({ activeLine: item });
  }

  leaveLine = () => {
    if (!this.state.stick) {
      this.setState({ activeLine: {} });
    }
  }

  stickLine = () => {
    this.setState({ stick: true });
  }

  render() {
    const { header, lines } = this.props;
    const { activeLine, stick } = this.state;
    return (
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
            onLeaveLine={this.leaveLine}
            onStickLine={this.stickLine}
          />
        ))}
        <TransictionGroup
          transitionName="Display-content"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          component="div"
        >
          {(activeLine.title || stick) &&
            <div className="Display-main">
              {activeLine.content}
            </div>
          }
        </TransictionGroup>
      </Card>
    );
  }
}


export default Display;
