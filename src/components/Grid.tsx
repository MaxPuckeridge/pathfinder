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

    for (let y = 0; y < height; y++) {
      const row: Array<JSX.Element> = [];

      for (let x = 0; x < width; x++) {
        const itemKey: string = `item-${x},${y}`;

        const n = x + y * width;
        const configIndex = Math.floor(n / 32);
        const bitIndex = n % 32;
        const bit = gridConfig[configIndex] || 0;
        const isSolid: boolean = ((bit >> bitIndex) & 1) == 1;

        row.push(
          <TableCell key={itemKey}>
            <GridItem
              solid={isSolid}
              onClick={() =>
                onClickItem({
                  x,
                  y,
                })
              }
            />
          </TableCell>
        );
      }

      const rowKey = `row-${y}`;

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
