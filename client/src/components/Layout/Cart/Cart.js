/** @format */

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiActions } from "../../../features/uiSlice/uiSlice";
import { Modal } from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart.items);
  console.log(cartData, "cart data");

  const closeButtonHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        <h1>Cart Items</h1>
        {cartData?.map((item, i) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>

      <div className={classes.actions}>
        <button onClick={closeButtonHandler} className={classes["button--alt"]}>
          Close
        </button>
        <Link to={`/checkout`}>
          <button onClick={closeButtonHandler} className={classes.button}>
            Order
          </button>
        </Link>
      </div>
    </Modal>
  );
};

export default Cart;
