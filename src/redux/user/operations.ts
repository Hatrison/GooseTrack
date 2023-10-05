import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUserData } from './userSlice';
import { instance, setAuthHeader } from 'utils/axiosInctance';
import { cleanAuthData } from 'redux/auth/authSlice';
import { TUserResetPasswordAction, TUserUpdateAction } from './user.types';

export const fetchCurrentUser = createAsyncThunk(
  'getCurrentUser',
  async (_, thunkAPI) => {
    const accessToken = localStorage.getItem('accessToken') || '';

    try {
      setAuthHeader(accessToken);
      const response = await instance.get('/api/users/current');
      await thunkAPI.dispatch(addUserData(response.data));
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'patchCurrentUser',
  async (credentials: TUserUpdateAction, thunkAPI) => {
    try {
      const response = await instance.patch('/api/users/current', credentials);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  'changePassword',
  async (credentials: { newPassword: string }, thunkAPI) => {
    try {
      const response = await instance.patch('/api/users/password', credentials);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'deleteUser',
  async (_, thunkAPI) => {
    try {
      const response = await instance.delete('/api/users/delete');
      thunkAPI.dispatch(cleanAuthData());
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'resetPassword',
  async (credentials: TUserResetPasswordAction, thunkAPI) => {
    try {
      const response = await instance.post(
        '/api/users/forgot-password',
        credentials
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
