import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { User } from "../redux/reducers/AuthReducer";
import { addNote, FetchNotes } from "../redux/reducers/NotesReducer";
import { Theme } from "../redux/reducers/ThemeReducer";

export default function AddNote() {
  const theme = useSelector(Theme);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const user = useSelector(User);

  const localNotes = JSON.parse(localStorage.getItem("notes"));

  const history = useHistory();

  return (
    <div className={theme ? "bg-light pt-5 vh-100" : "bg-dark pt-5 vh-100"}>
      <div className='container-sm'>
        <div class='container-lg' id='exampleModal'>
          <div class='modal-dialog' style={{ minWidth: "90%" }}>
            <div class='modal-content'>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(addNote(title, note, user.uid));
                  const newNotes = [
                    ...localNotes,
                    { title: title, note: note, id: "new" },
                  ];
                  localStorage.setItem("notes", JSON.stringify(newNotes));
                  //   dispatch(FetchNotes(user.uid));
                  history.push("/");
                }}
              >
                <div class='modal-header'>
                  <h5 class='modal-title' id='exampleModalLabel'>
                    New Note
                  </h5>
                </div>
                <div class='modal-body'>
                  <label className='mt-2 pb-2'>Title : </label>
                  <input
                    className='form-control'
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    required
                  ></input>
                  <label className='mt-3 pb-2'>Note : </label>
                  <textarea
                    className='form-control'
                    required
                    value={note}
                    onChange={(e) => {
                      setNote(e.target.value);
                    }}
                    style={{ minHeight: "250px" }}
                  ></textarea>
                </div>
                <div class='modal-footer'>
                  <button type='submit' class='btn btn-primary'>
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
