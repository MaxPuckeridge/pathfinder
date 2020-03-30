import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState, GridConfig } from '../redux/types';
import { Box, Heading } from 'grommet';
import Grid from './Grid';

interface PropTypes {}

class SetupGrid extends Component<PropTypes> {
  render() {
    return (
      <Box direction="column">
        <Heading level="3">Configure grid</Heading>
        <Grid />
      </Box>
    );
  }
}

const mapStateToProps = (state: AppState): PropTypes => ({});

export default connect(mapStateToProps)(SetupGrid);
