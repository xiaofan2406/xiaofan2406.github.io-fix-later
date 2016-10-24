import React from 'react';
import { connect } from 'react-redux';
import { getHomeActiveLineTitle } from 'store/selectors';

import './ActiveLineDisplay.css';


function ActiveLineDisplay({ line, activeLineTitle }) {
  return (
    <div
      className={`ActiveLineDisplay-root ${activeLineTitle === line.title ? 'active' : ''}`}
    >
      {line.content}
    </div>
  );
}

ActiveLineDisplay.propTypes = {
  line: React.PropTypes.object.isRequired,
  activeLineTitle: React.PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  activeLineTitle: getHomeActiveLineTitle(state)
});


export default connect(mapStateToProps)(ActiveLineDisplay);
