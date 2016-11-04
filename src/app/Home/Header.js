import React from 'react';
import { Menu, Icon } from 'antd';
import { withRouter, withLocation } from 'react-router-v4-hocs';
import Social from '../common/Social';

import './Header.css';
import hashConfig from './hash-config';


class Header extends React.Component {
  static propTypes = {
    // from withLocation
    location: React.PropTypes.object.isRequired,
    // from withRouter
    router: React.PropTypes.object.isRequired
  };

  routeTo = (item) => {
    this.props.router.transitionTo({
      ...this.props.location,
      hash: item.key
    });
  }

  render() {
    const { location } = this.props;
    const fakeHash = location.hash ? location.hash : '#me';
    return (
      <div className="Header">
        <Social />

        <Menu
          className="Header-menu"
          onClick={this.routeTo}
          mode="horizontal"
          selectedKeys={[fakeHash]}
        >
          {hashConfig.map(({ hash, icon, name }) => (
            <Menu.Item key={hash}>
              <Icon type={icon} />{name}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}


export default withRouter(withLocation(Header));
