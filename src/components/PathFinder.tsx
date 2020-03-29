import React, { Component } from 'react';
import { Box } from 'grommet';
import Header from './Header';
import MainContent from './MainContent';

class PathFinder extends Component {
  render() {
    return (
      <Box>
        <Header />
        <MainContent/>
      </Box>
    );
  }
}

export default PathFinder;
