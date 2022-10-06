const express = require("express");
const {authenticate} = require("../../../middleware/v1/admin/authenticate");
const {updateOrder, getOrders, getOrder, createOrder, deleteOrder} = require("../../../controllers/v1/admin/orders");

const router = express.Router({mergeParams: true});

router.route('/').post(authenticate, createOrder).get(authenticate, getOrders);

router.route('/:id').get(authenticate, getOrder).put(authenticate, updateOrder)
    .delete(authenticate, deleteOrder);

module.exports = router;
