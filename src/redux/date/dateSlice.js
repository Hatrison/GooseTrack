import { createSlice } from '@reduxjs/toolkit';
import format from 'date-fns/format';

const dateSlice = createSlice({
  name: 'date',
  initialState: { currentDate: format(Date.now(), 'yyyy-MM-dd') },
  reducers: {
    setDates: (state, { payload }) => {
      state.currentDate = payload;
    },
  },
});

export const { setDates } = dateSlice.actions;

export const dateReducer = dateSlice.reducer;
