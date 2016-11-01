import React from 'react';
import { connect } from 'react-redux';
import { getCurrent } from 'redux-player/src/selectors';
import classnames from 'classnames';
import ItemCard from 'widgets/ItemCard';

import './PortfolioPlayerDisplay.css';


function PortfolioPlayerDisplay({ item, index, current }) {
  const classes = classnames({
    PortfolioPlayerDisplay: true,
    active: index === current
  });

  return (
    <div className={classes}>
      {index === current && (
        <ItemCard item={item} />
      )}
    </div>
  );
}

PortfolioPlayerDisplay.propTypes = {
  item: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
  current: React.PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  current: getCurrent(state)
});


export default connect(mapStateToProps)(PortfolioPlayerDisplay);
