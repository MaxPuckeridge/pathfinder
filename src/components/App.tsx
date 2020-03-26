import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Grommet } from 'grommet';
import PathFinder from './PathFinder';

const App = () => (
  <Grommet >
    <PathFinder />
  </Grommet>
);

export default hot(module)(App);
