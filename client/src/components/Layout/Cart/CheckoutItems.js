/** @format */
import React, { useRef, useState } from "react";
import "../Cart/CheckoutItems.css";

import { useDispatch, useSelector } from "react-redux";
import { placeOrderThunk } from "../../../features/orderSlice/orderSlice";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../features/cartSlice/cartSlice";

function CheckoutItems() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.items);

  const idAndQuantity = cartData?.map((e) => ({
    productId: e?.id,
    name: e?.name,
    quantity: e?.quantity,
    flavour: e?.flavour,
    weight: e?.weight,
  }));
  
  const [popUp, setPopUp] = useState(false);
  //-------------------------Validations---------------------------------------------------
  const isEmpty = (value) => value?.trim() === "";
  const isFiveChars = (value) => value?.trim().length === 5;

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
    contact: true,
    postalCode: true,
    address: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const contactInputRef = useRef();
  const postalCodeInputRef = useRef();
  const addressInputRef = useRef();

  const enteredName = nameInputRef?.current?.value;
  const enteredEmail = emailInputRef?.current?.value;
  const enteredContact = contactInputRef?.current?.value;
  const enteredPostalCode = postalCodeInputRef?.current?.value;
  const enteredAddress = addressInputRef?.current?.value;

  const enteredNameIsValid = isEmpty(enteredName);
  const enteredEmailIsValid = isEmpty(enteredEmail);
  const enteredContactIsValid = isEmpty(enteredContact);
  const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
  const enteredAddressIsValid = isEmpty(enteredAddress);

  const formIsValid =
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredContactIsValid &&
    enteredPostalCodeIsValid &&
    enteredAddressIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    setFormInputsValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      contact: enteredContactIsValid,
      postalCode: enteredPostalCodeIsValid,
      address: enteredAddressIsValid,
    });

    if (formIsValid) {
      console.log("info is valid");
      
    } else {
      setPopUp(true);
      console.log("info not validate");
    }
  };

  const handleClose = () => {
    setPopUp(false);
  };
  const address = {
    enteredName,
    enteredEmail,
    enteredContact,
    enteredPostalCode,
    enteredAddress,
  };
  console.log(address.enteredName);
  const confirmOrderHandler = () => {
    console.log("cart data", address, cartData);
    dispatch(
      placeOrderThunk({
        fullName: enteredName,
        email: enteredEmail,
        contact: enteredContact,
        postalCode: enteredPostalCode,
        address: enteredAddress,
        products: idAndQuantity,
        totalToPay: totalToPay,
      })
    );
    setPopUp(false);
    dispatch(clearCart(null));
    // navigate("/");
  };
  // -------------------------Total items-------------------------------------------------

  var allProductsQuantity = [];
  cartData?.forEach((item) => allProductsQuantity?.push(item.quantity));
  var TotalItems = allProductsQuantity?.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  //-------------------------Sub Total ---------------------------------------------------

  var allProductsTotals = [];
  cartData.forEach((item) => allProductsTotals.push(item.totalPrice));
  var subTotal = allProductsTotals?.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  //--------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------------

  const deliveryCharges = 100;

  const totalToPay = subTotal + deliveryCharges;

  return (
    <div className="cart-top">
      <div class="card">
        <div class="card-body pt-5">
          <div class="row">
            <div class="col-md-7">
              <div class="left border">
                <div class="row">
                  <span class="header">Fill Information</span>
                </div>
                <form>
                  <div class="row">
                    <div class="col">
                      <span>Full Name:</span>
                      <input placeholder="Name..." ref={nameInputRef} />
                      {!formInputsValidity.name && (
                        <p className="validate">Please enter a valid name!</p>
                      )}
                    </div>

                    <div class="col-6">
                      <span>Email Address:</span>

                      <input
                        id="email"
                        placeholder="email..."
                        ref={emailInputRef}
                      />
                      {!formInputsValidity.email && (
                        <p className="validate">Please enter a valid email!</p>
                      )}
                    </div>
                    <div class="col-6">
                      <span>Contact Number:</span>
                      <input
                        type="tel"
                        id="contact"
                        placeholder="Contact..."
                        ref={contactInputRef}
                      />
                      {!formInputsValidity.contact && (
                        <p className="validate">
                          Please enter a valid contact!
                        </p>
                      )}
                    </div>
                    <div class="col-6">
                      <span>Postal Code:</span>

                      <input
                        id="Postal Code"
                        placeholder="Postal Code..."
                        ref={postalCodeInputRef}
                      />
                      {!formInputsValidity.postalCode && (
                        <p className="validate">
                          Please enter a valid postal code (5 characters long)!
                        </p>
                      )}
                    </div>

                    <div class="col-12">
                      <span>Address:</span>
                      <textarea
                        id="address"
                        placeholder="Complete address..."
                        className="address-info"
                        ref={addressInputRef}
                      ></textarea>
                      {!formInputsValidity.address && (
                        <p className="validate">
                          Please enter a valid address!
                        </p>
                      )}
                    </div>
                    <div className="btn-submit">
                      <button class="btn" onClick={confirmHandler}>
                        Place order
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-5">
              <div class="right border">
                <div class="header">Order Summary</div>
                <p>Total Items : {TotalItems}</p>

                {/* -----------------------CART ITEMS-------------------------- */}
                <div className="items-main-wraper">
                  {cartData.map((cartItem) => {
                    return (
                      <div class="row item">
                        <div class="col-4 align-self-center">
                          <img
                            class="img-fluid"
                            src={cartItem.img}
                            alt="product Image"
                          />
                        </div>
                        <div class="col-8">
                          <div class="row">
                            <b className="handle-padding">
                              RS {cartItem.price}
                            </b>
                          </div>
                          <div class="row text-muted">{cartItem.name}</div>
                          <div class="row">Quantity: x{cartItem.quantity}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ---------------------------------------------- */}

                <hr />
                <div class="row lower">
                  <div class="col text-left">Subtotal</div>
                  <div class="col text-right">
                    RS {subTotal.toLocaleString()}
                  </div>
                </div>
                <div class="row lower">
                  <div class="col text-left">Delivery</div>
                  <div class="col text-right">RS {deliveryCharges}</div>
                </div>
                <div class="row lower">
                  <div class="col text-left">
                    <b>Total to pay</b>
                  </div>
                  <div class="col text-right">
                    <b>RS {totalToPay.toLocaleString()}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // popup model code */}
      {popUp ? (
        <div class="popup-overlay">
          <div class="popup-body">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">User Confermation</h5>
                <button type="button" class="close" onClick={handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">Select done to confirm your order!</div>

              <button className="order-btn" onClick={confirmOrderHandler}>
                Done
                <i class="fa fa-check-square-o"></i>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CheckoutItems;
