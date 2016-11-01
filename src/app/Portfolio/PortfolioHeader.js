import React from 'react';
import Anchor from 'widgets/blank-anchor';

import './PortfolioHeader.css';


function PortfolioHeader() {
  return (
    <div className="PortfolioHeader">
      <Anchor href="https://au.linkedin.com/in/xiaofan-wu-b1320659">
        <i className="fa fa-linkedin-square" />
      </Anchor>
      <Anchor href="https://github.com/xiaofan2406">
        <i className="fa fa-github" />
      </Anchor>
      <Anchor href="http://stackoverflow.com/users/972527/xiaofan2406">
        <i className="fa fa-stack-overflow" />
      </Anchor>
    </div>
  );
}


export default PortfolioHeader;
