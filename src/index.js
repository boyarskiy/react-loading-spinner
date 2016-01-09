import React, { PropTypes, Component } from 'react';

export default class Loading extends Component {
  constructor() {
    super();
  }

  renderChildrenComponent() {
    const { children } = this.props;
    return children ? children : null;
  }

  renderCustomSpinner() {
    const Spinner = this.props.spinner;
    return <Spinner />;
  }

  renderSpinner() {
    const { spinner } = this.props;
    return !spinner ? <div>Loading...</div> : this.renderCustomSpinner();
  }

  render() {
    const { isLoading } = this.props;
    return isLoading ? this.renderSpinner() : this.renderChildrenComponent();
  }
}

Loading.defaultProps = {
  isLoading: false
};
