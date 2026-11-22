import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice.js";
const persistConfig = (key) => ({ key, storage });
const persistUserSlice = persistReducer(
  persistConfig("userPersistStore"),
  userSlice,
);

export const store = configureStore({
  reducer: {
    user: persistUserSlice,
  },
});

export const persistedReducer = persistStore(store);
