const express = require("express");
const {authenticate} = require("../../../middleware/v1/admin/authenticate");
const {getPayment, getPayments, updatePayment, deletePayment} = require("../../../controllers/v1/admin/payments");

const router = express.Router({mergeParams: true});

router.route('/').get(authenticate, getPayments);

router.route('/:id').get(authenticate, getPayment).put(authenticate, updatePayment)
    .delete(authenticate, deletePayment);

module.exports = router;
