import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { User, SignOut } from "../redux/reducers/AuthReducer";
import { SET_THEME, Theme } from "../redux/reducers/ThemeReducer";

export default function Navbar() {
  const user = useSelector(User);
  const theme = useSelector(Theme);
  const dispatch = useDispatch();
  return (
    <nav
      className={
        theme ? "navbar navbar-light bg-light" : "navbar navbar-dark bg-dark"
      }
    >
      <div class='container-sm'>
        <Link class='navbar-brand' to='/'>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fsedcclint.com%2Fwp-content%2Fuploads%2F2017%2F07%2Fgoogle_keep_icon.png%3Ffit%3D1600%252C1600%26ssl%3D1&f=1&nofb=1'
            height='30'
            alt=''
            loading='lazy'
          />
        </Link>
        {user.photoURL ? (
          <div class='d-flex input-group w-auto'>
            <a
              class='nav-link'
              href='#'
              id='navbarDropdown'
              role='button'
              data-mdb-toggle='dropdown'
              aria-expanded='false'
            >
              <img
                src={user.photoURL}
                width='35px'
                style={{ borderRadius: "50%" }}
              ></img>
            </a>

            <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
              <li>
                <span
                  class='dropdown-item '
                  href='#'
                  onClick={() => {
                    dispatch(SET_THEME("dark"));
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <i class='fas fa-adjust'></i> &nbsp;Change Theme
                </span>
              </li>
              <li>
                <hr class='dropdown-divider' />
              </li>
              <li>
                <span
                  class='dropdown-item'
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(SignOut());
                  }}
                >
                  <i class='fas fa-arrow-left'></i> &nbsp; Logout
                </span>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
