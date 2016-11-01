import React from 'react';
import { Card } from 'antd';

import './ItemCard.css';


function ItemCard({ item, height, ...rest }) {
  return (
    <Card
      {...rest}
      className="ItemCard"
      title={item.name}
      extra={item.type === 'static' ? '' : (
        <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}>View</a>
      )}
      style={{ height }}
    >
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
    </Card>
  );
}

ItemCard.propTypes = {
  item: React.PropTypes.object.isRequired,
  height: React.PropTypes.number
};


export default ItemCard;
