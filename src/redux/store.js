import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from "./reducers/NotesReducer";
import authReducer from "./reducers/AuthReducer";
import "../firebase";
import themeReducer from "./reducers/ThemeReducer";

export default configureStore({
  reducer: {
    notes: NotesReducer,
    auth: authReducer,
    theme: themeReducer,
  },
});
