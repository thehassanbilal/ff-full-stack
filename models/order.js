const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  postalCode: { type: Number, required: true },
  address: { type: String, required: true },
  products: [
    {
      productId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      name: {type: String, required: true},
      quantity: { type: Number, required: true },
      flavour: [{type: String, required: true}],
      weight: [{type: String, required: true}],
    },
  ],
  totalToPay: { type: Number, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Order", orderSchema);
