/** @format */

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

export const Layout = ({ children }) => {
  const showCart = useSelector((state) => state.ui.isVisible);
  const { pathname } = useLocation();

  const renderLayoutComponent = () => {
    if (
      pathname === "/signup" ||
      pathname === "/signin" ||
      pathname === "/dashboard"
    ) {
      return (
        <>
          {showCart && <Cart />}
          {children}
        </>
      );
    } else {
      return (
        <>
          <NavBar />
          {showCart && <Cart />}
          {children}
          <Footer />
        </>
      );
    }
  };
  return <>{renderLayoutComponent()}</>;
};
