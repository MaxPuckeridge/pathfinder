import { AppState, AppStep } from './types';

const initialState: AppState = {
  appStep: AppStep.SetupGrid,
  gridSize: {
    width: 4,
    height: 4,
  },
  gridConfig: 0,
};

export default reducers;
