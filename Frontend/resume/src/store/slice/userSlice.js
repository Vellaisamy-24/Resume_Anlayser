import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};
const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    login(state, action) {
      const { email, _id } = action.payload;
      state.user = { email, id };
    },
    logout(state, action) {
      state.user = null;
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
