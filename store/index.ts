import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import homeReducer from "./slices/home";
import acReducer from "./slices/ac";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    ac: acReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
