import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedProductThunk
} from "../../features/productSlice";
import { useParams } from "react-router-dom";

import ProductDetailComponent from "../../components/ProductDetailComponent/ProductDetailComponent";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(
    (state) => state?.productSlice?.selectedProduct
  );

  useEffect(() => {
    dispatch(getSelectedProductThunk(id));
  }, [dispatch, id]);

  return (
    <div>
      <ProductDetailComponent data={product} />
    </div>
  );
};

export default ProductDetailPage;
