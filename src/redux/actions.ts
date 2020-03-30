import {
  SET_GRID_SIZE,
  SetGridAction,
  GridSize,
  ToggleGridItemAction,
  TOGGLE_GRID_ITEM,
  GridPosition,
  SET_START_POSITION,
  SET_TARGET_POSITION,
  SetStartPositionAction,
  SetTargetPositionAction,
  FinaliseGridAction,
  FINALISE_GRID,
} from './types';

export function setGridSize(gridSize: GridSize): SetGridAction {
  return {
    type: SET_GRID_SIZE,
    gridSize: gridSize,
  };
}

export function toggleGridItemAction(
  gridPosition: GridPosition
): ToggleGridItemAction {
  return {
    type: TOGGLE_GRID_ITEM,
    gridPosition: gridPosition,
  };
}

export function finaliseGridAction(): FinaliseGridAction {
  return {
    type: FINALISE_GRID,
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
