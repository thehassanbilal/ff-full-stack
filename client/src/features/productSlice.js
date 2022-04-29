import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_PATH = "http://localhost:5000";

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
export const addNewProductThunk = createAsyncThunk("addProduct", async () => {
  const response = await fetch(`${API_PATH}/api/product`, PostHeaders, {});
  const data = await response.json();
  return data;
});

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
    const response = await fetch(`${API_PATH}/api/products`, headers,
    );
    const  data = await response.json();
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
    [getSelectedProductThunk.pending]: (state, action) => {
    },
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
