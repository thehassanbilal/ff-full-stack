import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/authSlice/authSlice";
import classes from "./ProfileBtn.module.css";

const ProfileBtn = (props) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className={classes["profile-dropdown-container"]}>
      <span className={classes["profile-username"]}>👤 {props.username}</span>
      <div className={classes["profile-dropdown-content"]}>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default ProfileBtn;
