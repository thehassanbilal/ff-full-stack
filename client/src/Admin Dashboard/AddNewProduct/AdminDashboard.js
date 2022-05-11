/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../AddNewProduct/AdminDashboard.css";
import CategoriesBlock from "../../components/CategoriesBlock/CategoriesBlock";
import { shopProductCategories } from "../../services/productData";
import Welcome from "../Welcome";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import OrdersList from "../OrdersList/OrdersList";

export default function () {
  const [welcome, setWelcome] = useState(true);
  const [allProducts, setAllProducts] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const [viewOrder, SetviewOrder] = useState(false);

  const handleDashboard = () => {
    setWelcome(true);
    setAllProducts(false);
    setAddProduct(false);
    SetviewOrder(false);
  };

  const handleAllProducts = () => {
    setWelcome(false);
    setAllProducts(true);
    setAddProduct(false);
    SetviewOrder(false);
  };
  
  const handleAddProduct = () => {
     setWelcome(false);
     setAllProducts(false);
    setAddProduct(true);
    SetviewOrder(false);
  };

  const handleOrdersList = () => {
     setWelcome(false);
     setAllProducts(false);
    setAddProduct(false);
    SetviewOrder(true);
  };
  
  return (
    <div>
      <div class="wrapper nav-wraper">
        <div className="navbarAdmin">
          <ul>
            <li>
              <a class="active" onClick={handleDashboard}>
                Dashboard
              </a>
            </li>
            <li>
              <a onClick={handleAddProduct}>Products</a>
            </li>
            <li>
              <a onClick={handleAllProducts}>Add Product</a>
            </li>
            {/* <li>
              <a>New Orders</a>
            </li> */}
            <li>
              <a onClick={handleOrdersList}>Orders List</a>
            </li>
          </ul>

          <Link to="/" className="home-navigation">
            Home
          </Link>
        </div>

        <div className="product-section">
          {welcome ? <Welcome /> : null}
          {addProduct ? <CategoriesBlock data={shopProductCategories} /> : null}
          {allProducts ? <AddNewProduct /> : null}
          {viewOrder ? <OrdersList/> : null }
        </div>
      </div>
    </div>
  );
}
