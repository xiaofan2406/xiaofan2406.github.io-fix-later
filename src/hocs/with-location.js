/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { LocationSubscriber } from 'react-router/Broadcasts';


/**
 * withLocation hoc for react-router v4
 */
export default () => MyComponent => (
  class withLocation extends React.PureComponent {
    withLocation = location => (
      <MyComponent
        {...this.props}
        location={location}
      />
    )

    render() {
      return (
        <LocationSubscriber>
          {this.withLocation}
        </LocationSubscriber>
      );
    }
  }
);
