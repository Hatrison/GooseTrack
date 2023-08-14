import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchTasks = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.tasks = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasksArray: [] },

  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, handleFetchTasks)
      .addCase(fetchTasks.rejected, handleRejected),
});

export const tasksReducer = tasksSlice.reducer;
