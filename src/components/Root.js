import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory} />
    </Provider>
  );
}
