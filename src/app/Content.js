import React from 'react';
import routes from 'src/routes';
import { Spin } from 'antd';

import './Content.css';
import Display from './Display';


// this component is purely for faking transition state to
class Content extends React.PureComponent {
  static propTypes = {
    location: React.PropTypes.object.isRequired
  };

  state = {
    loading: true,
    data: {}
  };

  componentWillMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    clearTimeout(this.deferTimer);
    this.loadData(nextProps);
  }

  loadData = (props) => {
    const { location } = props;
    if (this.props.location.pathname !== location.path) {
      this.setState({ loading: true });

      const target = routes.filter(route => route.pattern === location.pathname)[0];
      console.log(target);
      // const self = this;
      this.deferTimer = setTimeout(() => {
        this.setState({
          loading: false,
          data: require(`src/routes/${target.data}`) // eslint-disable-line
        });
      }, 400);
    }
  }

  render() {
    return (
      <div className="Content-root">
        {this.state.loading ? <Spin /> : <Display data={this.state.data} />}
      </div>
    );
  }
}


export default Content;
