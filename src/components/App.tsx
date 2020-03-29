import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Grommet } from 'grommet';
import { Provider } from 'react-redux';
import PathFinder from './PathFinder';
import store from '../redux/store';

const App = () => (
  <Provider store={store}>
    <Grommet>
      <PathFinder />
    </Grommet>
  </Provider>
);

export default hot(module)(App);
