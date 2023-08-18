import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'utils/axiosInctance';

export const getTasks = createAsyncThunk(
  'getTasks',
  async ({ year, month }, thunkAPI) => {
    try {
      const correctMonth = String(month).padStart(2, '0');
      const response = await instance.get(
        `/api/tasks/?date=${year}-${correctMonth}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'createTask',
  async (task, thunkAPI) => {
    try {
      const response = await instance.post(`/api/tasks`, task);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'updateTask',
  async (task, thunkAPI) => {
    try {
      const response = await instance.patch(`/api/tasks/${task._id}`, task);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'deleteTask',
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/api/tasks/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
