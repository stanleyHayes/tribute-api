const express = require("express");
const {authenticate} = require("../../../middleware/v1/admin/authenticate");
const {createProduct, deleteProduct, getProduct, getProducts, updateProduct} = require("../../../controllers/v1/admin/products");

const router = express.Router({mergeParams: true});

router.route('/').post(authenticate, createProduct).get(authenticate, getProducts);

router.route('/:id').get(authenticate, getProduct).put(authenticate, updateProduct)
    .delete(authenticate, deleteProduct);

module.exports = router;
