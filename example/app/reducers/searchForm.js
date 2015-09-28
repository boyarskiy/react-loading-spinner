
export default function searchForm(state = { cityInput: '' }, action) {
  if(action.type === 'INPUT_CHANGED') {
    return {...state, cityInput: action.value}
  }
  return state;
}

