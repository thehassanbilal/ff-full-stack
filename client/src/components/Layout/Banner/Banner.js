/** @format */

import '../Banner/Banner.css';

export const Banner = (props) => {
  return (
    <div className='banner-container'>
      <img src={props.img} alt='Banner' />
    </div>
  );
};
