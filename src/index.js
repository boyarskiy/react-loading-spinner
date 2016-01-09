import React, { PropTypes, Component } from 'react';

export default class Loading extends Component {

  renderChildrenComponent(children) {
    return children ? children : null;
  }

  renderCustomSpinner(spinner, loadingClassName) {
    const Spinner = spinner;
    return (
      <div className={loadingClassName}>
        <Spinner />
      </div>
    );
  }

  renderSpinner(spinner, loadingClassName) {
    return !spinner ? <div className={loadingClassName}>Loading...</div> : this.renderCustomSpinner(spinner, loadingClassName);
  }

  render() {
    const {
      isLoading,
      loadingClassName,
      spinner,
      children
    } = this.props;

    return isLoading ? this.renderSpinner(spinner, loadingClassName) : this.renderChildrenComponent(children);
  }
}

Loading.defaultProps = {
  isLoading: false,
  loadingClassName: 'loadingContiner'
};
