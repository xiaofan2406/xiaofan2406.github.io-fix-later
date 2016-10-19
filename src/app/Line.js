import React from 'react';
import { Card } from 'antd';

import './Line.css';


class Line extends React.PureComponent {
  static propTypes = {
    line: React.PropTypes.object.isRequired,
    onActiveLine: React.PropTypes.func.isRequired
  };

  state = {
    hover: false
  };
  mouseEnter = () => {
    if (this.state.hover === false) {
      console.log('change to hover');
      this.setState({ hover: true });
      this.props.onActiveLine();
    }
  }
  mouseLeave = () => {
    if (this.state.hover === true) {
      this.setState({ hover: false });
    }
  }

  render() {
    const { line } = this.props;
    const { hover } = this.state;
    return (
      <Card
        bordered={false}
        className="Line-root"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <div className={`Line-title animated ${hover && 'jello'} infinite`}>
          {line.title}
        </div>
      </Card>
    );
  }
}


export default Line;
