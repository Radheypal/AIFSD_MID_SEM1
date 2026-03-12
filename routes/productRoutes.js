const express = require("express");

const router = express.Router();

const {

createProduct,
getProducts,
updateProduct,
deleteProduct,
searchProduct,
filterCategory

} = require("../controllers/productController");

router.post("/products",createProduct);

router.get("/products",getProducts);

router.put("/products/:id",updateProduct);

router.delete("/products/:id",deleteProduct);

router.get("/products/search",searchProduct);

router.get("/products/category",filterCategory);

module.exports = router;