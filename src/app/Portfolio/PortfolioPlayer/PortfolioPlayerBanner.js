import React from 'react';
import { connect } from 'react-redux';
import { getCurrent } from 'redux-player/src/selectors';
import { getInfoList } from 'store/selectors';

import './PortfolioPlayerBanner.css';


function PortfolioPlayerBanner({ banner }) {
  return (
    <div className="PortfolioPlayerBanner">
      {banner}
    </div>
  );
}

PortfolioPlayerBanner.propTypes = {
  banner: React.PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  const current = getCurrent(state);
  const infoList = getInfoList(state);
  return {
    banner: infoList[current].banner
  };
};


export default connect(mapStateToProps)(PortfolioPlayerBanner);
