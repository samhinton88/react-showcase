import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';

import ReactEyeApp from './ReactEyeApp';
import App from './App';
import ParakeatApp from './ParakeatApp';
import ComponentsApp from './ComponentsApp';
import AdminPanel from './AdminPanel';
import SignIn from './SignIn';
import SignUpForm from './SignUpForm';
import RequireAuth from './auth/require_auth';
import Signout from './Signout';
import FourCardSquare from './FourCardSquare';
import ShowcaseFront from './ShowcaseFront';
import MongoExpressCanvas from './MongoExpressCanvas';
import MongoExpressEditor from './MongoExpressEditor';
import ObjectModeler from './ObjectModeler';

const Root = ({ store }) => {

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="reacteye" component={ReactEyeApp} />
        <Route path="parakeat" component={ParakeatApp} />
        <Route path="components" component={ComponentsApp} />
        <Route path="admin" component={RequireAuth(AdminPanel)} />
        <Route path="signin" component={SignIn} />
        <Route path="signup" component={SignUpForm} />
        <Route path="signout" component={Signout}/>
        <Route path='4square' component={FourCardSquare} />
        <Route path='showcase' component={ShowcaseFront} />
        <Route path='canvas' component={MongoExpressCanvas} />
        <Route path='editor' component={MongoExpressEditor} />
        <Route path='modeler' component={ObjectModeler} />
      </Router>
    </Provider>
  );
}

export default Root;
