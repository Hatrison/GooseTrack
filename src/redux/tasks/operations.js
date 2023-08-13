import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}`;

export const fetchTasks = createAsyncThunk(
  'tasks/fetchMonth',
  async ({ year, month }, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks/?year=${year}&month=${month}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
