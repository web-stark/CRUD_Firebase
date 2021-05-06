import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { User } from "../redux/reducers/AuthReducer";
import { DeleteNote, FetchNotes, notes } from "../redux/reducers/NotesReducer";
import { Theme } from "../redux/reducers/ThemeReducer";

function Notes() {
  const theme = useSelector(Theme);

  const dispatch = useDispatch();
  const user = useSelector(User);
  const Notes = useSelector(notes);

  const history = useHistory();

  useEffect(() => {
    dispatch(FetchNotes(user.uid));
  }, []);

  return (
    <div
      className={
        theme
          ? "container-fluid  text-dark bg-light vh-100"
          : " container-fluid text-light bg-dark vh-100"
      }
    >
      <div className='container-lg pt-5'>
        <div class='row'>
          {Notes.map((note) => {
            return (
              <div class='col-sm-12 col-lg-4'>
                <div
                  class='card mt-3'
                  style={{ background: theme ? "#fff" : "#303138" }}
                >
                  <div class='card-body'>
                    <h3> {note.title} </h3>
                    <p class='pt-2 text-wrap'>{note.note.slice(0, 250)}</p>
                    <button
                      class='btn btn-link'
                      onClick={() => {
                        history.push(`/note/${note.id}`);
                      }}
                    >
                      Read More
                    </button>
                    <button
                      class='btn btn-link text-danger'
                      onClick={() => {
                        dispatch(DeleteNote(note.id, user.uid));
                      }}
                    >
                      <i class='far fa-trash-alt'></i>
                    </button>
                    <button
                      class='btn btn-link text-primary'
                      onClick={() => {
                        history.push(`/edit/${note.id}`);
                      }}
                    >
                      <i class='far fa-edit'></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Notes;
