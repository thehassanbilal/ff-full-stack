/** @format */

import React from "react";

import classes from "./ProductDetailComponent.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cartSlice/cartSlice";
import img from "../../assets/products/DUMMY_PRODUCTS/1.jpg";

const ProductDetailComponent = ({data}) => {
  const {product} = data;
  console.log(product);
  const dispatch = useDispatch();

  const {
    id,
    name,
    price,
    desc,
    weight,
    flavour,
  } = product;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        desc,
      })
    );
  };

  // const productImg = `http://localhost:1337${data?.product_img?.[0]?.url}`;
  // const nutritionImg = `http://localhost:1337${data?.nutrition_img?.[0]?.url}`;

  return (
    <div className={classes["ProductDetailPage-container"]}>
      <div className={classes["ProductDetailPage-imgSide"]}>
        <div className={classes["ProductDetailPage-img-container"]}>
          {/* <img src={img} /> */}
        </div>
        <div className={classes["ProductDetailPage-desc"]}>
          <h3 className={classes["desc"]}>Description:</h3>
          <p>{desc}</p>
        </div>
      </div>
      <div className={classes["ProductDetailPage-detailSide"]}>
        <p className={classes["ProductDetailPage-name"]}>{name}</p>

        <div className={classes["ProductDetailPage-price-section"]}>
          <ul>
            <li className={classes["ProductDetailPage-price"]}>
              Rs {price}
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

          <select
            className={classes["ProductDetailPage-flavour-and-weight"]}
            name="flavor"
          >
            {flavour?.map((flavor) => (
              <option className={classes["option"]}>{flavor}</option>
            ))}
          </select>

          <select
            className={classes["ProductDetailPage-flavour-and-weight"]}
            name="flavor"
          >
            {weight?.map((weight) => (
              <option className={classes["option"]}>{weight}</option>
            ))}
          </select>
        </div>
        <div className={classes["ProductDetailPage-ctaBtn-container"]}>
          <button
            className={classes["ProductDetailPage-btn"]}
            onClick={addToCartHandler}
          >
            ADD TO CART
          </button>
        </div>
        {/* {!nutritionImg && (
          <div className={classes["ProductDetailPage-nutritionImg"]}>
            <img src={nutritionImg} alt="⚠ Nutrition Image not Available!" />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductDetailComponent;
