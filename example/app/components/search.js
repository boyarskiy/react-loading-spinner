import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    const { 
      submitSearchForm,
      searchInput,
      searchInputOnChange 
    } = this.props;

    return (
      <form onSubmit={submitSearchForm}>
        <input type='text' value={searchInput} onChange={searchInputOnChange} />
        <input type='submit' />
      </form>
    )
  }
}
