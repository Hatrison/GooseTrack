import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './operations';

const initialState = {
  token: null,
  user: {
    email: '',
    subscription: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
  },
});

export const authReducer = authSlice.reducer;
