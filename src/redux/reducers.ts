import {
  AppState,
  AppStep,
  ActionTypes,
  SET_GRID_SIZE,
  TOGGLE_GRID_ITEM,
  SET_START_POSITION,
  SET_TARGET_POSITION,
  FINALISE_GRID,
} from './types';
import App from '../components/App';

const initialState: AppState = {
  appStep: AppStep.SetGridSize,
  gridSize: {
    width: 4,
    height: 4,
  },
  gridConfig: [],
};

export default function (state = initialState, action: ActionTypes) {
  switch (action.type) {
    case SET_GRID_SIZE:
      return {
        ...state,
        gridSize: action.gridSize,
        gridConfig: [],
        appStep: AppStep.SetupGrid,
      };

    case TOGGLE_GRID_ITEM:
      const {
        gridConfig,
        gridSize: { width },
      } = state;

      const {
        gridPosition: { x, y },
      } = action;

      const n = x + width * y;
      const configIndex = Math.floor(n / 32);
      const bitIndex = n % 32;

      const updatedConfig = [...gridConfig];
      const bit = (updatedConfig[configIndex] || 0) ^ (1 << bitIndex);
      updatedConfig[configIndex] = bit;

      return {
        ...state,
        gridConfig: updatedConfig,
      };

    case FINALISE_GRID:
      return {
        ...state,
        startPosition: null,
        targetPosition: null,
        appStep: AppStep.ChoosePathBegin,
      };

    case SET_START_POSITION:
      return {
        ...state,
        startPosition: action.startPosition,
        targetPosition: null,
        appStep: AppStep.ChoosePathEnd,
      };

    case SET_TARGET_POSITION:
      return {
        ...state,
        targetPosition: action.targetPosition,
        appStep: AppStep.ShowPath,
      };

    default:
      return state;
  }
}
