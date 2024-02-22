import { createSlice } from '@reduxjs/toolkit';
interface loginState {
  isLoggedIn: boolean,
  username: string,
  password: string | number
}

const initialState: loginState = {
  isLoggedIn: false,
  username: '',
  password: ''
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = '';
      state.password = '';
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
