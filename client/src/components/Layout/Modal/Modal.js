import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../features/uiSlice/uiSlice';

import classes from './Modal.module.css';

export const Modal = (props) => {
  const dispatch = useDispatch();

  const Backdrop = (props) => {
    const backdropClickHandler = () => {
      dispatch(uiActions.toggle());
    };
    return (
      <div className={classes['backdrop']} onClick={backdropClickHandler} />
    );
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };

  const portalElement = document.getElementById('overlays');

  return (
    <div>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </div>
  );
};
