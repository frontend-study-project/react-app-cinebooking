import { createSlice } from "@reduxjs/toolkit";
import { FormattedDate } from "../types";

interface bookState {
  selectMovie: number;
  selectTheater: number;
  selectDate: FormattedDate;
  selectScreen: string;
  activeNext: boolean;
  activeSeatSelector: boolean;
}

const initialState: bookState = {
  selectMovie: -1,
  selectTheater: -1,
  selectDate: {
    year: 0,
    month: 0,
    day: 0,
    dayOfWeek: "",
  },
  selectScreen: "",
  activeNext: false,
  activeSeatSelector: false,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSelectMovie: (state, action) => {
      state.selectMovie = action.payload;
    },
    setSelectTheater: (state, action) => {
      state.selectTheater = action.payload;
    },
    setSelectDate: (state, action) => {
      state.selectDate = action.payload;
    },
    setSelectScreen: (state, action) => {
      state.selectScreen = action.payload;
    },
    setActiveSeatSelector: (state, action) => {
      state.activeSeatSelector = action.payload;
    },
  },
});

export const { setSelectMovie, setSelectTheater, setSelectDate, setSelectScreen, setActiveSeatSelector } = bookSlice.actions;
export default bookSlice.reducer;
