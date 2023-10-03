import { RootState } from 'redux/store';

export const selectDate = (state: RootState) => state.date.currentDate;
