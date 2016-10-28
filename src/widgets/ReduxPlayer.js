import React from 'react';


function createFrame(globalDuration, { action, duration }) {
  return () => new Promise((resolve) => {
    action();
    const timer = duration || globalDuration;
    setTimeout(resolve, timer);
  });
}

function shuffleArray(array) {
  const temp = array.map(item => item);
  for (let i = temp.length; i; i--) {
    const j = Math.floor(Math.random() * i);
    [temp[i - 1], temp[j]] = [temp[j], temp[i - 1]];
  }
  return temp;
}

// TODO refactor this into a new project
class ReduxPlayer extends React.PureComponent {
  static propTypes = {
    // { action, duration }
    frames: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    duration: React.PropTypes.number, // ms
    loop: React.PropTypes.bool,
    shuffle: React.PropTypes.bool
  };

  static defaultProps = {
    loop: false,
    shuffle: false
  };

  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
  }

  async start() {
    const { frames, loop, shuffle, duration } = this.props;

    const frameFuncs = frames.map(item => createFrame(duration, item));

    do {
      const frameList = shuffle ? shuffleArray(frameFuncs) : frameFuncs;

      for (const frame of frameList) {
        await frame();
      }
    } while (loop);
  }

  render() {
    return (
      <div>ReduxPlayer
        <button onClick={this.start}>play</button>
      </div>
    );
  }
}


export default ReduxPlayer;
