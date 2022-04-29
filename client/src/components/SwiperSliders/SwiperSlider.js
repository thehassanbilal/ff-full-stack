/** @format */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { DUMMY_PRODUCTS } from "../../services/productData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperSlider.css";
import "../../routes/Shop/SelectedProductCategory/SelectedProductCategory.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import ProductCard from "../ProductCard/ProductCard";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const SwiperSlider = (props) => {
  return (
    <>
      <h1 className="pricingSection-heading line-divider">{props.heading}</h1>
      <Swiper
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
          1280: {
            width: 1280,
            slidesPerView: 4,
          },
        }}
        spaceBetween={10}
        slidesPerGroup={2}
        loop={true}
        // autoplay={{
        //   delay: 4500,
        //   disableOnInteraction: false,
        // }}
        loopFillGroupWithBlank={true}
        navigation={false}
        className="swiper"
        modules={[Autoplay]}
      >
        {DUMMY_PRODUCTS.map((product) => (
          <SwiperSlide className="product-swiper-slide">
            <ProductCard
              id={product?.id}
              name={product?.name}
              img={product?.img}
              price={product?.price}
              rating={product?.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
