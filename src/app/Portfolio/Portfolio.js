import React from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { isListLoading, getListError } from 'store/selectors';
import { getData } from 'src/server';

import { actions } from './portfolio-dux';
import PortfolioHeader from './PortfolioHeader';
import PortfolioMain from './PortfolioMain';
import PortfolioFooter from './PortfolioFooter';
import './Portfolio.css';


class Portfolio extends React.PureComponent {
  componentDidMount() {
    const { loadingSuccess, loadingFail } = this.props;

    getData()
    .then(loadingSuccess)
    .catch(loadingFail);
  }

  render() {
    const { loading, error } = this.props;

    if (loading) {
      return <Spin />;
    }

    if (error) { // TODO error component
      return <p>{JSON.stringify(error)}</p>;
    }

    return (
      <div className="Portfolio">
        <div className="Portfolio-header">
          <PortfolioHeader />
        </div>
        <div className="Portfolio-main">
          <PortfolioMain />
        </div>
        <div className="Portfolio-footer">
          <PortfolioFooter />
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  error: React.PropTypes.object,
  loadingSuccess: React.PropTypes.func.isRequired,
  loadingFail: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: isListLoading(state),
  error: getListError(state)
});


export default connect(mapStateToProps, {
  loadingSuccess: actions.loadingSuccess,
  loadingFail: actions.loadingFail
})(Portfolio);
