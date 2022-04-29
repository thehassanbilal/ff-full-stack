/** @format */

import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import { ProductsCategoriesContainer } from "../../components/Layout/Categories/ProductsCategoriesContainer";
import ClientTestimonials from "../../components/Layout/ClientTestimonials/ClientTestimonials";
import OurPrograms from "../../components/Layout/OurPrograms/OurPrograms";
import WhyUs from "../../components/Layout/WhyUs/WhyUs";
import SwiperSlider from "../../components/SwiperSliders/SwiperSlider";
import "../../App.css";
import NewsLetter from "../../cookies/NewLetter";
import { useEffect } from "react";

export const HomePage = () => {
  return (
    <>
      <div className="app-container">
        <CarouselComponent />
        <div className="main-container">
          <SwiperSlider className="most-popular" heading={"MOST POPULAR"} />
          <ProductsCategoriesContainer />
          <OurPrograms />
          <WhyUs />
        </div>
        <ClientTestimonials />
        <NewsLetter />
      </div>
    </>
  );
};
