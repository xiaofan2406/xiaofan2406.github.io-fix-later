import React from 'react';
import { Card } from 'antd';

import './Line.css';


class Line extends React.PureComponent {
  static propTypes = {
    line: React.PropTypes.object.isRequired,
    onActiveLine: React.PropTypes.func.isRequired
  };

  state = {
    active: false
  };

  activateLine = () => {
    if (this.state.active === false) {
      this.setState({ active: true });
      this.props.onActiveLine();
    }
  }

  deactivateLine = () => {
    if (this.state.active === true) {
      this.setState({ active: false });
    }
  }

  render() {
    const { line } = this.props;
    const { active } = this.state;
    return (
      <Card
        bordered={false}
        className="Line-root"
        onMouseEnter={this.activateLine}
        onMouseLeave={this.deactivateLine}
        onTouchStart={this.activateLine}
      >
        <div className={`Line-title animated ${active && 'jello'} infinite`}>
          {line.title}
        </div>
      </Card>
    );
  }
}


export default Line;
