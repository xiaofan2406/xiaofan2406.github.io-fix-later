import React from 'react';
import { Menu, Icon } from 'antd';
import withLocation from 'hocs/with-location';
import withRouter from 'hocs/with-router';
import routes from 'src/routes';

import './Header.css';
import Social from './Social';


class Header extends React.Component {
  static propTypes = {
    // from withLocation
    location: React.PropTypes.object.isRequired,
    // from withRouter
    router: React.PropTypes.object.isRequired
  };

  routeTo = (item) => {
    this.props.router.transitionTo(item.key);
  }

  render() {
    const { location } = this.props;
    return (
      <div className="Header-root">
        <Social />
        <Menu
          onClick={this.routeTo}
          mode="horizontal"
          selectedKeys={[location.pathname]}
        >
          {routes.map(({ pattern, icon, name }) => (
            <Menu.Item key={pattern}>
              <Icon type={icon} />{name}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}


export default withRouter()(withLocation()(Header));
