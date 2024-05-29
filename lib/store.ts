import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../lib/features/theme/themeSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      darkTheme: themeReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
