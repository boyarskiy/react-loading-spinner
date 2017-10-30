import React from 'react';

const DefaultSpinner = () => <div className='defaultSpinner'></div>;

const Loading = (props) => {
  const {
    isLoading,
    loadingClassName,
    spinner,
    children
  } = props;

  const renderChildrenComponent = (children) => children ? children : null;

  const renderCustomSpinner = (spinner, loadingClassName) => {
    const Spinner = spinner;
    return (
      <div className={loadingClassName}>
        <Spinner />
      </div>
    );
  }

  const renderDefaultSpinner = (loadingClassName) => {
    return (
      <div className={loadingClassName}>
        <DefaultSpinner />
      </div>
    );
  }

  const renderSpinner = (spinner, loadingClassName) => {
    return !spinner ? renderDefaultSpinner(loadingClassName) : renderCustomSpinner(spinner, loadingClassName);
  }

  return isLoading ? renderSpinner(spinner, loadingClassName) : renderChildrenComponent(children);
}

Loading.defaultProps = {
  isLoading: false,
  loadingClassName: 'loadingContiner'
};

export default Loading;
