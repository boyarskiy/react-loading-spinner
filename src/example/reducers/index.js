import { combineReducers } from 'redux';
import searchForm from './searchForm';
import weatherInfo from './weatherInfo';

const rootReducer = combineReducers({
  searchForm,
  weatherInfo
});

export default rootReducer;
