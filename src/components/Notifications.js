import React from "react";
import { useSelector } from "react-redux";
import { Theme } from "../redux/reducers/ThemeReducer";

function Notifications() {
  const theme = useSelector(Theme);
  const notifs = useSelector(availableNotifications);
  return (
    <div className={theme ? "bg-light pt-5 vh-100" : "bg-dark pt-5 vh-100"}>
      <div className='container-sm'>
        {}
        <div
          class='card mt-3'
          style={{ background: theme ? "#fff" : "#303138" }}
        ></div>
      </div>
    </div>
  );
}

export default Notifications;
