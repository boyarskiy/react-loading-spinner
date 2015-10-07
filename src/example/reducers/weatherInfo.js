import 'babel-core/polyfill';

export default function weatherInfo(state = {
  data: {},
  error: false
}, action) {

  switch(action.type) {
    case 'WEATCHER_INFO_REQUESTED':
      // console.log('WEATCHER_INFO_REQUESTED: ', action)
      return Object.assign({}, state, {loading: true});

    case 'WEATCHER_INFO_RECEIVED':
      // console.log('WEATCHER_INFO_RECEIVED: ', action)
      return Object.assign({}, state, {data: action.result, loading: false});

    case 'WEATCHER_INFO_FAILED':
      // console.log('WEATCHER_INFO_FAILED: ', action)
      return Object.assign({}, state, {error: action.error, loading: false, loaded: false});

    default:
      return state;
  }
}

export function isLoaded(state) {
  return state.weatherInfo && state.weatherInfo.loaded;
}

