import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'utils/axiosInctance';
import { TTaskAdd, TTaskFetch, TTaskUpdate } from './tasks.types';

export const getTasks = createAsyncThunk(
  'getTasks',
  async ({ year, month }: TTaskFetch, thunkAPI) => {
    try {
      const correctMonth = String(month).padStart(2, '0');
      const response = await instance.get(
        `/api/tasks/?date=${year}-${correctMonth}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'createTask',
  async (task: TTaskAdd, thunkAPI) => {
    try {
      const response = await instance.post(`/api/tasks`, task);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'updateTask',
  async (task: TTaskUpdate, thunkAPI) => {
    try {
      const { _id, ...rest } = task;
      const response = await instance.patch(`/api/tasks/${task._id}`, rest);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'deleteTask',
  async (id: string, thunkAPI) => {
    try {
      await instance.delete(`/api/tasks/${id}`);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
