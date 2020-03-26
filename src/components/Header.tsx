import React, { Component } from 'react';
import { Box, Header as GHeader, Heading } from 'grommet';

class Header extends Component {
  render() {
    return (
      <Box
        align="center"
        pad={{ top: 'xxsmall', bottom: 'xxsmall' }}
        background="light-1"
      >
        <Box width="auto">
          <GHeader>
            <Heading>PathFinder</Heading>
          </GHeader>
        </Box>
      </Box>
    );
  }
}

export default Header;
