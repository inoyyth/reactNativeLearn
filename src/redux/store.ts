import {
  configureStore,
  ThunkAction,
  Action,
  EnhancedStore,
} from '@reduxjs/toolkit';
import userReducer from './reducer';

// root reducer
export const store: EnhancedStore<any> = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
