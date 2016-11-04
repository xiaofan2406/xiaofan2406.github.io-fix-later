import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'redux-player';
import { getInfoList } from 'store/selectors';
import IconButton from 'widgets/IconButton';
import { getIsLooping, getIsShuffle, getCanPrevious, getCanNext, getIsPlaying } from 'redux-player/src/selectors';
import classnames from 'classnames';

import PortfolioPlayerBanner from './PortfolioPlayerBanner';
import PortfolioPlayerDisplay from './PortfolioPlayerDisplay';
import './PortfolioPlayer.css';

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

class PortfolioPlayer extends React.PureComponent {
  state = {
    hover: false
  };

  componentDidMount() {
    const { infoList, setFrames, toggleLoop, play } = this.props;

    setFrames(
      infoList.map(() => ({ // index is the same, so no extra needed
        action: () => new Promise((resolve) => {
          delay(4000).then(resolve);
        })
      }))
    );

    toggleLoop(); // set looping to true

    this.autoStartTimer = setTimeout(() => {
      play();
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.autoStartTimer);
  }

  hover = () => {
    this.setState({
      hover: true
    });
  }

  blur = () => {
    this.setState({
      hover: false
    });
  }

  render() {
    const {
      infoList,
      isPlaying, isShuffle, canPrevious, canNext,
      next, previous, pause, stop, toggleShuffle, play
    } = this.props;

    const controlClasses = classnames({
      'PortfolioPlayer-control': true,
      show: this.state.hover
    });

    return (
      <div className="PortfolioPlayer" onMouseEnter={this.hover} onMouseLeave={this.blur}>
        <PortfolioPlayerBanner />
        <div className={controlClasses}>
          <div>
            <IconButton title="Previous" onClick={previous} disabled={!canPrevious}>
              <i className="fa fa-step-backward" aria-hidden="true" />
            </IconButton>
            {isPlaying
              ? <IconButton title="Pause" onClick={pause} size={5}>
                <i className="fa fa-pause-circle" aria-hidden="true" />
              </IconButton>
              : <IconButton title="Start" onClick={play} size={5}>
                <i className="fa fa-play-circle" aria-hidden="true" />
              </IconButton>
            }
            <IconButton title="Stop" onClick={stop}>
              <i className="fa fa-stop-circle" aria-hidden="true" />
            </IconButton>
            <IconButton title="Next" onClick={next} disabled={!canNext}>
              <i className="fa fa-step-forward" aria-hidden="true" />
            </IconButton>
          </div>

          <div>
            <IconButton title="Shuffle" onClick={toggleShuffle} active={isShuffle}>
              <i className="fa fa-random" aria-hidden="true" />
            </IconButton>
          </div>
        </div>

        {infoList.map((item, index) => ( // render all to fake transition for animation
          <PortfolioPlayerDisplay item={item} index={index} key={index} />
        ))}
      </div>
    );
  }
}

PortfolioPlayer.propTypes = {
  infoList: React.PropTypes.array.isRequired,

  isShuffle: React.PropTypes.bool.isRequired,
  canNext: React.PropTypes.bool.isRequired,
  canPrevious: React.PropTypes.bool.isRequired,
  isPlaying: React.PropTypes.bool.isRequired,
  setFrames: React.PropTypes.func.isRequired,
  toggleLoop: React.PropTypes.func.isRequired,
  toggleShuffle: React.PropTypes.func.isRequired,
  next: React.PropTypes.func.isRequired,
  previous: React.PropTypes.func.isRequired,
  pause: React.PropTypes.func.isRequired,
  stop: React.PropTypes.func.isRequired,
  play: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  infoList: getInfoList(state),

  isLooping: getIsLooping(state),
  isShuffle: getIsShuffle(state),
  canNext: getCanNext(state),
  canPrevious: getCanPrevious(state),
  isPlaying: getIsPlaying(state)
});


export default connect(mapStateToProps, {
  setFrames: actions.setFrames,
  toggleLoop: actions.toggleLoop,
  toggleShuffle: actions.toggleShuffle,
  next: actions.next,
  previous: actions.previous,
  start: actions.start,
  pause: actions.pause,
  stop: actions.stop,
  play: actions.play
})(PortfolioPlayer);
