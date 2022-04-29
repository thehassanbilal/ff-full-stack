const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors=require("cors");

const ordersRoutes = require("./routes/orders-routes");
const usersRoutes = require("./routes/users-routes");
const productsRoutes = require("./routes/products-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/orders", ordersRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});


mongoose.set('useCreateIndex', true)
mongoose
  .connect(
    `mongodb+srv://thehassanbilal:Official786@cluster0.wrnix.mongodb.net/ff-Database?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
    )
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });
