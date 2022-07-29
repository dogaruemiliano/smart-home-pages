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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
