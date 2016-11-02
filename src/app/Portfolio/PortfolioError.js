import React from 'react';
import Anchor from 'widgets/blank-anchor';

import './PortfolioError.css';


function PortfolioError({ error }) {
  console.error(error);

  return (
    <div className="PortfolioError">
      <div className="PortfolioError-icon">
        <i className="fa fa-frown-o" aria-hidden="true" />
      </div>
      <div className="PortfolioError-text">
        <p>Oops!</p>
        <p>Something went wrong.</p>
        <p>Try refresh the page,</p>
        <p>
          or <Anchor href="https://github.com/xiaofan2406/xiaofan2406.github.io/issues/new">let me know.</Anchor>
        </p>
      </div>
    </div>
  );
}

PortfolioError.propTypes = {
  error: React.PropTypes.object
};


export default PortfolioError;
