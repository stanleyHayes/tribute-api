const express = require("express");
const {authenticate} = require("../../../middleware/v1/admin/authenticate");
const {
    createTestimonial,
    deleteTestimonial,
    getTestimonial,
    getTestimonials,
    updateTestimonial
} = require("../../../controllers/v1/admin/testimonials");

const router = express.Router({mergeParams: true});

router.route('/').post(authenticate, createTestimonial).get(authenticate, getTestimonials);

router.route('/:id').get(authenticate, getTestimonial).put(authenticate, updateTestimonial)
    .delete(authenticate, deleteTestimonial);

module.exports = router;
