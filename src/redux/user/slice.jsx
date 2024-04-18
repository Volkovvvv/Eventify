import { createSlice } from '@reduxjs/toolkit';
import loadCurrentUserFromLC from '../../utils/loadCurrentUserFromLC';

const initialState = {
  currentUser: loadCurrentUserFromLC(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
