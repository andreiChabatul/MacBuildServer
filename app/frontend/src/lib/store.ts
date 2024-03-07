import { configureStore } from '@reduxjs/toolkit';
import userReducer from './thunk/thunk.auth';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer
    },
  })
}