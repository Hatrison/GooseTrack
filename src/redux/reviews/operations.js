import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'utils/axiosInctance';
// import axios from 'axios';

// const { REACT_APP_BASE_URL } = process.env;
// axios.defaults.baseURL = `${REACT_APP_BASE_URL}`;

export const getReviews = createAsyncThunk(
  'getReviews',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/api/reviews');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnReview = createAsyncThunk(
  'getOwnReview',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/api/reviews/own');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createReview = createAsyncThunk(
  'createReview',
  async (review, thunkAPI) => {
    try {
      const response = await instance.post('/api/reviews/own', review);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'updateReview',
  async (review, thunkAPI) => {
    try {
      const response = await instance.patch('/api/reviews/own', review);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'deleteReview',
  async (_, thunkAPI) => {
    try {
      const response = await instance.delete(`/api/reviews/own`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
