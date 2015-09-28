import React, { Component, PropTypes } from 'react';

export default class searchForm extends Component {
  static propTypes = {
    searchOnSubmit: PropTypes.func,
    onChangeInput: PropTypes.func,
    cityInput: PropTypes.string
  }

  render() {
    const { 
      searchOnSubmit,
      onChangeInput,
      cityInput
    } = this.props;
    
    return (
      <form onSubmit={searchOnSubmit}>
        <input type='text'
               placeholder='Your city name'
               value={cityInput}
               onChange={onChangeInput} />

        <input type='submit'
               value='Search' />
      </form>
    );
  }

}
