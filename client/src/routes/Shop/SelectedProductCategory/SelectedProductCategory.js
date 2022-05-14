/** @format */

import React, { useEffect } from "react";
import SwiperSlider from "../../../components/SwiperSliders/SwiperSlider";
import "./SelectedProductCategory.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategoryThunk } from "../../../features/productSlice";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "../../../App.css";

const SelectedProductCategory = () => {
  const dispatch = useDispatch();

  let { name } = useParams();

  
  const productCategoryFromParams = name.replaceAll("-", " ");

  const selectedCategory = useSelector(
    (state) => state.productSlice.selectedCategory
  );

  const products = selectedCategory.products;

  useEffect(async () => {
    dispatch(getSelectedCategoryThunk(productCategoryFromParams));
  }, []);

  return (
    <>
      <div className="SelectedProductCategory-container">
        <div className="SelectedProductCategory-bannerDiv">
          {/* <Banner img={bannerURL} /> */}
        </div>
        <p className="SelectedProductCategory-param"></p>
        <h1 className="pricingSection-heading line-divider">
          {productCategoryFromParams}
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

      <SwiperSlider heading={`Most Popular in ${productCategoryFromParams}`} />
    </>
  );
};

export default SelectedProductCategory;
