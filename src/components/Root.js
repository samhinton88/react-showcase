import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';

import ReactEyeApp from './ReactEyeApp';
import App from './App';
import ParakeatApp from './ParakeatApp';
import ComponentsApp from './ComponentsApp';


const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="reacteye" component={ReactEyeApp} />
        <Route path="parakeat" component={ParakeatApp} />
        <Route path="components" component={ComponentsApp} />

      </Router>
    </Provider>
  );
}

export default Root;
