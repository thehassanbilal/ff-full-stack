import React from 'react';
import { Banner } from '../../../components/Layout/Banner/Banner';
import SwiperSlider from '../../../components/SwiperSliders/SwiperSlider';

import bannerImg from '../../../assets/banners/underCarouselBanner.jpg';

const SelectedCompany = () => {
  return (
    <div>
      <Banner img={bannerImg} />
      <SwiperSlider heading={'Flavour'} />
      <SwiperSlider heading={'Best'} />
      <SwiperSlider heading={'Recommanded'} />
    </div>
  );
};

export default SelectedCompany;
