import { createSlice } from "@reduxjs/toolkit";

export const themeReducer = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: true,
  },
  reducers: {
    SET_THEME: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { SET_THEME } = themeReducer.actions;

export const Theme = (state) => state.theme.isDarkMode;

export default themeReducer.reducer;
