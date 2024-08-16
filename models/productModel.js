const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  imageUrl: { type: String },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
