import CategoriesBlock from "../../components/CategoriesBlock/CategoriesBlock";
import classes from "./Shop.module.css";

import SwiperSlider from "../../components/SwiperSliders/SwiperSlider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategoriesThunk } from "../../features/productSlice";
import { shopProductCategories } from "../../services/productData";

const Shop = () => {
  return (
      <div>
        <CategoriesBlock data={shopProductCategories} />
        <SwiperSlider heading={"FEATURED"} />
      </div>
  );
};

export default Shop;
