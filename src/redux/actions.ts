import {
  SET_GRID_SIZE,
  SetGridAction,
  GridSize,
  GridConfig,
  SetupGridAction,
  SETUP_GRID,
  GridPosition,
  SET_START_POSITION,
  SET_TARGET_POSITION,
  SetStartPositionAction,
  SetTargetPositionAction,
} from './types';

export function setGridSize(gridSize: GridSize): SetGridAction {
  return {
    type: SET_GRID_SIZE,
    gridSize: gridSize,
  };
}

export function setupGrid(gridConfig: GridConfig): SetupGridAction {
  return {
    type: SETUP_GRID,
    gridConfig: gridConfig,
  };
}

export function setStartPosition(
  gridPosition: GridPosition
): SetStartPositionAction {
  return {
    type: SET_START_POSITION,
    startPosition: gridPosition,
  };
}

export function setTargetPosition(
  gridPosition: GridPosition
): SetTargetPositionAction {
  return {
    type: SET_TARGET_POSITION,
    targetPosition: gridPosition,
  };
}
