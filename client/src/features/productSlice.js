import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../services/backendPort';
const axios = require('axios');

const API_PATH = API_URL;

const headers = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const PostHeaders = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
// ----------------------------AddNewProduct----------------------------------
export const addNewProductThunk = createAsyncThunk(
  'POSTProduct/addProductThunk',
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
      console.log('add product enkoked!');
      console.log(
        name,
        price,
        supplementCategory,
        image,
        nutritionImage,
        flavour,
        weight,
        company,
        desc,
        rating
      );
      const response = await fetch(`${API_PATH}/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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

      console.log('name', name);
      console.log('price', price);
      console.log('supplement category', supplementCategory);
      console.log('flavour', flavour);
      console.log('weight', weight);
      console.log('company', company);
      console.log('desc', desc);
      console.log('rating', rating);
      console.log('image', image);
      console.log('nutritionImage', nutritionImage);

      let data = await response.json();
      console.log('data', data);
      // if (response.status === 200) {
      //   return { ...data, username: username, email: email };
      // } else {
      //   return thunkAPI.rejectWithValue(data);
      // }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

// ----------------------------------Suppliment Categories-----------------

export const getProductCategoriesThunk = createAsyncThunk(
  'GETProduct/getProductByCategoryThunk',
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
  'GETProduct/getSelectedCategoryThunk',
  async (productCategoryFromParams) => {
    const response = await fetch(
      `${API_PATH}/api/products/category/${productCategoryFromParams}`,
      headers
    );
    const data = await response.json();
    return data;
  }
);
// ----------------------------------Comapanies Thunk-----------------
export const getCompaniesThunk = createAsyncThunk(
  'GETProduct/getCompaniesThunk',
  async () => {
    const response = await fetch(`${API_PATH}/companies`, headers);
    const data = await response.json();
    return data;
  }
);

// ----------------------------------One Product Thunk-----------------
export const getSelectedProductThunk = createAsyncThunk(
  'GETProduct/getSelectedProductThunk',
  async (id) => {
    const response = await fetch(`${API_PATH}/api/products/${id}`, headers);
    const data = await response.json();
    return data;
  }
);

//--------------------------Update Product-------------------------

export const editProductThunk = createAsyncThunk(
  'PATCHProduct/editProductThunk',
  async (
    {
      id,
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
      const response = await fetch(`${API_PATH}/api/products/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
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

      console.log('name', name);
      console.log('price', price);
      console.log('supplement category', supplementCategory);
      console.log('flavour', flavour);
      console.log('weight', weight);
      console.log('company', company);
      console.log('desc', desc);
      console.log('rating', rating);
      console.log('image', image);
      console.log('nutritionImage', nutritionImage);

      let data = await response.json();
      console.log('data', data);

      // if (response.status === 200) {
      //   return { ...data, username: username, email: email };
      // } else {
      //   return thunkAPI.rejectWithValue(data);
      // }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

//--------------------------Delete Product-------------------------

export const deleteProductThunk = createAsyncThunk(
  'DeleteProduct/deleteProductThunk',
  async (id) => {
    const response = await fetch(`${API_PATH}/api/products/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: 'prductSlice',
  initialState: {
    productCategories: [],
    selectedCategory: [],
    selectedProduct: {},
    deleteStatus: [],
    editProduct: '',
    isLoading: false,
  },
  reducers: {
    editProductFunc(state, action) {
      const productId = action.payload;
      state.editProduct = productId;
    },
    clearState(state, action) {
      state.editProduct = '';
    },
    removeSelectedCategoryProduct: (state, action) => {
      return { ...state, selectedCategory: [] };
    },
    removeSelectedProduct: (state, action) => {
      return { ...state, selectedProduct: {} };
    },
  },
  extraReducers: {
    [getProductCategoriesThunk.pending]: (state, action) => {
      console.log('pending');
    },
    [getProductCategoriesThunk.fulfilled]: (state, action) => {
      return { ...state, productCategories: action.payload };
    },
    [getProductCategoriesThunk.rejected]: (state, action) => {
      console.log('rejected');
    },
    // ------------------------------------------------------
    [getSelectedCategoryThunk.pending]: (state, action) => {
      return {...state, isLoading : true}
    },
    [getSelectedCategoryThunk.fulfilled]: (state, action) => {
      return { ...state,isLoading: false, selectedCategory: action.payload };
    },
    [getSelectedCategoryThunk.rejected]: (state, action) => {
    },
    // ------------------------------------------------------
    [getCompaniesThunk.pending]: (state, action) => {
      console.log('pending');
    },
    [getCompaniesThunk.fulfilled]: (state, action) => {
      return { ...state, companies: action.payload };
    },
    [getCompaniesThunk.rejected]: (state, action) => {
      console.log('rejected');
    },
    // --------------------------------------------------------
    [getSelectedProductThunk.pending]: (state, action) => {
      console.log('pending');
    },
    [getSelectedProductThunk.fulfilled]: (state, action) => {
      return { ...state, selectedProduct: action.payload };
    },
    [getSelectedProductThunk.rejected]: (state, action) => {
      console.log('rejected');
    },
    //-------------------------------------------------------//
     [editProductThunk.pending]: (state, action) => {
      console.log('pending');
    },
    [editProductThunk.fulfilled]: (state, action) => {
      return { ...state, editProduct : '' };
    },
    [editProductThunk.rejected]: (state, action) => {
      console.log('rejected');
    },
    //-------------------------------------------------------
    [deleteProductThunk.pending]: (state, action) => {
      console.log('pending');
    },
    [deleteProductThunk.fulfilled]: (state, action) => {
      return { ...state, deleteState: action.payload };
    },
    [deleteProductThunk.rejected]: (state, action) => {
      console.log('rejected');
    },
  },
});
export const {
  removeSelectedCategoryProduct,
  removeSelectedProduct,
  editProductFunc,
  clearState,
} = productSlice.actions;

export default productSlice.reducer;
