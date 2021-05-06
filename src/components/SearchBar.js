import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Theme } from "../redux/reducers/ThemeReducer";

export default function SearchBar() {
  const theme = useSelector(Theme);
  const history = useHistory();
  return (
    <div className={theme ? "bg-light pt-5" : "bg-dark pt-5"}>
      <div className='container-md'>
        <div className='row'>
          <div className='col-md-10'>
            <input
              type='text'
              className='form-control'
              placeholder='Type here'
            />
          </div>
          <div className='col-md-2'>
            <button
              className={
                theme ? "btn btn-outline-dark" : "btn btn-outline-light"
              }
            >
              Search
            </button>
          </div>
        </div>
        <button
          className='btn btn-primary mt-5'
          onClick={() => {
            history.push("/add");
          }}
        >
          {" "}
          Add a Note
        </button>
      </div>
    </div>
  );
}
