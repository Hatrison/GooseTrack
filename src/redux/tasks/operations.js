import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}`;

export const getTasks = createAsyncThunk(
  'getTasks',
  async ({ year, month }, thunkAPI) => {
    try {
      const correctMonth = String(month).padStart(2, '0');
      const response = await axios.get(
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
      const response = await axios.post(`/api/tasks`, task);
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
      const { _id, owner, ...rest } = task;
      const response = await axios.patch(`/api/tasks/${_id}`, rest);
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
      await axios.delete(`/api/tasks/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
