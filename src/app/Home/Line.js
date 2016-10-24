import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { getHomeHoveredLineTitle } from 'store/selectors';

import './Line.css';
import { actions } from './home-dux';


class Line extends React.PureComponent {
  static propTypes = {
    line: React.PropTypes.object.isRequired,
    hoveredLineTitle: React.PropTypes.string.isRequired,
    setActiveLineTitle: React.PropTypes.func.isRequired,
    blurActiveLine: React.PropTypes.func.isRequired
  };


  activateLine = () => {
    const { setActiveLineTitle, line } = this.props;
    setActiveLineTitle(line.title);
  }

  blurLine = () => {
    const { blurActiveLine } = this.props;
    blurActiveLine();
  }

  render() {
    const { line, hoveredLineTitle } = this.props;
    const hovered = hoveredLineTitle === line.title;
    return (
      <Card
        bordered={false}
        className="Line-root"
        onMouseEnter={this.activateLine}
        onMouseLeave={this.blurLine}
        onTouchStart={this.activateLine}
      >
        <div className={`Line-title animated ${hovered && 'jello'} infinite`}>
          {line.title}
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  hoveredLineTitle: getHomeHoveredLineTitle(state)
});

export default connect(mapStateToProps, {
  setActiveLineTitle: actions.setActiveLineTitle,
  blurActiveLine: actions.blurActiveLine
})(Line);
