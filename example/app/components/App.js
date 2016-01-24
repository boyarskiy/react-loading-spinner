import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Spinner from './Spinner';

import Loading from 'react-loading-spinner';
import 'react-loading-spinner/src/css/index.css';

import '../css/index.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      customLoading: false,
      customLoadingContent: '',
      defaultLoading: false,
      defaultLoadingContent: ''
    }
  }

  render() {
    return (
      <div>
        <div className='base'>
          <button onClick={this.customLoadingHandler.bind(this)}
                  className='btn'>Start custom loading</button>

          <Loading isLoading={this.state.customLoading} loadingClassName='loading' spinner={Spinner}>
            <Content loadedContent={this.state.customLoadingContent} />
          </Loading>
        </div>

        <div className='base'>
          <button onClick={this.defaultLoadingHandler.bind(this)}
                  className='btn'>Start default loading</button>

          <Loading isLoading={this.state.defaultLoading} loadingClassName='defloading'>
            <Content loadedContent={this.state.defaultLoadingContent} />
          </Loading>
        </div>
      </div>
    );
  }

  // fetch imitation
  customLoadingHandler() {
    this.setState({
      customLoading: true
    });
    setTimeout(() => {
      this.setState({
        customLoading: false,
        customLoadingContent: 'Content loaded!'
      })
    }, 2000);
  }

  defaultLoadingHandler() {
    this.setState({
      defaultLoading: true
    });
    setTimeout(() => {
      this.setState({
        defaultLoading: false,
        defaultLoadingContent: 'Content loaded!'
      })
    }, 2000);
  }
}
