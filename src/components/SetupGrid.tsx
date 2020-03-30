import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridPosition } from '../redux/types';
import { Box, Heading, Button } from 'grommet';
import Grid from './Grid';
import { toggleGridItemAction, finaliseGridAction } from '../redux/actions';

interface PropTypes {
  onClickItem: (gridPosition: GridPosition) => void;
  onClickNext: () => void;
}

class SetupGrid extends Component<PropTypes> {
  render() {
    const { onClickItem, onClickNext } = this.props;
    return (
      <Box direction="column">
        <Heading level="3">Configure grid</Heading>
        <Grid onClickItem={onClickItem} />
        <Box direction="row-reverse">
          <Box align="center" pad="medium">
            <Button label="Next" primary  onClick={onClickNext}/>
          </Box>
        </Box>
      </Box>
    );
  }
}

const dispatchProps = (dispatch): PropTypes => {
  return {
    onClickItem: (gridPosition: GridPosition) => {
      dispatch(toggleGridItemAction(gridPosition));
    },

    onClickNext: () => dispatch(finaliseGridAction()),
  };
};

export default connect(null, dispatchProps)(SetupGrid);
