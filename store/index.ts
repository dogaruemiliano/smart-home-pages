import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import lightsReducer from "./slices/lights";
import acReducer from "./slices/ac";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lights: lightsReducer,
    ac: acReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
