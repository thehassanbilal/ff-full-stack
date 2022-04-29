/** @format */

import { ProductsCategories } from './ProductsCategories';

import './ProductsCategoriesContainer.css';
import { productsCategoriesData } from '../../../services/productData';
import '../../../App.css';

export const ProductsCategoriesContainer = () => {
  return (
    <div className='product-categories-container'>
      <h2 className='product-categories-heading line-divider pricingSection-heading '>
        Categories
      </h2>
      {productsCategoriesData.map((category, i) => (
        <ProductsCategories
          heading={category.heading}
          desc={category.desc}
          img={category.img}
          style={category.style}
        />
      ))}
    </div>
  );
};
