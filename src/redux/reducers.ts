import {
  AppState,
  AppStep,
  ActionTypes,
  SET_GRID_SIZE,
  SETUP_GRID,
  SET_START_POSITION,
  SET_TARGET_POSITION,
} from './types';
import App from '../components/App';

const initialState: AppState = {
  appStep: AppStep.SetGridSize,
  gridSize: {
    width: 4,
    height: 4,
  },
  gridConfig: 0,
};

export default function (state = initialState, action: ActionTypes) {
  switch (action.type) {
    case SET_GRID_SIZE:
      return {
        ...state,
        gridSize: action.gridSize,
        gridConfig: 0,
        appStep: AppStep.SetupGrid,
      };

    case SETUP_GRID:
      return {
        ...state,
        gridConfig: action.gridConfig,
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
