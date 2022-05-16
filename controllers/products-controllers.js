const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const Product = require("../models/product");

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json({
      products: products.map((product) => product.toObject({ getters: true })),
    });
  } catch (err) {
    const error = new HttpError(
      "Fetching products failed, please try again later.",
      500
    );
    return next(error);
  }
};

const getProductById = async (req, res, next) => {
  console.log("get product by id envoked");
  const productId = req.params.pid;
  

  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a product.",
      500
    );
    return next(error);
  }

  if (!product) {
    const error = new HttpError(
      "Could not find a product for the provided id.",
      404
    );
    return next(error);
  }
  res.json({ product: product.toObject({ getters: true }) });
};

const getProductByCategory = async (req, res, next) => {
  const productCategory = req.params.name;
  let product;
  try {
    product = await Product.find({ supplementCategory: productCategory });
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a product here.",
      500
    );
    return next(error);
  }

  if (!product) {
    const error = new HttpError(
      "Could not find a product for the provided id.",
      404
    );
    return next(error);
  }
  res.json({
    products: product.map((product) => product.toObject({ getters: true })),
  });
  // res.json({ product: product.toObject({ getters: true }) });
};

const getProductsByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  let products;
  try {
    products = await Product.find({ creator: userId });
    console.log("products", products);
  } catch (err) {
    const error = new HttpError(
      "Fetching products failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!products || products.length === 0) {
    throw new HttpError(
      "Could not find products for the provided category.",
      404
    );
  }

  res.json({
    products: products.map((product) => product.toObject({ getters: true })),
  });
};

// -----------------------Create Product-----------------------------------------

const createProduct = async (req, res, next) => {
  console.log(req.body);
  const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return next(
  //     new HttpError("Invalid inputs passed, please check your data.", 422)
  //   );
  // }

  const {
    name,
    desc,
    price,
    rating,
    image,
    nutritionImage,
    supplementCategory,
    flavour,
    weight,
    // creator,
  } = req.body;

  const supplementCategoryUppercaseName  = supplementCategory.toUpperCase();
  
  const createdProduct = new Product({
    name,
    price,
    image,
    nutritionImage,
    desc,
    rating,
    supplementCategory : supplementCategoryUppercaseName,
    flavour,
    weight,
    // creator,
  });

  try {
    console.log("create product envoked!");
    await createdProduct.save();
  } catch (err) {
    const error = new HttpError(
      "Creating product failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ product: createdProduct });
};

const updateProduct = async (req, res, next) => {
  console.log("update product envoked form backend!");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }

  const { name, desc, price, rating, supplementCategory } = req.body;
  const productId = req.params.pid;

  let product;
  try {
    product = await Product.findById(productId);
    console.log(product);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update product.",
      500
    );
    return next(error);
  }

  product.name = name;
  product.desc = desc;
  product.price = price;
  product.rating = rating;
  product.image = image;
  product.nutritionImage = nutritionImage;
  product.supplementCategory = supplementCategory;
  product.flavour = flavour;
  product.weight = weight;

  try {
    await product.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update product.",
      500
    );
    return next(error);
  }
  res.status(200).json({ product: product.toObject({ grtters: true }) });
};



// ------------------------------Delete Product---------------------------------------



const deleteProduct = async (req, res, next) => {
  const productId = req.params.pid;

  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete product.",
      500
    );
    return next(error);
  }

  try {
    await product.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete product.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted product." });
};

exports.getProductById = getProductById;
exports.getProducts = getProducts;
exports.getProductByCategory = getProductByCategory;
exports.getProductsByUserId = getProductsByUserId;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
