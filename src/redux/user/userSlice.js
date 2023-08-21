import { createSlice } from '@reduxjs/toolkit';
import { deleteUser, updateUser } from './operations';

const updateUserState = (state, action) => {
  for (let key in state) {
    if (state.hasOwnProperty(key) && action.hasOwnProperty(key)) {
      state[key] = action[key];
    }
  }
};

const initialState = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  skype: '',
  avatarURL: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserData(state, action) {
      updateUserState(state, action.payload);
    },
    cleanUserData(state) {
      state = initialState;
      return state;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updateUser.fulfilled, (state, action) => {
        updateUserState(state, action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state = initialState;
        return state;
      });
  },
});

export const { addUserData, cleanUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
