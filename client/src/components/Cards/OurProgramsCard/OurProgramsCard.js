/** @format */

import "./OurProgramsCard.css";
import Flip from "react-reveal/Flip";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../features/cartSlice/cartSlice";

const OurProgramsCard = (props) => {
  const dispatch = useDispatch();
const navigate = useNavigate();

const addToCartHandler = () => {
  dispatch(
    cartActions.addItemToCart({
      id : props.id,
      name : props.name,
      price : props.price,
    })
  );
};

  const redirectHandler = () => {
    return navigate("/training");
  }
  return (
    <>
      <Flip left>
        <div className="ourProgramCard-card-container">
          <div className="ourProgramCard-logo-container">
            <span className="ourProgramCard-logo">
              <div className="circle-wrapper">
                <div className="success circle"></div>
                <div className="icon">{props.logo}</div>
              </div>
            </span>
          </div>
          <div className="ourProgramCard-title">{props.name}</div>
          <div className="ourProgramCard-cost">RS {props.price}</div>
          <p className="ourProgramCard-desc">{props.desc}</p>
          {props.itemOne &&
            <ul className="ourProgramCard-list">
              <li className="ourProgramCard-list-item">
                <i className="fa fa-arrow-right"></i>
                {props.itemOne}
              </li>
              <li className="ourProgramCard-list-item">
                <i className="fa fa-arrow-right"></i>
                {props.itemTwo}
              </li>
              <li className="ourProgramCard-list-item">
                <i className="fa fa-arrow-right"></i>
                {props.itemThree}
              </li>
              <li className="ourProgramCard-list-item">
                <i className="fa fa-arrow-right"></i>
                {props.itemFour}
              </li>
            </ul>
          }
          <button className="subscribe-btn" onClick={props.itemOne ? addToCartHandler : redirectHandler}>{props.btn_txt}</button>
        </div>
      </Flip>
    </>
  );
};

export default OurProgramsCard;
