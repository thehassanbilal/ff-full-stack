const express = require("express");
const { check } = require("express-validator");

const ordersControllers = require("../controllers/orders-controllers");

const router = express.Router();

router.get("/:pid", ordersControllers.getOrderById);

router.get("/user/:uid", ordersControllers.getOrdersByUserId);

router.post(
  "/",
  [
    check("fullName").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("contact").isLength({ min: 11 }),
    check("postalCode").isLength({ min: 5 }),
    check("address").isLength({ min: 5 }),
  ],
  ordersControllers.createOrder
);

// router.patch(
//   '/:pid',
//   [
//     check('title')
//       .not()
//       .isEmpty(),
//     check('description').isLength({ min: 5 })
//   ],
//   ordersControllers.updateOrder
// );

router.delete("/:pid", ordersControllers.deleteOrder);

module.exports = router;
