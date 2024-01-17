import { createSlice } from "@reduxjs/toolkit";
import { Movies } from "../types";

interface MovieState {
  nowPlaying: Movies[];
  popular: Movies[];
  upcoming: Movies[];
}

const initialState: MovieState = {
  nowPlaying: [],
  popular: [],
  upcoming: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
  },
});

export const { setNowPlaying, setPopular, setUpcoming } = movieSlice.actions;
export default movieSlice.reducer;
