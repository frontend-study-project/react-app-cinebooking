import { createSlice } from '@reduxjs/toolkit';
interface authState {
  isLoggedIn: boolean,
  username: string,
  password: string | number
}

const initialState: authState = {
  isLoggedIn: false,
  username: '',
  password: ''
};

const authSlice = createSlice({
  name: 'auth',
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

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
