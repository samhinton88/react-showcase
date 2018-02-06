// test suite emulates browser in command line
import React from 'react';
import ReactDOM from 'react-dom';
import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils  from 'react-dom/test-utils';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

// emulate browser -> jsdom@8.x plays nicely with this config
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

// configure jquery to access fake DOM
const $ = _$(global.window);

// function to render React Class
function renderComponent(ComponentClass, props = {}, state = {}) {

  // render into DOM node in document
  const renderedInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  // get HTML for renderedInstance and wrap with jquery
  return $(ReactDOM.findDOMNode(renderedInstance))
}

// helper to simulate DOM events
$.fn.simulate = function(eventName, value) {
  // 'this' = html element

  if (value) {
    this.val(value);
  }

  // trigger simulation of referenced event name
  TestUtils.Simulate[eventName](this[0]);
}

// config chaiJquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect }
