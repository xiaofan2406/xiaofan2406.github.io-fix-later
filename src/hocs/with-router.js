/* eslint-disable react/prefer-stateless-function */
import React from 'react';

/**
 * withRouter hoc for react-router v4
 */
export default () => MyComponent => (
  class withRouter extends React.PureComponent {
    static contextTypes = {
      router: React.PropTypes.object
    }

    render() {
      return (
        <MyComponent
          {...this.props}
          router={this.context.router}
        />
      );
    }
  }
);
