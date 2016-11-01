import React from 'react';
import { connect } from 'react-redux';
import { getDisplayMode } from 'store/selectors';
import { Button } from 'antd';

import { actions } from './portfolio-dux';
import PortfolioPlayer from './PortfolioPlayer';
import PortfolioGallery from './PortfolioGallery';
import './PortfolioMain.css';


function PortfolioMain({ mode, switchMode }) {
  return (
    <div className="PortfolioMain">
      <div className="PortfolioMain-menu">
        <Button
          onClick={switchMode}
          type="ghost"
          shape="circle-outline"
          icon={mode === 'player' ? 'appstore-o' : 'mobile'}
          title={mode === 'player' ? 'view in Gallery' : 'view in Player'}
        />
      </div>
      <div className="PortfolioMain-content">
        {mode === 'player' ? <PortfolioPlayer /> : <PortfolioGallery />}
      </div>
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


export default connect(mapStateToProps, {
  switchMode: actions.switchMode
})(PortfolioMain);
