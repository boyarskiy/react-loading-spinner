import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Spinner from './Spinner';
import Loading from 'react-loading-spinner';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      loadedContent: ''
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick.bind(this)}>Start loading</button>

        <Loading isLoading={this.state.isLoading} loadingClassName={'loading'} spinner={Spinner}>
          <Content loadedContent={this.state.loadedContent} />
        </Loading>

      </div>
    );
  }

  // fetch imitation
  handleOnClick() {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        loadedContent: 'Content loaded!'
      })
    }, 2000);
  }
}
