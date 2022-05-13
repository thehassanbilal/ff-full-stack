/** @format */

import React, { useState } from "react";

import classes from "./ProductDetailComponent.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cartSlice/cartSlice";
import Select from "react-select";

const ProductDetailComponent = ({ data }) => {
  const [selectedFlavour, setSelectedFlavour] = useState();
  const [selectedWeight, setSelectedWeight] = useState();

  const { product } = data;
  const dispatch = useDispatch();

  const allflavours = product?.flavour?.map((flavour) => ({
    value: `${flavour}`,
    label: `${flavour}`,
  }));
  console.log(allflavours);
  console.log(selectedFlavour);

  const allWeights = product?.weight?.map((flavour) => ({
    value: `${flavour}`,
    label: `${flavour}`,
  }));
  console.log(allWeights);
  console.log(selectedWeight);

  // const {
  //   name,
  //   image,
  //   nutritionImage,
  //   rating,
  //   price,
  //   desc,
  //   weight,
  //   flavour,
  // } = product;

  const id = product?.id;
  const name = product?.name;
  const price = product?.price;
  const desc = product?.desc;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        desc,
        flavour: selectedFlavour,
        weight: selectedWeight,
      })
    );
    console.log(name, selectedFlavour, selectedWeight);
  };

  return (
    <div className={classes["ProductDetailPage-container"]}>
      <div className={classes["ProductDetailPage-imgSide"]}>
        <div className={classes["ProductDetailPage-img-container"]}>
          <img src={product?.image} />
        </div>
        <div className={classes["ProductDetailPage-desc"]}>
          <h3 className={classes["desc"]}>Description:</h3>
          <p>{product?.desc}</p>
        </div>
      </div>
      <div className={classes["ProductDetailPage-detailSide"]}>
        <p className={classes["ProductDetailPage-name"]}>{product?.name}</p>

        <div className={classes["ProductDetailPage-price-section"]}>
          <ul>
            <li className={classes["ProductDetailPage-price"]}>
              Rs {product?.price}
            </li>
            <li>Cash On Delivery</li>
            <li>2-3 days Delivery</li>
            <li>3 days return policy</li>
            <li>Flat Rate (All over pakistan)</li>
          </ul>
        </div>

        <div
          className={classes["ProductDetailPage-flavour-and-weight-container"]}
        >
          <Select
            fullWidth
            options={allflavours}
            placeholder="Select  a flavour..."
            value={selectedFlavour}
            onChange={(selectedOption) => setSelectedFlavour(selectedOption)}
          />

          <Select
            fullWidth
            options={allWeights}
            placeholder="Select  a weight..."
            value={selectedWeight}
            onChange={(selectedOption) => setSelectedWeight(selectedOption)}
          />
        </div>
        <div className={classes["ProductDetailPage-ctaBtn-container"]}>
          <button
            className={classes["ProductDetailPage-btn"]}
            onClick={addToCartHandler}
          >
            ADD TO CART
          </button>
        </div>
        {product?.nutritionImage && (
          <div className={classes["ProductDetailPage-nutritionImg"]}>
            <img
              src={product?.nutritionImage}
              alt="⚠ Nutrition Image not Available!"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailComponent;
