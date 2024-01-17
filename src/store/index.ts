import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../slices/itemsSlice";
import movieSlice from "../slices/movieSlice";

export const store = configureStore({
  reducer: {
    item: itemReducer,
    movies: movieSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
