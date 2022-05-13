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

  console.log(product?.name);

  // console.log(product);

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
      })
    );
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
          <select
            className={classes["ProductDetailPage-flavour-and-weight"]}
            name="flavor"
          >
            {product?.flavour?.map((flavor) => (
              <option className={classes["option"]}>{flavor}</option>
            ))}
          </select>

          <select
            className={classes["ProductDetailPage-flavour-and-weight"]}
            name="flavor"
          >
            {product?.weight?.map((weight) => (
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
        {product?.nutritionImage && 
          <div className={classes["ProductDetailPage-nutritionImg"]}>
            <img src={product?.nutritionImage} alt="⚠ Nutrition Image not Available!" />
          </div>
        }
      </div>
    </div>
  );
};

export default ProductDetailComponent;
