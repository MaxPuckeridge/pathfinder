import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState, GridSize, GridConfig, GridPosition } from '../redux/types';
import { Table, TableBody, TableRow, TableCell } from 'grommet';
import GridItem from './GridItem';

interface ExternalPropTypes {
  onClickItem: (gridPosition: GridPosition) => void;
}

interface StorePropTypes {
  gridSize: GridSize;
  gridConfig: GridConfig;
}

type PropTypes = StorePropTypes & ExternalPropTypes;

class Grid extends Component<PropTypes> {
  render() {
    const {
      gridSize: { width, height },
      gridConfig,
      onClickItem,
    } = this.props;

    const body: Array<JSX.Element> = [];

    for (let j = 0; j < height; j++) {
      const row: Array<JSX.Element> = [];

      for (let i = 0; i < width; i++) {
        const itemKey: string = `item-${i},${j}`;

        row.push(
          <TableCell key={itemKey}>
            <GridItem
              solid
              onClick={() =>
                onClickItem({
                  x: i,
                  y: j,
                })
              }
            />
          </TableCell>
        );
      }

      const rowKey = `row-${j}`;

      body.push(<TableRow key={rowKey}>{row}</TableRow>);
    }

    return (
      <Table>
        <TableBody>{body}</TableBody>
      </Table>
    );
  }
}

const mapStateToProps = (state: AppState): StorePropTypes => ({
  gridSize: state.gridSize,
  gridConfig: state.gridConfig,
});

export default connect(mapStateToProps)(Grid);
