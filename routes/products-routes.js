const express = require("express");

const productsControllers = require("../controllers/products-controllers");
const { check } = require("express-validator");

const router = express.Router();

router.get("/", productsControllers.getProducts);

router.get("/:pid", productsControllers.getProductById);

router.get("/user/:uid", productsControllers.getProductsByUserId);

router.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("price").not().isEmpty(),
    check("desc").isLength({ min: 5 }),
    check("rating").not().isEmpty(),
    check("supplementCategory").not().isEmpty(),
  ],
  productsControllers.createProduct
);

router.patch(
  "/:pid",
  [
    check("name").not().isEmpty(),
    check("price").not().isEmpty(),
    check("desc").isLength({ min: 5 }),
    check("rating").not().isEmpty(),
    check("supplementCategory").not().isEmpty(),
  ],
  productsControllers.updateProduct
);

router.delete("/:pid", productsControllers.deleteProduct);

module.exports = router;
