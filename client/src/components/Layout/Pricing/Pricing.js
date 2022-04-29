/** @format */

import OurProgramsCard from '../../Cards/OurProgramsCard/OurProgramsCard';
import classes from './Pricing.module.css';

import { pricingsData } from '../../../services/productData';
import PricingSlider from './PricingSlider';

const Pricing = () => {
  const sub = 'Subscribe';
  return (
    <section className={classes['pricingSection-container']}>
      <PricingSlider />
      <h1 className={classes['pricingSection-heading']}>Pricing</h1>
      <div className={classes['pricingSection-title']}>
        <p className={classes['pricingSection-title-firstHalf']}>Our</p>
        <p className={classes['pricingSection-title-secondHalf']}>
          Special Plans
        </p>
      </div>
      <div className={classes['pricingSection-cards']}>
        {pricingsData.map((cardData) => {
          return (
            <OurProgramsCard
              logo={cardData.logo}
              id={cardData.id}
              name={cardData.name}
              desc={cardData.desc}
              price={cardData.price}
              itemOne={cardData.itemOne}
              itemTwo={cardData.itemTwo}
              itemThree={cardData.itemThree}
              itemFour={cardData.itemFour}
              itemFive={cardData.itemFive}
              btn_txt={sub}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
