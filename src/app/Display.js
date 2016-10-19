import React from 'react';
import { Card } from 'antd';
import TransictionGroup from 'react-addons-css-transition-group';

import './Display.css';
import Line from './Line';


class Display extends React.PureComponent {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  };

  state = {
    line: {}
  };

  displayLine = item => () => {
    this.setState({ line: item });
  }

  render() {
    const { data } = this.props;
    const { line } = this.state;
    return (
      <Card
        title={<div className="Display-header">{data.header}</div>}
        className="Display-card"
        bordered={false}
      >
        {data.content.map((item, index) => (
          <Line
            line={item}
            key={index}
            onActiveLine={this.displayLine(item)}
          />
        ))}
        <TransictionGroup
          transitionName="Display-description"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          component="div"
        >
          {Object.keys(line).length > 0 &&
            <div className="Display-content">
              {`'${line.description}'`}
            </div>
          }
        </TransictionGroup>
      </Card>
    );
  }
}


export default Display;
