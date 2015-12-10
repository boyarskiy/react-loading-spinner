import React, { Component, PropTypes } from 'react';

export default class Spinner extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node
  }

  render() {
    const { loading, children } = this.props;
    return (
      <div>
        { loading ? 'Loading...' : children}
      </div>
    );
  }
}
