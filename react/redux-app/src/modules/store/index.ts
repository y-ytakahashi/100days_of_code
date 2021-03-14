import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../domain/counterSlice';
import { combineReducers } from 'redux';
import domain from '../domain'

// modules 配下でSliceにより生成されたreducerをまとめる
const reducer = combineReducers({
  domain
})

export const store = configureStore({
  reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store
