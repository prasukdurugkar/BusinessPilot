const express = require("express");
const app = express();
const dotenv = require("dotenv");
const errorMiddleware = require("./middleware/error");
app.use(express.json());

//config env
dotenv.config({ path: "./config/config.env" });
// import Routes
const ProductRoutes = require("./routes/productRoute");
const PurchaseRoutes = require("./routes/purchaseRoute");
const SalesRoutes = require("./routes/salesRoute");
const SupplierRoutes = require("./routes/supplierRoute");

app.use("/api/v1", ProductRoutes);
app.use("/api/v1", PurchaseRoutes);
app.use("/api/v1", SalesRoutes);
app.use("/api/v1", SupplierRoutes);

// importing error handler
app.use(errorMiddleware);
module.exports = app;
