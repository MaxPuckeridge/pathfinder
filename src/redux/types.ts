// State Types

export enum AppStep {
  SetGridSize,
  SetupGrid,
  ChoosePathBegin,
  ChoosePathEnd,
  ShowPath,
}

export interface GridSize {
  width: number;
  height: number;
}

export interface GridPosition {
  x: number;
  y: number;
}

export type GridConfig = number[];

export interface AppState {
  appStep: AppStep;
  gridSize: GridSize;
  gridConfig: GridConfig;
  startPosition?: GridPosition;
  targetPosition?: GridPosition;
}

// Action Types

export const SET_GRID_SIZE = 'SET_GRID_SIZE';

export interface SetGridAction {
  type: typeof SET_GRID_SIZE;
  gridSize: GridSize;
}

export const TOGGLE_GRID_ITEM = 'TOGGLE_GRID_ITEM';

export interface ToggleGridItemAction {
  type: typeof TOGGLE_GRID_ITEM;
  gridPosition: GridPosition;
}

export const FINALISE_GRID = 'FINALISE_GRID';

export interface FinaliseGridAction {
  type: typeof FINALISE_GRID;
}

export const SET_START_POSITION = 'SET_START_POSITION';

export interface SetStartPositionAction {
  type: typeof SET_START_POSITION;
  startPosition: GridPosition;
}

export const SET_TARGET_POSITION = 'SET_TARGET_POSITION';

export interface SetTargetPositionAction {
  type: typeof SET_TARGET_POSITION;
  targetPosition: GridPosition;
}

export type ActionTypes =
  | SetGridAction
  | ToggleGridItemAction
  | FinaliseGridAction
  | SetStartPositionAction
  | SetTargetPositionAction;
