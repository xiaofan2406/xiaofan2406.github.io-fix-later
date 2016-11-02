import React from 'react';

import Footer from '../common/Footer';
import Social from '../common/Social';
import StaticContent from './StaticContent';
import './Piece.css';


function Piece() {
  return (
    <div className="Piece">
      <div className="Piece-header" />
      <div className="Piece-main">
        <div className="Piece-main-staic">
          <StaticContent />
        </div>
        <div className="Piece-main-dynamic">
          dynamic
        </div>
        <div className="Piece-main-contact">
          <Social />
        </div>
        <div className="Piece-main-projects">
          projects
        </div>
      </div>
      <div className="Piece-footer">
        <Footer />
      </div>
    </div>
  );
}


export default Piece;
