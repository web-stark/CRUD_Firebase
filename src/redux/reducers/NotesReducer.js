import { createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../firebase";

export const NotesReducer = createSlice({
  name: "notes",
  initialState: {
    notes: localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [],
  },
  reducers: {
    SET_NOTES: (state, action) => {
      state.notes = action.payload;
      console.log("SET");
    },
  },
});

export const { SET_NOTES } = NotesReducer.actions;

export const addNote = (title, note, userid) => (dispatch) => {
  firestore
    .collection(userid)
    .doc()
    .set({
      title: title,
      note: note,
    })
    .then(() => {
      console.log("Inserted");
      dispatch(FetchNotes(userid));
    })
    .catch((error) => {
      console.log("Error");
    });
};

export const FetchNotes = (userid) => (dispatch) => {
  firestore
    .collection(userid)
    .get()
    .then((result) => {
      const Notes = result.docs.map((doc) => {
        return { id: doc.id, title: doc.data().title, note: doc.data().note };
      });
      dispatch(SET_NOTES(Notes));
      localStorage.setItem("notes", JSON.stringify(Notes));
      console.log("Fetched");
    });
};

export const UpdateNote = (id, title, note, userid) => (dispatch) => {
  firestore
    .collection(userid)
    .doc(id)
    .set({
      title: title,
      note: note,
    })
    .then(() => {
      console.log("Updated");
      dispatch(FetchNotes(userid));
    });
};

export const DeleteNote = (id, userid) => (dispatch) => {
  const temp = JSON.parse(localStorage.getItem("notes"));

  const newNotes = temp.filter((element) => {
    return element.id !== id;
  });

  localStorage.setItem("notes", JSON.stringify(newNotes));
  dispatch(SET_NOTES(newNotes));
  firestore
    .collection(userid)
    .doc(id)
    .delete()
    .then(() => {
      console.log("Deleted");
      dispatch(FetchNotes(userid));
    });
};

export const notes = (state) => state.notes.notes;

export default NotesReducer.reducer;
