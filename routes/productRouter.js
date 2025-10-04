import express from 'express';
import { createProduct, deleteProduct, getProductID, getProducts, updateProduct } from '../controllers/productContrller.js';

const productRouter = express.Router()

productRouter.get("/", getProducts)
productRouter.post("/", createProduct)
productRouter.delete("/:productID", deleteProduct)
productRouter.put("/:productID", updateProduct)
productRouter.get("/:productID", getProductID)

productRouter.get("/search", (req, res)=>(
    res.json({
        message : "searching.."
    })
))

export default productRouter  