// src/redux/slices/itemsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Item = {
  id: string;
  type: string;
  category: string;
  title: string;
  amount: number;
  date: Date;
};

export type ItemsState =  {
  items: Item[];
}

const initialState: ItemsState = {
  items: [
    {
      id: "e1",
      type: "outcome",
      category: "쇼핑",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = itemsSlice.actions;
export default itemsSlice.reducer;
