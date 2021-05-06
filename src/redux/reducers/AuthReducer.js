import { createSlice } from "@reduxjs/toolkit";
import firebase from "firebase";

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {},
  },
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { SET_USER } = authReducer.actions;

export default authReducer.reducer;

export const User = (state) => state.auth.user;

export const SignIn = (props) => (dispatch) => {
  console.log("Called");
  // dispatch(SET_USER({}))
  // Google Sign In
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      dispatch(SET_USER(result.user));
      localStorage.setItem("user", JSON.stringify(result.user));
    })
    .catch((error) => console.log(error));
};

export const SignOut = (props) => (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      localStorage.removeItem("user");
      window.location.reload();
    });
};
