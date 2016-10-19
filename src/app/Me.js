import React from 'react';
import { Card } from 'antd';


class Me extends React.PureComponent {
  get =() => {}
  render() {
    return (
      <Card title="Me" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }
}


export default Me;
