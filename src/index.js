import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';

import Root from './components/Root';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Root store={createStoreWithMiddleware(reducers)} />,
  document.getElementById('container')
);
