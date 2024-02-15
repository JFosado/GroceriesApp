import { Router } from "express";
import {
  deleteProduct,
  getAllProducts,
  getOneDeleteProduct,
  getOneProduct,
  insertProduct,
  updateProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:bc", getOneProduct);
router.get("/delete/:bc", getOneDeleteProduct);
router.post("/", insertProduct);
router.post("/:bc", updateProduct);
router.delete("/:bc", deleteProduct);

export default router;
