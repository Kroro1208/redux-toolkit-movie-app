import { createSlice } from "@reduxjs/toolkit";

type ThemeState = boolean;
const themeLocalStorage = !!localStorage.getItem("movies-theme");

const initialState: ThemeState = themeLocalStorage;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state) {
        localStorage.removeItem("movies-theme");
      } else {
        localStorage.setItem("movies-theme", "_");
      }
      return (state = !state);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
