import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUserData } from './userSlice';
import { instance, setAuthHeader } from 'utils/axiosInctance';

export const fetchCurrentUser = createAsyncThunk(
  'getCurrentUser',
  async (_, thunkAPI) => {
    const accessToken = localStorage.getItem('accessToken') || '';

    try {
      setAuthHeader(accessToken);
      const response = await instance.get('/api/users/current');
      await thunkAPI.dispatch(addUserData(response.data));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'patchCurrentUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.patch('/api/users/current', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePassword = createAsyncThunk('changePassword', async (credentials, thunkAPI) => {
  try {
    const response = await instance.patch('/api/users/password', credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

export const deleteUser = createAsyncThunk('deleteUser', async (credentials, thunkAPI) => {
  try {
    const response = await instance.delete('/api/users/delete');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})