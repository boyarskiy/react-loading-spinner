import React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import createHistory from 'history/lib/createHashHistory';
import configureStore  from './store/';
import App from './containers/App';
import CityPage from './containers/CityPage';

const store = configureStore();
const history = createHistory({
  queryKey: false
});

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route path='/:city' component={CityPage}/>
        </Route>
      </Router>
    }
  </Provider>,
  document.body
);
