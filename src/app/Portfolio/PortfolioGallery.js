import React from 'react';
import { connect } from 'react-redux';
import { getInfoList } from 'store/selectors';
import { Row, Col } from 'antd';
import ItemCard from 'widgets/ItemCard';

class PortfolioGallery extends React.PureComponent {
  get = () => {}

  render() {
    const { infoList } = this.props;

    return (
      <Row gutter={16}>
        {infoList.map((item, index) => (
          <Col xs={12} sm={12} md={6} lg={4} key={index}>
            <div className="PortfolioGallery-item">
              <ItemCard item={item} height={300} />
            </div>
          </Col>
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
