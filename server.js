

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const productRoutes = require("./routes/products");

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes); // Mount the product routes

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

app.listen(8080, () => console.log("Server running on port 8080"));
