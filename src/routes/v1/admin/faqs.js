const express = require("express");
const {authenticate} = require("../../../middleware/v1/admin/authenticate");
const {getFAQs, createFAQ, deleteFAQ, getFAQ, updateFAQ} = require("../../../controllers/v1/admin/faqs");

const router = express.Router({mergeParams: true});

router.route('/').post(authenticate, createFAQ).get(authenticate, getFAQs);

router.route('/:id').get(authenticate, getFAQ).put(authenticate, updateFAQ)
    .delete(authenticate, deleteFAQ);

module.exports = router;
