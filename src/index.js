import React from 'react';

export default (isLoading, Spinner) => DecoratedComponent => {
  const displayName = 
    DecoratedComponent.displayName ||
    DecoratedComponent.name ||
    'Component';

  return class LoadingDecorator extends DecoratedComponent {
    static displayName = `LoadingDecorator(${displayName})`;

    constructor(props) {
      super(props);
      this.state = {
        loading: isLoading(props)
      }
    }

    componentWillReceiveProps(nextProps) {
      super.componentWillReceiveProps(nextProps);
      this.setState({
        loading: isLoading(nextProps)
      });
    }

    render() {
      return (
        <Spinner loading={this.state.loading}>
          { this.state.loading ? null : super.render() }
        </Spinner>
      );
    }
  }
}
