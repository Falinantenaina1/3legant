import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getLatestProduct,
  getOneProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.get("/latest", getLatestProduct);
router.get("/:id", getOneProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
