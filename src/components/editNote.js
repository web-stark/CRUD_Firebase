import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { User } from "../redux/reducers/AuthReducer";
import { UpdateNote } from "../redux/reducers/NotesReducer";
import Navbar from "./Navbar";
function SingleNote() {
  const params = useParams();

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(User);

  const history = useHistory();

  const FetchNote = async () => {
    let temp = await JSON.parse(localStorage.getItem("notes"));

    temp = temp.filter((elem) => {
      return elem.id === params.id;
    });

    setNote(temp[0].note);
    setTitle(temp[0].title);
  };

  useEffect(() => {
    FetchNote();
    console.log("called");
  }, []);

  return (
    <div>
      <Navbar />

      <div className='container-lg pt-5'>
        <nav aria-label='breadcrumb '>
          <ol class='breadcrumb'>
            <li class='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
            <li
              class='breadcrumb-item active pb-5 text-black-50'
              aria-current='page'
            >
              {title}
            </li>
          </ol>
        </nav>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          style={{
            border: "none",
            fontWeight: "500",
            fontSize: "36px",
            outline: "none",
            borderBottom: "1px solid black",
          }}
        ></input>
        <br />
        <textarea
          type='text'
          className='mt-5 border p-2'
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
          style={{
            height: "200px",
            width: "100%",
            border: "none",
          }}
        ></textarea>
        <br /> <br /> <br />
        <button
          className='btn btn-primary'
          onClick={() => {
            dispatch(UpdateNote(params.id, title, note, user.uid));
            setTimeout(() => {
              history.push("/");
            }, 2000);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default SingleNote;
