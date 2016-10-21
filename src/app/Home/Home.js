import React from 'react';
import { connect } from 'react-redux';
import { getHomeHash } from 'store/selectors';

import './Home.css';
import Header from './Header';
import hashConfig from './hash-config';
import { actions } from './home-dux';


class Home extends React.PureComponent {
  componentWillMount() {
    const { setHash, location } = this.props;
    setHash(location.hash);
  }

  render() {
    const { hash } = this.props;
    const trueHash = hash || '#me';

    const Component = hashConfig.filter(item => item.hash === trueHash)[0].component;

    return (
      <div className="Home-root">
        <div className="Home-header">
          <Header />
        </div>
        <div className="Home-main">
          <Component />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  location: React.PropTypes.object.isRequired,
  setHash: React.PropTypes.func.isRequired,
  hash: React.PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  hash: getHomeHash(state)
});


export default connect(mapStateToProps, { setHash: actions.setHash })(Home);
