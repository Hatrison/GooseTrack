import { createSlice } from '@reduxjs/toolkit';
import { deleteUser, updateUser } from './operations';
import { TUserState } from './user.types';

const initialState: TUserState = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  skype: '',
  avatarURL: '',
};

const updateUserState = (state: TUserState, action: Required<TUserState>) => {
  for (let key in state) {
    if (state.hasOwnProperty(key) && action.hasOwnProperty(key)) {
      state[key as keyof typeof state] = action[key as keyof typeof action];
    }
  }
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
