import React, { Component, PropTypes } from 'react';

export default class LoadingSpinner extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node,
    Spinner: PropTypes.func
  }

  render() {
    const { loading, children, Spinner } = this.props;

    if(loading) {
      return <Spinner />
    }

    return <div>{children}</div>
  }
}
