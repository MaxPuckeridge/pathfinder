import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState, GridSize } from '../redux/types';
import { Box, Heading, TextInput, Button, Form, FormField } from 'grommet';
import { setGridSize } from '../redux/actions';

interface StorePropTypes {
  gridSize: GridSize;
}

interface DispatchPropTypes {
  onSubmit: (gridSize: GridSize) => void;
}

type PropTypes = StorePropTypes & DispatchPropTypes;

interface StateTypes {
  width: string;
  height: string;
}

class SetGridSize extends Component<PropTypes, StateTypes> {
  constructor(props) {
    super(props);

    const {
      gridSize: { width, height },
    } = props;

    this.state = {
      width: `${width}`,
      height: `${height}`,
    };
  }

  render() {
    return (
      <Box direction="column">
        <Heading level="3">Choose Grid Size</Heading>
        <Form onSubmit={(evt) => this.onSubmit(evt)} value={this.state}>
          <Box direction="row" gap="medium" align="center">
            <FormField
              label="Width"
              name="width"
              required
              validate={{ regexp: /^[1-9][0-9]{0,2}$/ }}
            >
              <TextInput name="width" type="number" />
            </FormField>
            x
            <FormField
              label="Height"
              name="height"
              required
              validate={{ regexp: /^[1-9][0-9]{0,2}$/ }}
            >
              <TextInput name="height" type="number" />
            </FormField>
          </Box>
          <Box direction="row-reverse">
            <Box align="center" pad="medium">
              <Button label="Next" primary type="submit" />
            </Box>
          </Box>
        </Form>
      </Box>
    );
  }

  onSubmit(evt: { value: StateTypes }) {
    const { onSubmit } = this.props;

    const gridSize: GridSize = {
      width: parseInt(evt.value.width),
      height: parseInt(evt.value.height),
    };

    onSubmit(gridSize);
  }
}

const mapStateToProps = (state: AppState): StorePropTypes => ({
  gridSize: state.gridSize,
});

const dispatchProps = (dispatch): DispatchPropTypes => {
  return {
    onSubmit: (gridSize: GridSize) => {
      dispatch(setGridSize(gridSize));
    },
  };
};

export default connect(mapStateToProps, dispatchProps)(SetGridSize);
