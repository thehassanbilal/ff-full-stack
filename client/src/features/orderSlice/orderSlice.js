import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { stat } from "fs/promises";

const API_PATH = "http://localhost:5000";

export const placeOrderThunk = createAsyncThunk(
  "POSTPlaceOrder/placeOrderThunk",
  async ({
    fullName,
    email,
    contact,
    postalCode,
    address,
    products,
    totalToPay,
  }) => {
    console.log("Products", products);
    const response = await fetch(`${API_PATH}/api/orders`, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        fullName,
        email,
        contact,
        postalCode,
        address,
        products,
        totalToPay,
        creator: "62566cf1c8236bbb21efcc5d",
      }),
    });
    return response.json();
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: { emptorData: [] },
  reducers: {},
  extraReducers: {
    [placeOrderThunk.pending]: (state, action) => {
      console.log("pending");
    },
    [placeOrderThunk.fulfilled]: (state, action) => {
      return { emptorData: action.payload };
    },
    [placeOrderThunk.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});
export default orderSlice.reducer;
