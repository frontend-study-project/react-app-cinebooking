import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../slices/itemsSlice";
import bookReducer from "../slices/bookSlice";

export const store = configureStore({
  reducer: {
    item: itemReducer,
    book: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
