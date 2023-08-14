import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}`;

export const getTasks = createAsyncThunk(
  'getTasks',
  async ({ year, month }, thunkAPI) => {
    try {
      const response = await axios.get(`/api/tasks/?date=${year}-${month}`);
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
      const response = await axios.patch(`/api/tasks/${task._id}`, task);
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
      const response = await axios.delete(`/api/tasks/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
