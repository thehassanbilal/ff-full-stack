/** @format */

import React from "react";
import CategoriesBlock from "../../../components/CategoriesBlock/CategoriesBlock";
import SwiperSlider from "../../../components/SwiperSliders/SwiperSlider";

import { shopProductCategories } from "../../../services/productData";

const ProductCategory = () => {
  return (
    <div>
      <CategoriesBlock data={shopProductCategories} />
      <SwiperSlider />
    </div>
  );
};

export default ProductCategory;
