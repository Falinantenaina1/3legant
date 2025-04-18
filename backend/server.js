import dotenv from "dotenv";
import express from "express";
import connectDb from "./config/connectDb.js";
import productRouter from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/product", productRouter);

app.listen(PORT, () => {
  connectDb();
  console.log(`The server is running at http://localhost:${PORT}`);
});
