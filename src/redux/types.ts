export enum AppStep {
  SetGridSize,
  SetupGrid,
  ChoosePathBegin,
  ChoosePathEnd,
  PlayPath,
}

export interface GridSize {
  width: number;
  height: number;
}

export interface GridPosition {
  x: number;
  y: number;
}

export type GridConfig = number;

export interface AppState {
  appStep: AppStep;
  gridSize: GridSize;
  gridConfig: GridConfig;
  startPosition?: GridPosition;
  targetPosition?: GridPosition;
}
