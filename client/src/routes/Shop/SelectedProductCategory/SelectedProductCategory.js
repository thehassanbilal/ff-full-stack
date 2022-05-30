/** @format */

import React, { useEffect } from 'react';
import SwiperSlider from '../../../components/SwiperSliders/SwiperSlider';
import './SelectedProductCategory.css';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCategoryThunk } from '../../../features/productSlice';
import ProductCard from '../../../components/ProductCard/ProductCard';
import '../../../App.css';
import LoadingSpinner from '../../../components/Spinner/LoadingSpinner';
import { Banner } from '../../../components/Layout/Banner/Banner';

const SelectedProductCategory = (props) => {
  const dispatch = useDispatch();
  let { name } = useParams();

  const location = useLocation();
  const banner = location.state?.banner;

  const productCategoryFromParams = name.replaceAll('-', ' ');
  const selectedCategory = useSelector(
    (state) => state?.productSlice?.selectedCategory
  );
  const isLoading = useSelector((state) => state?.productSlice?.isLoading);
  const products = selectedCategory.products;

  useEffect(async () => {
    dispatch(getSelectedCategoryThunk(productCategoryFromParams));
  }, []);

  //  const productIsUndefined = products == null;

  console.log(banner);

  return (
    <>
      <div className="SelectedProductCategory-container">
        <div className="SelectedProductCategory-bannerDiv">
          <Banner img={banner} />
        </div>
        <p className="SelectedProductCategory-param"></p>
        <h1 className="pricingSection-heading line-divider">
          {productCategoryFromParams}
        </h1>
        {/* {productIsUndefined && <div>Nothing Here!</div>} */}
        {isLoading && <LoadingSpinner />}
        <div className="SelectedProductCategory-products">
          {products?.map((product) => {
            return (
              <ProductCard
                id={product?.id}
                img={product?.image}
                name={product?.name}
                price={product?.price}
                banner={product?.banner}
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
