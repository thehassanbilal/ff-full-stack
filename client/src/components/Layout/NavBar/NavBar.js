/** @format */

import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { uiActions } from "../../../features/uiSlice/uiSlice";
import "../NavBar/navBar.css";
import logo from "../../../assets/logo/logo.svg";
import { useState, useEffect } from "react";
import { userSelector, logout } from "../../../features/authSlice/authSlice";
import ProfileBtn from "./ProfileBtn";
const NavBar = () => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const {username , isLoggedIn } = useSelector(userSelector);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  const logoutHandler = () => {
    dispatch(logout());
  }

  // for sticky navbar
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  const dropdown = (
    <div className="navBar-dropdown">
      <div className="navBar-dropdown-moreBtn">⋮</div>
      <div className="navBar-dropdown-moreBtn-links">
        <Link to="/dietplan">DIET PLAN 🍏</Link>
        <Link to="/blog">BLOGS 📰</Link>
        <Link to="/about">ABOUT 🧑</Link>
      </div>
    </div>
  );
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light ${stickyClass}`}>
        <div className="navbar-container container">
          <a className="navbar-brand" href="#">
            <Link to="/">
              <img src={logo} alt="Not Found" height="48px" width="48px" />
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item">
                <Link to="/store">
                  <a className="nav-link active" aria-current="page" href="#">
                    STORE
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/training">
                  <a className="nav-link active" aria-current="page" href="#">
                    TRAINING
                  </a>
                </Link>
              </li>
              <li>{dropdown}</li>
            </ul>
            <Outlet />

            <div className="navBar-rightDiv">
              {isLoggedIn ? <div > <Link className="dashboard-btn" to={'/dashboard'}>Dashboard</Link> </div> : <a onClick={toggleCartHandler} className="cartIcon">
                <div className="cart-div">
                  <i className="fa fa-shopping-cart"></i>
                  <div className="cartBatc">{cartQuantity}</div>
                </div>
              </a>}

              {isLoggedIn && <ProfileBtn username={username} /> }
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
