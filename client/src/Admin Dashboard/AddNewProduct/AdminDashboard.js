/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../AddNewProduct/AdminDashboard.css";
import CategoriesBlock from "../../components/CategoriesBlock/CategoriesBlock";
import { shopProductCategories } from "../../services/productData";
import Welcome from "../Welcome";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import OrdersList from "../OrdersList/OrdersList";
import { useSelector } from "react-redux";

export default function () {
  const [welcome, setWelcome] = useState(true);
  const [addProduct, setAddProduct] = useState(false);
  const [allProducts, setAllProducts] = useState(false);
  const [viewOrder, SetviewOrder] = useState(false);

  const editState = useSelector((state) => state.productSlice.editProduct);

  const productId = editState.map((product) => product.productId);

  if(productId.length !== 0) {
    return <AddNewProduct/>
  }

  const handleDashboard = () => {
    setWelcome(true);
    setAddProduct(false);
    setAllProducts(false);
    SetviewOrder(false);
  };

  const handleAllProducts = () => {
    setWelcome(false);
    setAddProduct(true);
    setAllProducts(false);
    SetviewOrder(false);
  };

  const handleAddProduct = () => {
    setWelcome(false);
    setAddProduct(false);
    setAllProducts(true);
    SetviewOrder(false);
  };

  const handleOrdersList = () => {
    setWelcome(false);
    setAddProduct(false);
    setAllProducts(false);
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
          {allProducts ? (
            <CategoriesBlock data={shopProductCategories} />
          ) : null}
          {addProduct ? <AddNewProduct/> : null}
          {/* {productId !== null || addProduct ? <AddNewProduct /> : null} */}
          {viewOrder ? <OrdersList /> : null}
        </div>
      </div>
    </div>
  );
}
