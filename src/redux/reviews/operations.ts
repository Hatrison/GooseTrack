import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'utils/axiosInctance';
import { TAction } from './reviews.types';

export const getReviews = createAsyncThunk(
  'getReviews',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/api/reviews');
      return response.data;
    } catch (error: any) {
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
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createReview = createAsyncThunk(
  'createReview',
  async (review: TAction, thunkAPI) => {
    try {
      const response = await instance.post('/api/reviews/own', review);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'updateReview',
  async (review: TAction, thunkAPI) => {
    try {
      const response = await instance.patch('/api/reviews/own', review);
      return response.data;
    } catch (error: any) {
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
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
