import React from 'react';
import './LoadingSpinner.css';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <>
      <div className="loading-spinner-container">
        <div className="loading-spinner">
          <Spinner
            as="span"
            animation="border"
            size="lg"
            role="status"
            aria-hidden="true"
            varient="success"
          />
        </div>
        <div className="loading-spinner-text">Loading...</div>
      </div>
      <div className="loading-spinner-detail">Please refresh page if it's taking longer to load...</div>
    </>
  );
};

export default LoadingSpinner;
