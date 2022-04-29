/** @format */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import imges for carousel
import { pricingSliderImages } from "../../../services/productData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
import "../Pricing/pricing.css";

// install Swiper modules
SwiperCore.use([Navigation]);

const PricingSlider = () => {
  return (
    <>
      <Swiper navigation={true} onNavigationHide className="Carousel-swiper">
        {pricingSliderImages.map((pricingSliderImages) => (
          <SwiperSlide className="Carousel-swiper-slide">
            <img src={pricingSliderImages.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PricingSlider;
