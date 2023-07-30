import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo-slice';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => {
  const store = configureStore({
    reducer: {
      todoReducer: todoSlice.reducer,
    },
  });
  return store;
};

export const wrapper = createWrapper(makeStore);
