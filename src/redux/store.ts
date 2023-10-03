import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { themeReducer } from './theme/themeSlice';
import { userReducer } from './user/userSlice';
import { dateReducer } from './date/dateSlice';
import { tasksReducer } from './tasks/tasksSlice';
import { reviewsReducer } from './reviews/reviewsSlice';

const themePersistConfig = {
  key: 'theme',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  theme: persistReducer(themePersistConfig, themeReducer),
  date: dateReducer,
  tasks: tasksReducer,
  user: userReducer,
  reviews: reviewsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
