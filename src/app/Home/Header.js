import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import Anchor from 'widgets/blank-anchor';
import { getHomeHash } from 'store/selectors';
import withRouter from 'hocs/with-router';

import './Header.css';
import hashConfig from './hash-config';
import { actions } from './home-dux';


class Header extends React.Component {
  static propTypes = {
    router: React.PropTypes.object.isRequired,
    hash: React.PropTypes.string.isRequired,
    setHash: React.PropTypes.func.isRequired
  };

  routeTo = (item) => {
    const { setHash, router } = this.props;
    setHash(item.key);
    router.transitionTo({
      pathname: '/',
      hash: item.key
    });
  }

  render() {
    const trueHash = this.props.hash || '#me';

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
          selectedKeys={[trueHash]}
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

const mapStateToProps = state => ({
  hash: getHomeHash(state)
});


export default connect(mapStateToProps, { setHash: actions.setHash })(withRouter()(Header));
