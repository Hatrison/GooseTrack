import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addTask, deleteTask, getTasks, updateTask } from './operations';

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = state.tasks.map(task =>
          task._id === action.payload._id ? action.payload : task
        );
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = state.tasks.filter(task => task._id !== action.payload);
      })
      .addMatcher(
        isAnyOf(
          getTasks.pending,
          addTask.pending,
          updateTask.pending,
          deleteTask.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getTasks.rejected,
          addTask.rejected,
          updateTask.rejected,
          deleteTask.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const tasksReducer = tasksSlice.reducer;
