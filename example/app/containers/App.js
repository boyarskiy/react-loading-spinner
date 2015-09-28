import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RouteHandler } from 'react-router';
import * as Actions from '../actions/';
import SearchForm from '../components/searchForm';

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Actions, dispatch)
)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  static contextTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { cityInput } = this.props.searchForm;
    const { loading } = this.props.weatherInfo;

    return (
      <div>
        <SearchForm searchOnSubmit={this.searchOnSubmit.bind(this)}
                    onChangeInput={this.onChangeInput.bind(this)}
                    cityInput={cityInput}/>

        {this.props.children}
      </div>
    );
  }

  searchOnSubmit(e) {
    e.preventDefault();
    const { cityInput } = this.props.searchForm;
    this.context.history.pushState(null, '/' + cityInput);
  }

  onChangeInput(e) {
    this.props.changeSearchFormInput(e.target.value);
  }
}
