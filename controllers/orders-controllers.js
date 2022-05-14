const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Order = require("../models/order");
const User = require("../models/user");

const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({});
    res.json({
      orders: orders.map((order) => order.toObject({ getters: true })),
    });
  } catch (err) {
    const error = new HttpError(
      "Fetching orders failed, please try again later.",
      500
    );
    return next(error);
  }
};

const getOrderById = async (req, res, next) => {
  const orderId = req.params.pid;

  let order;
  try {
    order = await Order.findById(orderId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a order.",
      500
    );
    return next(error);
  }

  if (!order) {
    const error = new HttpError(
      "Could not find order for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ order: order.toObject({ getters: true }) });
};

const getOrdersByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  // let orders;
  let userWithOrders;
  try {
    userWithOrders = await User.findById(userId).populate("orders");
  } catch (err) {
    const error = new HttpError(
      "Fetching orders failed, please try again later.",
      500
    );
    return next(error);
  }

  // if (!orders || orders.length === 0) {
  if (!userWithOrders || userWithOrders.orders.length === 0) {
    return next(
      new HttpError("Could not find orders for the provided user id.", 404)
    );
  }

  res.json({
    orders: userWithOrders.orders.map((order) => order.toObject({ getters: true })
    ),
  });
};

const createOrder = async (req, res, next) => {
  console.log("create order envoked!");
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const {
    fullName,
    email,
    contact,
    postalCode,
    address,
    totalToPay,
    creator,
    products,
  } = req.body;

  const createdOrder = new Order({
    fullName,
    email,
    contact,
    postalCode,
    address,
    products,
    totalToPay,
    creator,
  });

  try {
    await createdOrder.save();
  } catch (err) {
    const error = new HttpError(
      "Creating order failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ order: createdOrder });
};

const deleteOrder = async (req, res, next) => {
  const orderId = req.params.pid;

  let order;
  try {
    order = await Order.findById(orderId).populate("creator");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete order.",
      500
    );
    return next(error);
  }

  if (!order) {
    const error = new HttpError("Could not find order for this id.", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await order.remove({ session: sess });
    order.creator.orders.pull(order);
    await order.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete order.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted order." });
};

exports.getOrders = getOrders;
exports.getOrderById = getOrderById;
exports.getOrdersByUserId = getOrdersByUserId;
exports.createOrder = createOrder;
// exports.updateOrder = updateOrder;
exports.deleteOrder = deleteOrder;
