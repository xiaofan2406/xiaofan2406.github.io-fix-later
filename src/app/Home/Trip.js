import React from 'react';
import { connect } from 'react-redux';

import { actions } from './home-dux';
import './Trip.css';


function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


class Trip extends React.PureComponent {
  static propTypes = {
    setHash: React.PropTypes.func.isRequired,
    setActiveLineTitle: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.startTrip = this.startTrip.bind(this);
  }

  async startTrip() {
    const { setHash, setActiveLineTitle } = this.props;
    await delay(500);
    setHash('#me');
    await delay(2000);
    setActiveLineTitle('Xiaofan Wu');
    await delay(2000);
    setActiveLineTitle('I write code');
    await delay(2000);
    setActiveLineTitle('I play games');
    await delay(2000);
    setHash('#work');
    await delay(2000);
    setActiveLineTitle('EEA');
    await delay(2000);
    setActiveLineTitle('myCPD');
    await delay(2000);
    setHash('#projects');
    await delay(3000);
    setActiveLineTitle('react-starter-kit');
    await delay(3000);
    setActiveLineTitle('vue-starter-kit');
    await delay(3000);
    setActiveLineTitle('vue-vue');
  }

  render() {
    return (
      <div className="Trip-root">
        <button onClick={this.startTrip}>Trip</button>
      </div>
    );
  }
}


export default connect(null, {
  setHash: actions.setHash,
  setActiveLineTitle: actions.setActiveLineTitle
})(Trip);
