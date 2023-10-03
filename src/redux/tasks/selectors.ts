import { RootState } from 'redux/store';

export const selectTasks = (state: RootState) => state.tasks;
