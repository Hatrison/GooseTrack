import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUserData, cleanUserData } from 'redux/user/userSlice';
import { setAuthHeader, instance } from 'utils/axiosInctance';
import { TLoginAction, TRegisterAction } from './auth.types';

export const registerUser = createAsyncThunk(
  'api/auth/register',
  async (credentials: TRegisterAction, thunkAPI) => {
    try {
      const response = await instance.post('/api/auth/register', credentials);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'api/auth/login',
  async (credentials: TLoginAction, thunkAPI) => {
    try {
      const response = await instance.post('/api/auth/login', credentials);
      setAuthHeader(response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      localStorage.setItem('accessToken', response.data.accessToken);
      await thunkAPI.dispatch(addUserData(response.data));
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'api/auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await instance.post(`/api/auth/logout`);
      setAuthHeader();
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessToken');
      await thunkAPI.dispatch(cleanUserData());
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
