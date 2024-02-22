import { createSlice } from '@reduxjs/toolkit';
interface joinState {
  username: string,
  password: string | number,
  passwordCheck: string | number
}

const initialState: joinState = {
  username: '',
  password: '',
  passwordCheck: '',
};

const joinSlice = createSlice({
  name: 'join',
  initialState,
  reducers: {
    join: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.passwordCheck = action.payload.passwordCheck;
    },
  },
});

export const { join } = joinSlice.actions;
export default joinSlice.reducer;
