import React from 'react';
import { connect } from 'react-redux';
import { getDisplayMode } from 'store/selectors';

import { actions } from './portfolio-dux';
import PortfolioPlayer from './PortfolioPlayer';
import PortfolioGallery from './PortfolioGallery';


function PortfolioMain({ mode, switchMode }) {
  return (
    <div>
      {mode === 'player' ? <PortfolioPlayer /> : <PortfolioGallery />}
      <button onClick={switchMode}>switch mode</button>
    </div>
  );
}

PortfolioMain.propTypes = {
  mode: React.PropTypes.string.isRequired,
  switchMode: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  mode: getDisplayMode(state)
});


export default connect(mapStateToProps, { switchMode: actions.switchMode })(PortfolioMain);
