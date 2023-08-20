import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUserData, cleanUserData } from 'redux/user/userSlice';
import { setAuthHeader, instance } from 'utils/axiosInctance';

export const registerUser = createAsyncThunk(
  'api/auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post('/api/auth/register', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'api/auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post('/api/auth/login', credentials);
      setAuthHeader(response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      await thunkAPI.dispatch(addUserData(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'api/auth/logout',
  async (_, thunkAPI) => {
    try {
      await instance.post(`/api/auth/logout`);
      setAuthHeader();
      await thunkAPI.dispatch(cleanUserData());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

