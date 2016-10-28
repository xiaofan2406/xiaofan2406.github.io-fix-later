import React from 'react';
import { connect } from 'react-redux';
import { getInfoList } from 'store/selectors';
import { Row, Col } from 'antd';


class PortfolioGallery extends React.PureComponent {
  get = () => {}

  render() {
    const { infoList } = this.props;

    return (
      <Row gutter={16}>
        {infoList.map(item => (
          <Col xs={24} sm={12} md={6} lg={4} key={item.slug}>{item.slug}</Col>
        ))}
      </Row>
    );
  }
}

PortfolioGallery.propTypes = {
  infoList: React.PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  infoList: getInfoList(state)
});


export default connect(mapStateToProps)(PortfolioGallery);
