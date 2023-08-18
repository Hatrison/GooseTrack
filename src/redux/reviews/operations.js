import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;
axios.defaults.baseURL = `${REACT_APP_BASE_URL}`;

export const getReviews = createAsyncThunk(
  'getReviews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/reviews');
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
      const response = await axios.get('/api/reviews/own');
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
      const response = await axios.post('/api/reviews/own', review);
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
      const response = await axios.patch('/api/reviews/own', review);
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
      const response = await axios.delete(`/api/reviews/own`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
