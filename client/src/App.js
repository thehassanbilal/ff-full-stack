/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "swiper/css/bundle";
import "./components/SwiperSliders/SwiperSlider.css";
import { HomePage } from "./routes/homePage/HomePage";
import { Layout } from "./components/Layout/Layout";
import Shop from "./routes/Shop/Shop";
import Training from "./routes/Training/Training";
import SelectedProductCategory from "./routes/Shop/SelectedProductCategory/SelectedProductCategory";
import ProductDetailPage from "./routes/ProductDetailPage/ProductDetailPage";
import Checkout from "./components/Layout/Cart/Checkout";
import Error from "./404/Error";
import AboutCoach from "./components/Layout/AboutCoach/AboutCoach";
import Contact from "./contact/Contact";
import Blog from "./blogs/Blog";
import SignUp from "./authentication/SignUp";
import CheckoutItems from "./components/Layout/Cart/CheckoutItems";
import Dashboard from "./Admin Dashboard/Dashboard";
import Dietplan from "./routes/DietPlan/Dietplan";
import NewProduct from "./Admin Dashboard/AddNewProduct/AddNewProduct";
import AdminDashboard from "./Admin Dashboard/AddNewProduct/AdminDashboard";
import Login from "./authentication/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="store" element={<Shop />} />
            <Route path="/products/:name" element={<SelectedProductCategory />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="training" element={<Training />} />
            <Route path="/store/checkout" element={<Checkout />} />
            <Route path="/about" element={<AboutCoach />} />
            <Route path="/dietplan" element={<Dietplan />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<CheckoutItems />} />
            <Route path="*" element={<Error />} />
            <Route path="/admin" element={<NewProduct />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
