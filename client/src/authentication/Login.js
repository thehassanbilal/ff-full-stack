/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../src/authentication/auth.css";
import {
  loginUser,
  userSelector,
  clearState,
} from "../features/authSlice/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      // toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      navigate('/');
    }
  }, [isError, isSuccess]);

  return (
    <>
      <div className="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <div className="form-header">
            <h2>Sign In</h2>
            <p>Fill out the Sign-In details!</p>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              name="email"
              required="required"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              name="password"
              onChange={(e) => setpassword(e.target.value)}
              required="required"
            />
          </div>

          <div className="form-group">
            <button
              onClick={loginHandler}
              type="submit"
              className="btn btn-primary btn-block btn-lg"
            >
              Sign In
            </button>
            <div className="signup-or-login-error">{errorMessage}</div>
          </div>
        </form>
        {/* <div className="text-center small already-account">
          Not a member? <Link to="/signup">Register Here</Link>
        </div> */}
      </div>
    </>
  );
}

export default Login;
