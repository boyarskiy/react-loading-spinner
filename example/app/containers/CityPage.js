import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RouteHandler } from 'react-router';
import * as Actions from '../actions/';
import SearchForm from '../components/searchForm';
import { isLoaded } from '../reducers/weatherInfo';

function loadData(props) {
  const city = props.params.city;
  props.getWeather(city);
}

@connect(
  state => ({...state}),
  dispatch => bindActionCreators(Actions, dispatch)
)
export default class CityPage extends Component {
  static propTypes = {
    params: PropTypes.shape({
      city: PropTypes.string.isRequired
    }).isRequired  
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { store } = this.context;
    if(!isLoaded(store.getState())) {
      loadData(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.params.city != this.props.params.city) {
      loadData(nextProps);
    }
  }

  render () {
    const { data, loading } = this.props.weatherInfo;

    return (
      <div>
        {data.name}
      </div>
    );
  }
}
