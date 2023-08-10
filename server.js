const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

const port = process.env.PORT || 4000;
const authrouter = require("./routes/auth_routes");
app.use("/api", authrouter);
const userrouter = require("./routes/user_routes");
app.use("/api", userrouter);
const rolerouter = require("./routes/role_routes");
app.use("/api", rolerouter);
const hotelrouter = require("./routes/hotel_routes");
app.use("/api", hotelrouter);
const roomrouter = require("./routes/room_routes");
app.use("/api", roomrouter);
const spacerouter = require("./routes/spaces_routes");
app.use("/api", spacerouter);
const automobilerouter = require("./routes/auto_mobile");
app.use("/api", automobilerouter);
const typeidentifier = require("./routes/type_identifier");
app.use("/api", typeidentifier);
const categoriesamenities = require("./routes/categories_ammenities");
app.use("/api", categoriesamenities);
const orders = require("./routes/order_routes");
app.use("/api", orders);
const transaction = require("./routes/transaction_routes");
app.use("/api", transaction);
const payment = require("./routes/payment_routes");
app.use("/api", payment);

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "server running.................",
  });
});

app.get("/api", (req, res) => {
  res.status(200).send({
    success: true,
    message: "server running.................",
  });
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
