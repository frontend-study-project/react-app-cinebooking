import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import bookReducer from "../slices/bookSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
