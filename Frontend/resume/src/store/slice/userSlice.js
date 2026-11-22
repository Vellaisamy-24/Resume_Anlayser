import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};
const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    login(state, action) {
      const { email, id, token } = action.payload;
      console.log({ email, id });
      state.user = { email, id, token };
    },
    logout(state, action) {
      state.user = null;
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
