import React from 'react';

export default class Content extends React.Component {
  constructor() {
    super();
  }

  render() {
    if(!this.props.loadedContent) {
      return null;
    } else {
      return <div>Content loaded!</div>;
    }
  }
}
