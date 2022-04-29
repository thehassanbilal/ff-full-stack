/** @format */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import imges for carousel
import { forDietPlan } from "../../services/productData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
import "../DietPlan/dietplan.css";
import DietChart from "./DietChart";

// install Swiper modules
SwiperCore.use([Navigation]);

const Dietplan = () => {
  return (
    <>
      <Swiper navigation={true} onNavigationHide className="Carousel-swiper">
        {forDietPlan.map((forDietPlan) => (
          <SwiperSlide className="Carousel-swiper-slide">
            <img src={forDietPlan.img} />
          </SwiperSlide>
        ))}
      </Swiper>

      <DietChart />
    </>
  );
};

export default Dietplan;
