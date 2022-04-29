/** @format */

import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { CtaButton } from "../Buttons/CtaButton";
import "./ProductsCategories.css";

export const ProductsCategories = (props) => {
  let textStyle = "";

  if (props.style !== "imgRightSide") {
    textStyle = "products-categories-text-Rightside";
  } else {
    textStyle = "products-categories-text-side";
  }

  const textSideOfProductCategories = (
    <div className={textStyle}>
      <h3 className="products-categories-heading">{props.heading}</h3>
      <p className="products-categories-desc">{props.desc}</p>
      <div className="products-categories-cta">
        <Link to="/store">
        <CtaButton btnTxt={"SHOP NOW"} />
        </Link>
      </div>
    </div>
  );

  const imgSideOfProductCategories = (
    <div className="products-categories-img-side">
      <img src={props.img} />
    </div>
  );

  let rightSideOfDiv = "";
  let leftSideOfDiv = "";

  if (props.style === "imgRightSide") {
    rightSideOfDiv = textSideOfProductCategories;
    leftSideOfDiv = imgSideOfProductCategories;
  } else {
    rightSideOfDiv = imgSideOfProductCategories;
    leftSideOfDiv = textSideOfProductCategories;
  }

  return (
    <section className="products-categories-container">
      <Fade left>
        <div className="products-categories-right-side">{rightSideOfDiv}</div>
      </Fade>
      <Fade right>
        <div className="products-categories-left-side">{leftSideOfDiv}</div>
      </Fade>
    </section>
  );
};
