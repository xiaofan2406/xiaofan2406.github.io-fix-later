import React from 'react';
import { Card } from 'antd';
import Anchor from 'widgets/blank-anchor';

import './ItemCard.css';


function ItemCard({ item, height, ...rest }) {
  return (
    <Card
      {...rest}
      className="ItemCard"
      title={item.name}
      style={{ height }}
    >
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
      {item.type !== 'static' && (
        <div className="ItemCard-action">
          <Anchor href={item.link} title={item.name}>
            <i className="fa fa-arrow-right" aria-hidden="true" />
          </Anchor>
        </div>
      )}
    </Card>
  );
}

ItemCard.propTypes = {
  item: React.PropTypes.object.isRequired,
  height: React.PropTypes.number
};


export default ItemCard;
