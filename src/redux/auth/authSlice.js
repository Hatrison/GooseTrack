import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from './operations';

const updateUserState = (state, action) => {
  for (let key in state) {
    if (state.hasOwnProperty(key) && action.hasOwnProperty(key)) {
      state[key] = action[key];
    }
  }
};

const initialState = {
  token: null,
  user: {
    name: '',
    email: '',
    birthday: '',
    phone: '',
    skype: '',
    avatarURL: '',
  },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        updateUserState(state.user, action.payload);
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        updateUserState(state.user, action.payload);
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        updateUserState(state.user, action.payload);
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        updateUserState(state.user, action.payload);
      });
  },
});

export const authReducer = authSlice.reducer;
