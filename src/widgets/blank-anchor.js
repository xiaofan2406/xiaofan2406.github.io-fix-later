import React from 'react';


function BlankAnchor({ children, ...rest }) {
  return <a {...rest} target="_blank" rel="noopener noreferrer">{children}</a>;
}

BlankAnchor.propTypes = {
  children: React.PropTypes.node.isRequired
};


export default BlankAnchor;
