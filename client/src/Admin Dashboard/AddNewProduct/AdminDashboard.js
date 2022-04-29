/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../AddNewProduct/AdminDashboard.css";
import CategoriesBlock from "../../components/CategoriesBlock/CategoriesBlock";
import { shopProductCategories } from "../../services/productData";
import Welcome from "../Welcome";
import AddNewProduct from "../AddNewProduct/AddNewProduct";

export default function () {
  const [welcome, setWelcome] = useState(true);
  const [addProduct, setAddProduct] = useState(false);
  const [viewOrder, SetviewOrder] = useState(false);

  const handleDashboard = () => {
    setAddProduct(false);
    setWelcome(true);
    SetviewOrder(false);
  };
  const handleProduct = () => {
    setAddProduct(true);
    setWelcome(false);
    SetviewOrder(false);
  };
  const handleViewOrder = () => {
    setAddProduct(false);
    setWelcome(false);
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
              <a onClick={handleProduct}>Products</a>
            </li>
            <li>
              <a onClick={handleViewOrder}>Add Product</a>
            </li>
            <li>
              <a>New Orders</a>
            </li>
            <li>
              <a>Orders List</a>
            </li>
          </ul>

          <Link to="/" className="home-navigation">
            Home
          </Link>
        </div>

        <div className="product-section">
          {welcome ? <Welcome /> : null}
          {addProduct ? <CategoriesBlock data={shopProductCategories} /> : null}
          {viewOrder ? <AddNewProduct /> : null}
        </div>
      </div>
    </div>
  );
}
