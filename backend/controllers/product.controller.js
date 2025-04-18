import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  if (!name || !description || !price || !imageUrl)
    return res
      .status(400)
      .json({ success: false, message: "Missing required field" });

  try {
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.status(201).json({ success: true, message: "Product created" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res
      .status(400)
      .json({ success: false, id, message: "The id is not valid" });

  try {
    const product = await Product.findById(id);
    console.log(product);
    if (!product)
      return res
        .status(400)
        .json({ success: false, message: "Product not exist" });
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res
      .status(400)
      .json({ success: false, id, message: "The id is not valid" });
  try {
    const isUpdated = await Product.findByIdAndUpdate(id, req.body);
    if (!isUpdated)
      return res.status(400).json({ success: false, message: "Bad request" });
    res.status(200).json({ success: true, message: "Product Updated" });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res
      .status(400)
      .json({ success: false, id, message: "The id is not valid" });
  try {
    const isDeleted = await Product.findByIdAndDelete(id);
    if (!isDeleted)
      return res
        .status(400)
        .json({ success: false, message: "An error is occurred" });
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
