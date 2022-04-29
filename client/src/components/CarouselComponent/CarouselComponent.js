/** @format */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import imges for carousel
import { carouselImgs } from "../../services/productData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../CarouselComponent/CarouselComponent.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

const CarouselComponent = () => {
  return (
    <>
      <Swiper navigation={true} onNavigationHide className="Carousel-swiper">
        {carouselImgs.map((carouselImg) => (
          <SwiperSlide className="Carousel-swiper-slide">
            <img src={carouselImg.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselComponent;
