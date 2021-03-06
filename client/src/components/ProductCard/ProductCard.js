/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { cartActions } from '../../features/cartSlice/cartSlice';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import classes from './ProductCard.module.css';
import {
  deleteProductThunk,
} from '../../features/productSlice';
import { editProductFunc } from '../../features/productSlice';
import { userSelector } from '../../features/authSlice/authSlice';

function ProductCard({ id, name, price, img }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = (id) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        img,
        name,
        price,
      })
    );
  };

  const deleteBtnHandler = () => {
    dispatch(deleteProductThunk(id));
  };

  const editBtnHandler = () => {
    dispatch(editProductFunc(id));
    navigate('/dashboard');
  };

  const { isLoggedIn } = useSelector(userSelector);

  return (
    <div className={classes['productCard-container']}>
      <div className={classes['productCard-card']}>
        <div className={classes['productCard-img-container']}>
          <img className={classes['productCard-image']} src={img} />
        </div>
        <div className={classes['productCard-content-box']}>
          <Link to={`/product/${id}`}>
            <p className={classes['productCard-product-name']}>{name}</p>
          </Link>
          <p className={classes['productCard-product-price']}>RS {price}</p>

          {isLoggedIn ? (
            <>
              <a
                className={classes['productCard-btn']}
                onClick={editBtnHandler}
              >
                <EditIcon />
              </a>
              <a
                className={classes['productCard-btn']}
                onClick={deleteBtnHandler}
              >
                <DeleteIcon />
              </a>
            </>
          ) : (
            <>
              <p className={classes['productCard-rating']}>???????????????</p>
              <a
                className={classes['productCard-btn']}
                onClick={() => addToCartHandler(id)}
              >
                Buy Now
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
