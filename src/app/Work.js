import React from 'react';
import { Card } from 'antd';


class Work extends React.PureComponent {
  get = () => {}
  render() {
    return (
      <Card title="Work" bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }
}


export default Work;
