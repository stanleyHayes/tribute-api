const express = require("express");
const {authenticate} = require("../../../middleware/v1/admin/authenticate");
const {createReview, deleteReview, getReview, getReviews, updateReview} = require("../../../controllers/v1/admin/reviews");

const router = express.Router({mergeParams: true});

router.route('/').post(authenticate, createReview).get(authenticate, getReviews);

router.route('/:id').get(authenticate, getReview).put(authenticate, updateReview)
    .delete(authenticate, deleteReview);

module.exports = router;
