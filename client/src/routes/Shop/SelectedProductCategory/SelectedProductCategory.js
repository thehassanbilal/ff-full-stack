/** @format */

import React, { useEffect } from "react";
import CategoriesBlock from "../../../components/CategoriesBlock/CategoriesBlock";
import { Banner } from "../../../components/Layout/Banner/Banner";
import SwiperSlider from "../../../components/SwiperSliders/SwiperSlider";
import axios from "axios";
import "./SelectedProductCategory.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedCategoryThunk,
  removeSelectedCategoryProduct,
} from "../../../features/productSlice";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "../../../App.css";

const SelectedProductCategory = () => {
  const dispatch = useDispatch();
  let { name } = useParams();

  const selectedCategory = useSelector(
    (state) => state.productSlice.selectedCategory
  );
  
  const products = selectedCategory.products;
  console.log(products);

  useEffect(async () => {
    console.log("i am in useEffect");
    dispatch(getSelectedCategoryThunk(name));
  }, []);

  return (
    <>
      <div className="SelectedProductCategory-container">
        <div className="SelectedProductCategory-bannerDiv">
          {/* <Banner img={bannerURL} /> */}
        </div>
        <p className="SelectedProductCategory-param"></p>
        <h1 className="pricingSection-heading line-divider">
         {name}
        </h1>

        <div className="SelectedProductCategory-products">
          {products?.map((product) => {
            return (
              <ProductCard
                id={product?.id}
                img={product?.image}
                name={product?.name}
                price={product?.price}
              />
            );
          })}
        </div>
      </div>

      <SwiperSlider heading={`Most Popular in ${name}`} />
    </>
  );
};

export default SelectedProductCategory;
