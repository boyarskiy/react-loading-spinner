import React, { PropTypes, Component } from 'react';
import DefaultSpinner from './defaultSpinner';

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

  renderDefaultSpinner() {
    return <DefaultSpinner />;
  }

  renderSpinner(spinner, loadingClassName) {
    return !spinner ? this.renderDefaultSpinner() : this.renderCustomSpinner(spinner, loadingClassName);
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
