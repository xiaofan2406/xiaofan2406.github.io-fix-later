import React from 'react';
import { Spin } from 'antd';


// options must have a preload functon which returns a promise
export default options => MyComponent =>
  class PreAxios extends React.PureComponent {
    state = {
      data: null
    };

    componentWillMount() {
      this.loadData();
    }

    componentWillUnmount() {
      this.promise.cancel();
    }

    loadData = () => {
      this.promise = options.preload()
      .then((data) => {
        this.setState({ data });
      })
      .catch(console.error);
    }

    render() {
      return (
        this.state.data
        ? <MyComponent data={this.state.data} {...this.props} />
        : <Spin />
      );
    }
  };
