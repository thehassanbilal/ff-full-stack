import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/authSlice/authSlice";
import cartSlice from "../features/cartSlice/cartSlice";
import orderSlice from "../features/orderSlice/orderSlice";
import productSlice from "../features/productSlice";
import uiSlice from "../features/uiSlice/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    productSlice: productSlice,
    cart: cartSlice.reducer,
    orderSlice: orderSlice,
    user: userSlice.reducer,
  },
});
export default store;
