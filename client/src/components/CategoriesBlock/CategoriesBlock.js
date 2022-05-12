import React from "react";
import { Link, Outlet } from "react-router-dom";

import classes from "./CategoriesBlock.module.css";

const CategoriesBlock = ({ data }) => {
  return (
    <div className={classes["categories-block-container"]}>
      {data?.map((category) => (
        <>
          <Link to={`/products/${category.name}`} key={category.name}>
            <div className={classes["categories-block-category-container"]}>
              <img
                className={classes["categories-block-category-img"]}
                src={category?.img}
                alt="name"
              />
              <div className={classes["categories-block-category-name"]}>
                {category.name}
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default CategoriesBlock;
