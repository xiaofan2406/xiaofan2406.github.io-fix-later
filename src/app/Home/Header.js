import React from 'react';
import { Menu, Icon } from 'antd';
import withLocation from 'hocs/with-location';
import withRouter from 'hocs/with-router';
import Anchor from 'widgets/blank-anchor';

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
      <div className="Header-root">
        <div className="Header-social">
          <Anchor href="https://au.linkedin.com/in/xiaofan-wu-b1320659">
            <i className="fa fa-linkedin-square" />
          </Anchor>
          <Anchor href="https://github.com/xiaofan2406">
            <i className="fa fa-github" />
          </Anchor>
          <Anchor href="http://stackoverflow.com/users/972527/xiaofan2406">
            <i className="fa fa-stack-overflow" />
          </Anchor>
        </div>

        <Menu
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


export default withRouter()(withLocation()(Header));
