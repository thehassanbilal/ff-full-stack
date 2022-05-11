import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {API_URL} from "../services/backendPort";
const axios = require("axios");


const API_PATH =API_URL;

const headers = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const PostHeaders = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
// ----------------------------AddNewProduct----------------------------------
export const addNewProductThunk = createAsyncThunk(
  "POSTProduct/addProductThunk",
  async (
    {
      name,
      price,
      supplementCategory,
      image,
      nutritionImage,
      flavour,
      weight,
      company,
      desc,
      rating,

    },
    thunkAPI
  ) => {
    try {
      //   const formData = new FormData();
      //   formData.append("name", name);
      //   formData.append("price", price);
      //   formData.append("supplementCategory", supplementCategory);
      //   // formData.append("images", images);
      //   formData.append("flavour", flavour);
      //   formData.append("weight", weight);
      //   formData.append("company", company);
      //   formData.append("desc", desc);
      //   formData.append("rating", rating);

      //   for (let [key, value] of formData) {
      //     console.log(`${key}: ${value}`);
      //   }

      const response = await fetch(`${API_PATH}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          supplementCategory,
          image,
          nutritionImage,
          flavour,
          weight,
          company,
          desc,
          rating,
        }),
      });

      console.log("name", name);
      console.log("price", price);
      console.log("supplement category", supplementCategory);
      console.log("flavour", flavour);
      console.log("weight", weight);
      console.log("company", company);
      console.log("desc", desc);
      console.log("rating", rating);
      console.log("image", image);
      console.log("nutritionImage", nutritionImage);

      let data = await response.json();
      console.log("data", data);
      // if (response.status === 200) {
      //   return { ...data, username: username, email: email };
      // } else {
      //   return thunkAPI.rejectWithValue(data);
      // }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

// ----------------------------------Suppliment Categories-----------------

export const getProductCategoriesThunk = createAsyncThunk(
  "GETProduct/getProductByCategoryThunk",
  async () => {
    const response = await fetch(
      `${API_PATH}/api/supplement-categories`,
      headers
    );
    const data = await response.json();
    return data;
  }
);
// ----------------------------------One Suppliment Category---------------------//

export const getSelectedCategoryThunk = createAsyncThunk(
  "GETProduct/getSelectedCategoryThunk",
  async () => {
    // console.log("here", name);
    const response = await fetch(`${API_PATH}/api/products`, headers);
    const data = await response.json();
    return data;
  }
);
// ----------------------------------Comapanies Thunk-----------------
export const getCompaniesThunk = createAsyncThunk(
  "GETProduct/getCompaniesThunk",
  async () => {
    const response = await fetch(`${API_PATH}/companies`, headers);
    const data = await response.json();
    return data;
  }
);

// ----------------------------------One Product Thunk-----------------
export const getSelectedProductThunk = createAsyncThunk(
  "GETProduct/getSelectedProductThunk",
  async (id) => {
    console.log("Hello from thunk");
    const response = await fetch(`${API_PATH}/api/products/${id}`, headers);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "prductSlice",
  initialState: {
    productCategories: [],
    selectedCategory: [],
    selectedProduct: {},
  },
  reducer: {
    removeSelectedCategoryProduct: (state, action) => {
      return { ...state, selectedCategory: [] };
    },
    removeSelectedProduct: (state, action) => {
      return { ...state, selectedProduct: {} };
    },
  },
  extraReducers: {
    [getProductCategoriesThunk.pending]: (state, action) => {
      console.log("pending");
    },
    [getProductCategoriesThunk.fulfilled]: (state, action) => {
      return { ...state, productCategories: action.payload };
    },
    [getProductCategoriesThunk.rejected]: (state, action) => {
      console.log("rejected");
    },
    // ------------------------------------------------------
    [getSelectedCategoryThunk.pending]: (state, action) => {
      console.log("pending");
    },
    [getSelectedCategoryThunk.fulfilled]: (state, action) => {
      return { ...state, selectedCategory: action.payload };
    },
    [getSelectedCategoryThunk.rejected]: (state, action) => {
      console.log("rejected");
    },
    // ------------------------------------------------------
    [getCompaniesThunk.pending]: (state, action) => {
      console.log("pending");
    },
    [getCompaniesThunk.fulfilled]: (state, action) => {
      return { ...state, companies: action.payload };
    },
    [getCompaniesThunk.rejected]: (state, action) => {
      console.log("rejected");
    },
    // --------------------------------------------------------
    [getSelectedProductThunk.pending]: (state, action) => {},
    [getSelectedProductThunk.fulfilled]: (state, action) => {
      return { ...state, selectedProduct: action.payload };
    },
    [getSelectedProductThunk.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});
export const { removeSelectedCategoryProduct, removeSelectedProduct } =
  productSlice.actions;

export default productSlice.reducer;
