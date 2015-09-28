import React from 'react';
import Search from './components/search';

export default class App {
  render() {
    return (
      <div>
        <Search />
      </div>
    )
  }
}

React.render(<App/>, document.body);

