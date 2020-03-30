import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridPosition } from '../redux/types';
import { Box, Heading } from 'grommet';
import Grid from './Grid';
import { toggleGridItemAction } from '../redux/actions';

interface PropTypes {
  onClickItem: (gridPosition: GridPosition) => void;
}

class SetupGrid extends Component<PropTypes> {
  render() {
    const { onClickItem } = this.props;
    return (
      <Box direction="column">
        <Heading level="3">Configure grid</Heading>
        <Grid onClickItem={onClickItem} />
      </Box>
    );
  }
}

const dispatchProps = (dispatch): PropTypes => {
  return {
    onClickItem: (gridPosition: GridPosition) => {
      dispatch(toggleGridItemAction(gridPosition));
    },
  };
};

export default connect(null, dispatchProps)(SetupGrid);
