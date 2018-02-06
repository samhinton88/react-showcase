import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import routes from '../routes';


const Root = ({ store }) => {

  console.log(store)
  return (
    <Provider store={store}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
