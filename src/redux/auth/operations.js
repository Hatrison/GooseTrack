import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addUserData, cleanUserData } from 'redux/user/userSlice';

const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'api/auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/register', credentials);
      setAuthHeader(response.data.token);
      await thunkAPI.dispatch(addUserData(response.data));
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
      const response = await axios.post('/api/auth/login', credentials);
      setAuthHeader(response.data.token);
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
      await axios.post(`/api/auth/logout`);
      clearAuthHeader();
      await thunkAPI.dispatch(cleanUserData());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
