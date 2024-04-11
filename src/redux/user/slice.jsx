import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  name: null,
  surname: null,
  id: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.id = action.payload.null;
      state.token = action.payload.token;
    },
    deleteUser(state) {
      state.email = null;
      state.name = null;
      state.id = null;
      state.token = null;
      state.surname = null;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
