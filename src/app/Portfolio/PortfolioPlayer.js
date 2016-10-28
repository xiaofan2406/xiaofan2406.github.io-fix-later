import React from 'react';
import { connect } from 'react-redux';
import ReduxPlayer from 'widgets/ReduxPlayer';
import { getCurrent, getInfoList } from 'store/selectors';

import { actions } from './portfolio-dux';

class PortfolioPlayer extends React.PureComponent {
  state = {
    loop: false,
    shuffle: false
  };

  changeLoop = () => {
    this.setState({
      loop: !this.state.loop
    });
  }

  changeShuffle = () => {
    this.setState({
      shuffle: !this.state.shuffle
    });
  }

  render() {
    const { current, setCurrent, infoList } = this.props;
    const { shuffle, loop } = this.state;

    const frames = infoList.map(item => ({
      action: () => setCurrent(item.slug)
    }));

    return (
      <div>
        PortfolioPlayer
        <ReduxPlayer
          duration={2000}
          frames={frames}
          loop={loop}
          shuffle={shuffle}
        />
        <br />
        {current.slug}
        <br />
        <button onClick={this.changeShuffle}>shuffle</button>
        <button onClick={this.changeLoop}>loop</button>
      </div>
    );
  }
}

PortfolioPlayer.propTypes = {
  current: React.PropTypes.object.isRequired,
  setCurrent: React.PropTypes.func.isRequired,
  infoList: React.PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  current: getCurrent(state),
  infoList: getInfoList(state)
});


export default connect(mapStateToProps, { setCurrent: actions.setCurrent })(PortfolioPlayer);
